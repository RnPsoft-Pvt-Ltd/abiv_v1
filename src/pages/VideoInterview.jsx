import React,{useState,useRef,useEffect} from 'react';
import { BsMicMute } from "react-icons/bs";
import { FaRegHandPaper } from "react-icons/fa";
import { CiVideoOff } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { BsMic } from 'react-icons/bs';
import { BsChatLeftText } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import MyModal from './MyModel';
import Welcome from './welcome.mp4'
import Nocam from './nocamera.webp'
import welcome1 from './welcome1.mp4'
import axios from 'axios';
const VideoInterview = () => {
  const containerRef=useRef(null)
  const [fullScreen,setIsFullScreen]=useState(false)
  const toggleFullScreen = () => {
    const container = containerRef.current;
    if (!document.fullscreenElement) {
      container.requestFullscreen()
        .catch(err => console.log(`Error attempting to enable full-screen mode: ${err.message}`));
      setIsFullScreen(true);
    } else {
      document.exitFullscreen()
      .then(() => setIsFullScreen(false))
      .catch(err => console.log(`Error attempting to exit full-screen mode: ${err.message}`));
    }
  };
  const [currentEmotion, setCurrentEmotion] = useState(null);
  const [value,setvalue]=useState(1);
  const [file,setfile]=useState(1);
  const videoRef2 = useRef(null);
  let interview=[[0,'',[],''],[0,'','',''],[0,'','']]
  const [messageHistory, setmessage]=useState([{ role: 'system', content: `You are an AI Interviewer. If the user asks you the answer of the question then only you are going to provide it. Behave like a real interviewer. First you are going to get all his information then You are going to ask who is prime minister of India` }]);
  const Recognise=()=>{
    setisMuted(false)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          recognition.continuous = true;
          recognition.lang = 'en-US';
         
  recognition.onstart = function() {
    setRec(true)
      console.log("Recognition started.");
  };
      recognition.onerror = function(event) {
          console.error('Recognition error:', event.error);
          if (isRecognizing) {
            recognition.stop(); 
            setisMuted(true)
        }
        setTimeout(()=>{recognition.start()},1000)      
      };
          recognition.onresult = async function(event) {
            setRec(false)
            const result = event.results[event.results.length - 1];
            const transcript = result[0].transcript.trim();
            console.log("transcript")
            console.log(transcript);
            console.log("transcript:", transcript);
            recognition.stop();
            
            if(value==1){
              setvalue(2)
              setmessage(prevMessages => [...prevMessages, {role:'assistant',content:'Hey I am your Interviewer, I will be interviewing you today, May i know your name'}]);
            }
            setmessage(prevMessages => [...prevMessages, { role: 'user', content: transcript }]);

            const chatGPTResponse = await fetch('https://api.openai.com/v1/chat/completions', {
              method: 'POST',
              headers: {
                  'Authorization': `Bearer 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`,
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  model: "gpt-3.5-turbo",
                  messages: messageHistory,
              }),
          });
          const data = await chatGPTResponse.json();
    
          const chatResponse = data.choices[0].message.content;
    console.log(chatResponse)
    setmessage(prevMessages => [...prevMessages, { role: 'assistant', content: chatResponse }]);
    console.log(messageHistory)
    localStorage.setItem('coins',`${Number(localStorage.getItem('coins'))-3}`)

          interview[2][0]=1;
          interview[2][1]=chatResponse
          interview[2][2]=`Interview${file}`
          const headers = {
            // Add any required headers here
            'Content-Type': 'application/json',
            // 'Authorization': 'Bearer your-token-here',
          };
          try {
            const response = await axios.post('https://abiv.rnpsoft.com/interview1', interview, { headers });
            if (response.status === 200) {
              console.log('Updated Data:');
              console.log(response.data);
            } else {
              console.error(`Failed to update data. Status code: ${response.status}`);
              console.error(response.data);
            }
          } catch (error) {
            console.error('Error:', error);
          }

          let intervalId =  setInterval(async()=>{
            try{
              let response = await axios.get(`https://abiv.rnpsoft.com/check-availability/Interview${file}.mp4`);
              console.log(typeof response.data.available)
            if(response.data.available){
          let url1=`https://abiv.rnpsoft.com/downloads/uploads/Interview${file}.mp4`
          videoRef2.current.src=url1
          videoRef2.current.load()
videoRef2.current.play()
setfile(file+1)
clearInterval(intervalId)
            }
          else{
            response = await axios.get(`https://abiv.rnpsoft.com/check-availability/Interview${file}.mp4`);
          }
          }catch(e){}},3000)
            setisMuted(true)
                    };
        
          recognition.start();
        }
        const[isRecognizing,setRec]=useState(false)

  
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true); 
const [isMuted,setisMuted]=useState(true)
  const toggleVideo = async() => {
    if (videoRef.current) {
      
      if (isVideoPlaying) {
        videoRef.current.pause(); 
        let stream=videoRef.current.srcObject;
        let tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      } else {

        videoRef.current.play(); // Play the video
        
        let stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      
      }
      setIsVideoPlaying(!isVideoPlaying); // Toggle the play status
    }
  };
  useEffect(() => {
    const fullscreenBtn = document.getElementById('fullscreen-toggle-btn');
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener('click', toggleFullScreen);
    }
    return () => {
      if (fullscreenBtn) {
        fullscreenBtn.removeEventListener('click', toggleFullScreen);
      }
    }}, []);
  useEffect(() => {
    
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera: ", err);
      }
    };

    startCamera();

    // Cleanup on component unmount
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        let tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);
const tohandle=()=>{
     
}
const  [showMyModel , setShowMyModal] = useState(false);
const handleOnclose = () => setShowMyModal(false)
 return (
  <>
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 p-4 flex justify-center items-start min-h-screen">
      <div ref={containerRef} className="bg-gradient-to-b from-gray-400 to-gray-600 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-max">
        {/* Left section (Person in Black) */}
        <div className="flex flex-row justify-between space-x-4 h-[550px]">
          <div className="flex-1 flex items-center justify-center bg-blue-700 rounded-lg h-[100%] w-[100%]">
              <video src={Welcome}ref={videoRef2} autoPlay className="w-full h-full mx-auto rounded-lg object-cover" onEnded={()=>{Recognise(setisMuted)}}/>
              </div>
          <MyModal onclose={handleOnclose} visible={showMyModel}/>  
          {/* Right section (Person on Video Call) */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="bg-gray-300 w-full h-[75%] rounded-lg flex justify-center items-center mb-4">
            
            <video ref={videoRef} autoPlay playsInline className={`${isVideoPlaying?'w-full h-full':'w-[0%] h-[0%]'} rounded-lg object-cover`} style={{visibility:isVideoPlaying?'visible':'hidden'}}/> 
             <img src={Nocam}  className={`${!isVideoPlaying?'w-full h-full':'w-[0%] h-[0%]'} rounded-lg object-cover`} style={{visibility:!isVideoPlaying?'visible':'hidden'}}></img>
            </div>

            {/* Icons for the control */}
            <div className="flex space-x-4">
              <button className="bg-black p-2 rounded-full">
                {isMuted?
                <BsMicMute/>:<BsMic/>} 
              </button>
              <button className="bg-black p-2 rounded-full">
                <FaRegHandPaper/> 
              </button>
              <button
        onClick={toggleVideo}
        className="bg-black p-2 rounded-full"
      >
        {!isVideoPlaying?<CiVideoOff />
:<CiVideoOn/>}
      </button>
              <button className="bg-black p-2 rounded-full">
                <BsChatLeftText/>
              </button>
              <button className="bg-red-600 p-2 rounded-full" onClick={() => setShowMyModal(true)}>
                < MdCancel/>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
          <i id="fullscreen-toggle-btn" className="text-white cursor-pointer">[Fullscreen]</i>
</>
  );
};

export default VideoInterview;
