import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import twilio from 'twilio';
import { MongoClient } from 'mongodb';
import axios from 'axios';
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
import OpenAIApi from "openai";
import PDFDocument from 'pdfkit';
import { type } from "os";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.join(__dirname, 'localvar.json');
const upload = multer({ dest: 'uploads/' });
const uri = 'mongodb+srv://Techie:Techie@cluster0.5asxa.mongodb.net/ABIV'; 
const dbName = 'ABIV';
const collectionName = 'email';
let client1=null;
const app=express();
const accountSid = 'ACa5b84ae6cdec23a68a4ea03794a54ca8'; // Your Twilio Account SID
const authToken = '58733ab0123e9bc9577ca4a09bbc213f'; // Your Twilio Auth Token
const client = twilio(accountSid, authToken);
let data = [[],[],[],[]]
let interview=[[0,'',[],''],[0,'','',''],[0,'','']]
let x=0;
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
app.use(cors({
  allowedHeaders: ['Content-Type', 'x-session-id']
}));
app.use(express.json())
const port = 80;
 mongoose.connect("mongodb+srv://Techie:Techie@cluster0.5asxa.mongodb.net/ABIV");
function addPauses(text, delimiter, pauseDuration) {
if(!text.includes(delimiter))return text;
    return text
        .split(delimiter)
        .map(sentence => sentence.trim() +  ` <break time="${pauseDuration}"/>` + delimiter)
        .join(' ')
        .trim();
}
app.get("/", (req, res) => {
    res.send("express app is running");
});
const tts=(toconvert,filename) =>{

  "use strict";
  var audioFile = `uploads/${filename}.wav`;
  const speechConfig = sdk.SpeechConfig.fromSubscription("5cgtafcR3A0Cl6szTwjHr48KtVTXTHJLfaK2z8Rhh5KAD10yxjpMJQQJ99AKACYeBjFXJ3w3AAAYACOGXOKF", "eastus");
  const audioConfig = sdk.AudioConfig.fromAudioFileOutput(audioFile);
  speechConfig.speechSynthesisVoiceName = "en-IN-NeerjaNeural"; 
const addBreaks = (text) => {
  text=addPauses(text, '.', '1000ms');
text=addPauses(text, '\n', '1000ms');
text=addPauses(text, 'plus', '50ms');
text=addPauses(text,'minus','50ms');
text=addPauses(text,'multiplied','50ms');
text=addPauses(text,'whole','100ms');
text=addPauses(text,'equals','100ms');
text=addPauses(text,'divided','50ms');
text=addPauses(text,'root','50ms');
text=addPauses(text,'square','50ms');
text=addPauses(text,'cube','50ms');
return  text;
};
  var synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
const toconv = `
<speak version='1.0' xmlns='http://www.w3.org/2001/10/synthesis' xml:lang='en-US'>
  <voice name='en-IN-NeerjaNeural' style='empathetic'>
      ${addBreaks(toconvert)}
  </voice>
</speak>
`;
setTimeout(()=>{
     synthesizer.speakSsmlAsync(toconv,
    function (result) {
        if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
            console.log("Synthesis finished.");
        } else {
            console.error("Speech synthesis canceled, " + result.errorDetails +
                "\nDid you set the speech resource key and region values?");
        }
        synthesizer.close();
        synthesizer = null;
    },
          function (err) {
              console.trace("err - " + err);
              synthesizer.close();
              synthesizer = null;
          });},1000)
      console.log("Now synthesizing to: " + audioFile);
};
app.post('/prompt', async (req, res) => {
  try {
    const { message } = req.body;
    const { prompt } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required in the request body' });
    }
    const apiKey = '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';
    const openai = new OpenAIApi({apiKey });
    const GPTOutput = await openai.chat.completions.create({ 
        model: "gpt-3.5-turbo", 
        messages: [{role: 'system', content: prompt}, { role: 'user', content: message }],
      }); 
    const output_text = GPTOutput.choices[0].message.content;
    res.json({output_text});
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' }
    );
  }
})
app.post("/activate",(req,res)=>{
let r=Number(req.body.serverdetails)
data[r+2][0][0]=1;
data[r+2][0][2]=1;
data[r+2][0][3]=req.body.summary;
console.log(data[r+2])
console.log(r)
res.send('Summary done');
})
app.post("/tts", (req, res) => {
    const { text } = req.body; // Extract text from the request body
    tts(text,req.body.filename); // Call the TTS function with the text
console.log("Mp3 audio generated") 
 res.send("Audio generated"); // You might want to send a more descriptive response
});
app.post('/chat', async (req, res) => {
    const { model, messages } = req.body;
const systemMessage = {
        role: 'system',
        content: 'You are a Virtual Assistant of the software named ABIV. You were created by the company RnPsoft Private Limited. If any query comes to you like payment failure or anything ask the user to write a mail to support@rnpsoft.com . Heres the information about ABIV software of whose assistant you are - ABIV is a virtual classroom experience for everyone powered by AI. You can upload your pdf and get virtual animations and get full explanation. You can test yourself with the help of quiz appearing time to time.'
    };
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: model,
            messages: [systemMessage, ...messages]
        }, {
            headers: {
                'Authorization': `Bearer sk-proj-fxgXl0hJupHqBJYpuAgXT3BlbkFJENTqy3QrONVeIvp3SNKK`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching response from OpenAI:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error processing request' });
    }
});
app.post('/add', async (req, res) => {
  try {
    if (!client1) {
      client1 = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client1.connect();
    }

    const database = client1.db(dbName);
    const collection = database.collection(collectionName);

    const newItem = req.body;
    const email = Object.keys(newItem)[0]; // Assuming the email is the key of the object

    const updateResult = await collection.updateOne(
      { [email]: { $exists: true } },
      { $set: { [email]: newItem[email] } },
      { upsert: true }
    );

    if (updateResult.upsertedCount > 0) {
      res.status(201).send({ message: 'Item inserted', id: updateResult.upsertedId });
    } else if (updateResult.modifiedCount > 0) {
      res.status(200).send({ message: 'Item updated' });
    } else {
      res.status(200).send({ message: 'No changes made' });
    }
  } catch (err) {
    console.error('An error occurred:', err);
    res.status(500).send('An error occurred');
  }
});
app.get('/find/:email', async (req, res) => {
  try {
    if (!client1) {
      client1 = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      await client1.connect();
    }

    const database = client1.db(dbName);
    const collection = database.collection(collectionName);

    const email = req.params.email;
    console.log(`Searching for email: ${email}`);
    const query = { [email]: { $exists: true } };
    const item = await collection.findOne(query);

    if (item) {
      console.log('Item found:', item);
      res.status(200).send({ message: 'Item found', item });
    } else {
      console.log('Item not found');
      res.status(404).send({ message: 'Item not found' });
    }
  } catch (err) {
    console.error('An error occurred:', err);
    res.status(500).send('An error occurred');
  }
});
app.post('/pop-out',(req,res)=>{
data[Number(req.headers['x-shift-id'])].shift();
data.json({
message:'received',
receivedData:data
})})
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
console.log(phoneNumber)
  if (!phoneNumber) {
    return res.status(400).json({ error: 'Phone number is required' });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const message = await client.messages.create({
      body: `Your OTP code is ${otp}`,
      from: '+15017984093', // Replace with your Twilio Phone Number
      to: phoneNumber
    });
    res.json({ message: 'OTP sent', otp });
  } catch (error) {
    console.error("Error sending OTP:", error);
    res.status(500).json({ error: error.message });
  }
});
app.delete('/delete-file', (req, res) => {
  const { filename } = req.body;
  
  if (!filename) {
    return res.status(400).send('Filename is required');
  }

  const filePath = path.join(__dirname, 'uploads', filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(500).send('Error deleting file');
    }

    res.send('File deleted successfully');
  });
});
app.post('/userdata', (req, res) => {
    res.json({
        message: 'received',
        receivedData: require('./data.json')
    })
})
app.get('/check-availability/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).json({ available: false });
    } else {
      res.status(200).json({ available: true });
    }
  });
});

app.post('/upload-video', upload.single('video'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video uploaded.');
    }

    const file = req.file;
    const tempPath = file.path;
    const targetPath = path.join(__dirname, 'uploads', file.originalname);

    // Move the uploaded file to the target path
    fs.rename(tempPath, targetPath, (err) => {
        if (err) {
            console.error('Error moving file:', err);
            return res.status(500).send('Error uploading video.');
        }

        console.log('File uploaded successfully:', file.originalname);
        res.send('Video uploaded successfully.');
    });
});
app.get('/downloads/uploads/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(__dirname, 'uploads', filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
      return;
    }

    const stat = fs.statSync(filePath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

      if (start >= fileSize) {
        res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
        return;
      }

      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(filePath, { start, end });
      const head = {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4',
      };

      res.writeHead(206, head);
      file.pipe(res);
    } else {
      const head = {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      };
      res.writeHead(200, head);
      fs.createReadStream(filePath).pipe(res);
    }
  });
});
app.post('/submit', (req, res) => {
    let c=req.body.sessionid;
let temp=false;
for(let i=0;i<2;i++){
for(let j=0;j<data[i].length;j++){
if(data[i][j][13]==c){
data[i][j]=req.body.data;temp=true; break}
}
if(temp)break;
}

   if (Array.isArray(data) && data.every(row => Array.isArray(row))) {
       console.log('Received 2D array:', data);

       // Send a response
       res.json({
           message: '2D array received successfully',
           receivedData: data
       });
   } else {
       res.status(400).json({
           message: 'Invalid input, expected a two-dimensional array'
       });
   }
});

app.post('/submit1', (req, res) => {
console.log(req.body);
let p=[];
  console.log(req.headers); // Logs all headers received
let c=req.body.sessionid

console.log(c);
let temp=false;
for(let i=0;i<2;i++){
for(let j=0;j<data[i].length;j++){
if(data[i][j][13]==c){
console.log(data[i][j])
p=data[i][j];temp=true; break}
}
if(temp)break;
}
    // Read the current value of 'x' from data.json
    res.json({
        message: 'received',
        receivedData: p
    })
})
app.post('/submit6',(req,res)=>{
res.json({
message:'received',
recievedData:data[1].length>0?data[1][0]:[0,0,0,'','',0,0,[],0,[],0,'',[],'',[]]
})});
app.post('/submit2', (req, res) => {
    // Read the current value of 'x' from data.json
    res.json({
        message: 'received',
        receivedData: data[0].length>0?data[0][0]:[0,0,0,'','',0,0,[],0,[],0,'',[],'',[]]
    })
})
app.post('/submit7',(req,res)=>{
data[1][0]=req.body
res.json({
message:'received',
receivedData:data[1][0]})})
app.post('/submit3',(req,res)=>{
data[0][0]=req.body
res.json({
message:'received',
receivedData:data[0][0]})})
app.post('/submit4',(req,res)=>{
res.json({
message:'recieved',
receivedData:data[2].length>0?data[2][0]:[0,0,0,'','',0,0,[],0,'']})});
app.post('/submit8',(req,res)=>{
res.json({
message:'received',
receivedData:data[3].length>0?data[3][0]:[0,0,0,'','',0,0,[],0,'']})})
app.post('/submit5',(req,res)=>{
data[2][0]=req.body;
res.json({
message:'received',
receivedData:data[2][0]})})
app.post('/submit9',(req,res)=>{
data[3][0]=req.body;
res.json({
message:'received',
receivedData:data[3][0]})})
app.post('/interview',(req,res)=>{
res.json({
        message: 'received',
        receivedData: interview
    })
})
app.post('/interview1',(req,res)=>{
interview=req.body;
if (Array.isArray(interview) && data.every(row => Array.isArray(interview))) {
       console.log('Received 2D array:', data);

       // Send a response
       res.json({
           message: '2D array received successfully',
           receivedData: data
       });
   } else {
       res.status(400).json({
           message: 'Invalid input, expected a two-dimensional array'
       });
   }
})
app.get('/download/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = `uploads/${filename}`; // Assuming files are stored in the 'uploads' directory
    const file = fs.createReadStream(filePath);
    
    file.on('error', (err) => {
        res.status(404).send('File not found');
    });
    
    file.pipe(res);
});

// Stream audio directly to the client
app.get('/stream/:filename', (req, res) => {
    const { filename } = req.params;
    const filePath = path.join(__dirname, 'uploads', filename);
    const fileStream = fs.createReadStream(filePath);
    fileStream.on('error', (err) => {
        console.error(err);
        res.status(404).send('File not found');
    });    
    // Set appropriate headers for audio streaming
    res.setHeader('Content-Type', 'audio/wav'); // Change this if you're using a different audio format
    res.setHeader('Accept-Ranges', 'bytes');

    fileStream.pipe(res);
});
app.post('/textupload',(req,res)=>{
console.log(req.body)
const file=req.body.file;
const uploadsDir = path.join(__dirname, 'uploads');
 const pdfPath = path.join(uploadsDir, 'textvideo.pdf');
    const doc = new PDFDocument();

    // Pipe the PDF into a file
    doc.pipe(fs.createWriteStream(pdfPath));
    
    // Add text to the PDF
    doc.fontSize(12).text(file, {
        align: 'left',
    });
    
    // Finalize the PDF and end the stream
    doc.end();
let flag=data[0].length>=data[1].length?0:1;
let trial=[0,0,0,'','',0,0,[],0,[],0,'',[],'',[]]
trial[0]=1;
trial[2]=1;
trial[3]='textvideo.pdf';
trial[4]=req.body.text
trial[13]=req.body.sessionid;
data[flag].push(trial)
let trial1=[1,0,0,'','',1,0,[],0,'']
trial1[9]=req.body.sessionid;
data[flag+2].push(trial1);
let randomString = generateRandomString();
res.status(200).send(String(flag))
})
app.post('/upload', upload.single('file'), (req, res) => {
console.log(req.body.text)
    
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }  
    const file = req.file;
    const filePath = `${file.destination}${file.filename}`;
if(req.body.sessionid.includes('interview')){
interview[0][0]=1;
interview[0][1]=file.originalname;
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Error reading file.');
      }
  
      // Write the file without encoding
      fs.writeFile(`uploads/${file.originalname}`, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).send('Error writing file.');
        }
});
});
}else if(req.body.sessionid.includes('question')){
if(req.body.pattern.includes('false')){
interview[1][0]=1;
interview[1][1]=file.originalname;}
else{
interview[0][0]=1;
interview[0][1]=file.originalname;
}
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Error reading file.');
      }
      fs.writeFile(`uploads/${file.originalname}`, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).send('Error writing file.');
        }
});
});
}

else{
      let flag=data[0].length<=data[1].length?0:1;
let trial=[1,0,1,'','',0,0,[],0,[],0,'',[],'',[]]
    trial[0]=1;
    trial[2]=1;
    trial[3]=file.originalname;
console.log(req.body)
trial[4]=req.body.text
trial[13]=req.body.sessionid;
data[flag].push(trial)
let trial1=[0,0,0,'','',1,0,[],0,'']
trial1[9]=req.body.sessionid;
data[flag+2].push(trial1)
    console.log(data)
    // Read the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return res.status(500).send('Error reading file.');
      }
  
      // Write the file without encoding
      fs.writeFile(`uploads/${file.originalname}`, data, (err) => {
        if (err) {
          console.error('Error writing file:', err);
          return res.status(500).send('Error writing file.');
        }
res.status(200).send(String(flag))
        console.log('File saved successfully');
      });
    });
}
  });
const users=mongoose.model("users",{
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        default:'A]]b)1iV_ma21*0n3g9ed1_wi51[t31h_T1]e1a11%m12Rn3P4s^o5f$9t12'
    },
    coins:{
        type:Number,
        default:100
    },
    watchtime:{
        type:Number,
        default:0
    },
    videos:{
        type:Object,
        default:{}
    },
avatar:{
type:String,
default:"https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg"
},
firstName:{
type:String,
default:'New'},
lastName:{
type:String,
default:'User'},
    accounttype:{
        type:String,
        default:'student'
    },
    examhistory:{
        type:Array,
        default:[]
    },
    interview:{
        type:Array,
        default:[]
    },
    numericals:{
        type:Array,
        default:[]
    },
    gender:{
        type:String,
        default:''
    },
    hindiopted:{
        type:Number,
        default:0
    },
    englishopted:{
        type:Number,
        default:0
    },
    hinglishopted:{
        type:Number,
        default:0
    },
    age:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now,
    },
signinwithgoogle:{
type:Boolean,
default:false},
    contacts_filled:{
        tpye:Object,
        default:{}
    }
})
const central_scehma=mongoose.model("central_scehma",{
topics_uploaded:{
    type:Array,
    default:[]
},
total_bill_spent:{
    type:Number,
    default:0
},
total_user_count:{
    type:Number,
    default:0
},
hindi_count:{
    type:Number,
    default:0
},
english_count:{
    type:Number,
    default:0
},
hinglish_count:{
    type:Number,
    default:0
},
texttovid_count:{
    type:Number,
    default:0
},
exams_appeared:{
    type:Number,
    default:0
},
interviews_appeared:{
    type:Number,
    default:0
},
numericals_solved:{
    type:Number,
    default:0
},
main_server_uptime:{
    type:Number,
    default:0
},
gpu_status:{
    type:Object,
    default:{}
},
male_count:{
    type:Number,
    default:0
},
female_count:{
    type:Number,
    default:0
},
chat_with_bot:{
    type:Array,
    default:[]
}
})

//creating endpoint for registing user

app.post("/signup", async (req, res) => {
console.log('receiving data');
 let b = req.body;
  
  let check = await users.findOne({ email: b.email });
  if (check) {
    return res.status(400).json({ success: false, error: "existing user found with same email id" });
  }
  const user = new users(b);
  await users.collection.insertOne(user);

  const data = {
    user: {
      id: user.id
    }
  }

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
})


//user login
app.post("/login",async(req,res)=>{
    let user=await users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password===user.password;
        if(passCompare||(user.signinwithgoogle && req.body.signinwithgoogle)){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data, "secret_ecom")
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"wrong password"});
        }
    }
    else{
        res.json({success:false,errors:"wrong email id"})
    }
})
app.post('/updatedb', async (req, res) => {
  const  datam = req.body;
  let check = await users.findOne({ email: datam.email });
  if (!check) {
    return res.status(400).json({ success: false, error: "No user found with the provided email id" });
  }
  const myquery = { email: datam.email };
  const newvalues = datam;
  users.updateOne(myquery, newvalues, function (err, result) {
    if (err) throw err;
    console.log("1 document updated");
    res.json({ success: true });
  });
});
app.post('/fetchdata', async (req, res) => {
    const { email } = req.body;
    let check=await users.findOne({email:email});
    if(!check){
        return res.status(400).json({success:false,error:"existing user found with same email id"});
    }
    res.json({success:true,data:check})
});
app.post('/updatemain', async (req, res) => {
    const { data } = req.body;
    const myquery = { email: data.email };
    const newvalues = { data } ;
    central_scehma.update(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    }
    );
    res.json({success:true})
}
)// curl -X POST -H "Content-Type: application/json" -d '{"email":""} http://localhost:80/fetchdata




//Api creation
app.listen(port, () => {
    console.log("server is running on " + port);
});