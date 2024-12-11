import React, { useState, useEffect } from 'react';
import UploadSVG from './Upload.svg'
import ScanSVG from './Scan.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./ImageUploader.css";
import { GoogleGenerativeAI } from '@google/generative-ai';
const TimerDiv = ({setupload}) => {
  const initialTime = 3 * 60 * 60;
  const nav = useNavigate();
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
      if (timeLeft > 0) {
          const intervalId = setInterval(() => {
              setTimeLeft((prevTime) => prevTime - 1);
          }, 1000);
          return () => clearInterval(intervalId);
      }
  }, [timeLeft]);
  const formatTime = (timeInSeconds) => {
      const hours = Math.floor(timeInSeconds / 3600);
      const minutes = Math.floor((timeInSeconds % 3600) / 60);
      const seconds = timeInSeconds % 60;
      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };
  return (
      <div className="second-div text-center text-2xl ">
          <div className="py-28">
              <p className="text-black mb-5 text-2xl font-bold">Time Left</p>
              <span className="Time">{formatTime(timeLeft)}</span>
          </div>
          <p className="text-black responses font-bold">Submit Responses :</p>
         <div className="flex space-x-4">
          <button className="upload items-center justify-center">
             <img src={UploadSVG} alt="upload-icon"></img> 
          </button>
                <button className="upload justify-center items-center" onClick={()=>{setupload(true)}}>
                        <img src={ScanSVG} alt="scan-icon"></img>  
                        
                </button>
                </div>
                <button className="submit" onClick={()=>{nav('/report')}}>Submit and <br />Exit</button>
      </div>
  );
};


export default function Qna() {
  const nav = useNavigate();

    const [data,setData]=useState([])
    const [summary,setSummary]=useState('')
    const [images, setImages] = useState([]);
    const [upload,setupload]=useState(false);
    async function explainMath(question, answer,checkingPrompt) {
      try {
  
        const message = `FIRST: ${question}\n SECOND: ${answer}`;
    
        const payload = { message, prompt: checkingPrompt };
        const headers = { 'Content-Type': 'application/json' };
    
        const response = await fetch('https://abiv.rnpsoft.com/prompt', {
          method: 'POST',
          headers,
          body: JSON.stringify(payload),
        });
    
        if (response.ok) {
          const responseJson = await response.json();
          return responseJson.output_text;
        } else {
          throw new Error(`Error: Request failed with status code ${response.status}`);
        }
      } catch (error) {
        console.error(error);
        return ""; // Or some other default value
      }
    }  
    function convertImageToBase64(imageFile) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result.split(',')[1]); // Return only the base64 part
        reader.onerror = reject;
        reader.readAsDataURL(imageFile);
      });
    }
    const handleSubmit = async () => {
      if (images.length === 0) {
        alert("No images selected.");
        return;
      }
    
      const API_KEY = "AIzaSyCQePMTO-2Ah0CqHBaHhG1uaDxMpZVWCnk"; // Replace with your Gemini API key
    
      // Show loading indicator
      alert("Uploading images... Please wait.");
    
      try {
        const descriptions = [];
        for (let i = 0; i < images.length; i++) {
         
          // Send the image to the Gemini API
  
          const prompt = "Find the OCR in the image";
          const genAI = new GoogleGenerativeAI(API_KEY);
const blobdata=await convertImageToBase64(images[i].file);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
const image = {
  inlineData: {
    data: blobdata ,
    mimeType: "image/png",
  },
};

const result = await model.generateContent([prompt, image]);
    
          if (result.response) {
            console.log(result.response.text())
            descriptions.push(result.response.text()); // Extract the description
          } else {
            console.warn("No description found for an image.");
          }
        }
    
        console.log("Descriptions received:", descriptions);
        alert("Descriptions fetched successfully! Check the console for details.");
        const checkingPrompt=`I am going to provide you two things
        FIRST - Set of questions and answers asked by teacher
        SECOND - Set of answers written by student for evaluation
        check the copy accordingly and return the output in the json format strictly as i will directly apply JSON.parse function on it
        Your Output strictly in this format =
        {
        questions:The number of questions available in the dataset,
        attempted:The number of question attempted by student,
        missed:The number of question missed by the student,
        correct:Total number of correct answers provided by student, If the answer is logically correct mark it correct,
        incorrect:Total number of incorrect answers provided by student,
        total:Total marks received by the student after checking example 42/80
        }`
        let final=await explainMath(data,descriptions,checkingPrompt);
        console.log(JSON.parse(final))
        localStorage.setItem('result',final)
        nav('/report')
      } catch (error) {
        console.error("Error fetching descriptions:", error);
        alert("Failed to fetch descriptions. Please check your API key and try again.");
      }
    };
  
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


    const fetchresult1=async()=>{
        const fetchUrl = 'https://abiv.rnpsoft.com/interview';
        const headers = {
          'Content-Type': 'application/json',
        };
        try{
        const response1 = await axios.post(fetchUrl, {}, { headers });
        if (response1.status === 200) {
          const result = response1.data;
          console.log(result.receivedData[1][2].length)
          if(result.receivedData[1][2].length>=1){
          setData(result.receivedData[1][3]);
          setSummary(result.receivedData[1][2]);
        } }else {
          console.error('Failed to fetch data:', response1.statusText);
        }}catch(error){}}
    useEffect(()=>{setInterval(()=>{console.log(data.length); if(data.length==0){
        console.log('yes');fetchresult1()}},1000)},[])
  return (
<> 
    <div className="main-div">
      {upload && (
        <div className="uploader-overlay">
        <div className="uploader-box">
        <button
        className="close-button"
        onClick={() => setupload(false)}
      >
        &times;
      </button>
        <div className="image-container">
          {images.map((image, index) => (
            <div key={index} className="image-wrapper">
              <img src={image.preview} alt="Uploaded" className="uploaded-image" />
              <button
                className="delete-button"
                onClick={() => handleImageRemove(index)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="upload-box">
            <label htmlFor="file-input" className="plus-icon">
              +
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      </div>
      )}
      <div className="first-div custom-scrollbar">
      <div className="content">
                        <div className=" mx-20 my-10">
                             {data.map((item, index) => (<>
        <p className="text-left mb-4"></p>
        <p key={index} className="text-left mb-6" style={{color:'black'}}>
          {item.toString().split('?')[0]}?
        </p>
        </>
      ))}
            </div>               
                    </div>
      </div>
      <TimerDiv setupload={setupload}/>
    </div>
    </>
  )
}
