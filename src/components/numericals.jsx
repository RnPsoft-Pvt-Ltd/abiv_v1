import React, { useEffect, useRef, useState } from 'react'
import Video_Robot from "../assets/video_robot.png"
import video from "../assets/video.mp4"
import { Circle, CircleX, CircleArrowLeft, CircleCheck, TextCursorInput } from 'lucide-react';
import { Link } from 'react-router-dom';
import MLBOOK from "../assets/MLBOOK.pdf"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import startinganim from './animation1.mp4'
import video9 from './welcome.mp4'
import doubtteacher from './Doubt.mp4'
import doubtanim from './doubt_anim.mp4'
import bg_music from './bg_music.mp3'
import bg_music1 from './bg_music1.mp3'
import mcq from './mcq.mp3'
import Login from './LoginSignup2/LoginSignup2'
import SignUp from './LoginSignup2/SignUp';
import './numcericals.css'
import audiofile from './YourAudioFile.wav'
import Blackboard from './Blackboard.png'
import './styles.css';
const Video = () => {
  const [videoProgress, setVideoProgress] = useState(100);
  const[isRecognizing,setRec]=useState(false)
    const [videoSrc, setVideoSrc] = useState('null');
    const [isDoubt,setdoubt]=useState(false);
    const [isLoaded,setLoaded]=useState(true)
    const [teacher,setTeacher]=useState('null')
    const [stop,setstopper]=useState(true)
    const audioRef = useRef(null);
    const[soundstate,setsoundstate]=useState(false)
    const [duration,setduration]=useState(0);
    const [isTLoaded,setTLoaded]=useState(true)
    const videoRef1 = useRef(null);
    const [quizToggle, setQuizToggle] = useState(true);
    const [interview,setinterview]=useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false);
    const videoRef2 = useRef(null);
    const audioRef1=useRef(null);
    const [topic,setTopic]=useState('');
    const [transition, setTransition] = useState(false);
    const [capt1,setcapt1]=useState(false)
    const [dbt,setdbt]= useState(0)
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayTexts, setDisplayTexts] = useState([]); // Store an array of text segments

    const [login,islogin]=useState(true)                         
    const [isVideoVisible, setIsVideoVisible] = useState(true);
    const [number,setnumber]=useState(1);
    const location = useLocation();
    const containerRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [caption,setcaption]=useState('Welcome to ABIV, Lets Dive into Todays Topic and embark on an engaging and insightful journey together')
    const [l1,setl1]=useState(false)
    const [animating, setAnimating] = useState(false);
    const [capt,setcapt]=useState(0)
    const [switcher,setswitch]=useState(false)
    const [appeared,setappeared]=useState(true)
    const [hasPermission, setHasPermission] = useState(false);
    const [signup,issignup]=useState(false);
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const preRef = useRef(null);
    const [largeState,setlarge]=useState('');
  const [error, setError] = useState(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
console.log(location)
const {to_write}=location.state||{}
const towrite=to_write
const data2 = JSON.parse(localStorage.getItem('numericals'))
useEffect(() => {
  localStorage.setItem('textIndex','0')
    const handleScroll = () => {
      try{
      const pre = preRef.current;
      const isNearBottom =
        pre.scrollHeight - pre.scrollTop <= pre.clientHeight -50;
      if (isNearBottom) {
        setIsUserScrolling(false); 
      } else {
        setIsUserScrolling(true); 
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsUserScrolling(false); 
        }, 1000); 
      }
    
      }catch(e){

      }  };

    const pre = preRef.current;
    if (pre) pre.addEventListener("scroll", handleScroll);
  
    return () => {
      if (pre) pre.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    try{
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }catch(e){}
  }, [displayText,isUserScrolling]);

  const requestMicrophoneAccess = async () => {
    try {
      // Request access to the microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
      console.log('Microphone access granted');
      // Do something with the stream, if needed
      stream.getTracks().forEach(track => track.stop()); // Stop the stream after use
    } catch (err) {
      setHasPermission(false);
      setError('Microphone access denied');
      console.error('Microphone access error:', err);
    }
  };
  useEffect(() => {
    if(!localStorage.getItem('textIndex'))localStorage.setItem('textIndex','0')
      if(Number(localStorage.getItem('textIndex'))==textIndex) setCharIndex(0); 
    if (textIndex < data2.length) {
      if (data2[textIndex].decoration.includes("box")&& Number(localStorage.getItem('textIndex'))==textIndex) {
        localStorage.setItem('textIndex',Number(localStorage.getItem('textIndex'))+1)
        // Add the whole text to the displayTexts array at once
        setDisplayTexts(prev => [
          ...prev,
          {
            text: data2[textIndex].text,
            decoration: data2[textIndex].decoration
          }
        ]);
          console.log('here')
    
        setCharIndex(0); // Reset character index for the new text item
        return;
      }
                
      if (charIndex < data2[textIndex].text.length && !data2[textIndex].decoration.includes("box")) {
        if(Number(localStorage.getItem('textIndex'))==textIndex)
        localStorage.setItem('textIndex',Number(localStorage.getItem('textIndex'))+1)

        const timer = setTimeout(() => {
          // Temporarily show the larger character effect
          const nextChar = data2[textIndex].text[charIndex];
          setlarge(nextChar);

          setTimeout(() => {
            setlarge('');
            // Append the current character with its styles
            setDisplayTexts(prev => [
              ...prev,
              {
                text: nextChar,
                decoration: data2[textIndex].decoration
              }
            ]);
            if(!isUserScrolling){
              try{
              preRef.current.scrollTop = preRef.current.scrollHeight;}catch(e){}
            }
            setCharIndex(charIndex + 1);
          }, 65);
        }, 70);
        return () => clearTimeout(timer);
      } else {
        // Move to the next text item
       // Reset character index for the new text item
      }
    }
  
  }, [charIndex, soundstate]);

  useEffect(()=>{
    try{
    audioRef.current.src=`https://abiv.rnpsoft.com/stream/${data2[textIndex].sound}.wav`
      audioRef.current.load();         
      audioRef.current.play();
    }catch(e){}
  },[soundstate])
let durations={}
const [dura,setdura]=useState({})
    const[act,setact]=useState(false)
    const deleteFile = async (filename) => {
      try {
        const response = await axios.delete('https://abiv.rnpsoft.com/delete-file', {
          data: { filename },
        });
        console.log(response.data); // 'File deleted successfully'
      } catch (error) {
        console.error('There was an error deleting the file!', error);
      }
    };
    let counter=(x)=>{
      for(let i=0;i<x.length;i++){
        switch(x[i]){
          case '1': return 1;
          case '2': return 2;
          case '3': return 3;
          case '4': return 4;
        }
      }
    }
    const updateData = async (data1) => {
      let updateUrl='https://abiv.rnpsoft.com/submit'
      let headers={
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN'  // Replace with your headers
      };
      try {
        const response = await axios.post(updateUrl, data1, { headers });
        if (response.status === 200) {
          console.log('Updated Data:');
          console.log(response.data);
        } else {
          console.log(`Failed to update data. Status code: ${response.status}`);
          console.log(response.data);
        }
      } catch (error) {
        console.error(`Error updating data: ${error}`);
        if (error.response) {
          console.error(error.response.data);
        }
      }
    };
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script ${src}`));
        document.body.appendChild(script);
      });
    };
    
    const Quiz = ({ onClose }) => {
      console.log(data[flagged][9][number-2]);
      console.log(data[flagged][9])
     
      let c=data[flagged][9][number-2].split('Option')[4].trim().split('Correct')[1].replace(',','.').replace('\n','')
      let count=counter(c)
      if (!typeof count === 'number'){
        if(data[flagged][9][number-2].split('Option').length>4){
          count=counter(data[flagged][9][number-2].split('Option')[5])
        }
      }
      let option1,option2,option3,option4;
      try{
        option1=data[flagged][9][number-2].split('Option')[1].trim().replace(',','.').replace('\n','')
        option2=data[flagged][9][number-2].split('Option')[2].trim().replace(',','.').replace('\n','')
        option3=data[flagged][9][number-2].split('Option')[3].trim().replace(',','.').replace('\n','')
        option4=data[flagged][9][number-2].split('Option')[4].trim().split('Correct')[0].replace(',','.').replace('\n','')
      }catch{
        option1="None of the above"
        option2=""
        option3=""
        option4=""
      }
      const [options, setOptions] = useState([
          { option: `${option1}`,correct:count==1?true:false, clicked: false },
          { option: `${option2}`, correct: count==2?true:false, clicked: false },
          { option: `${option3}`, correct: count==3?true:false, clicked: false },
          { option: `${option4}`, correct: count==4?true:false, clicked: false },
      ]);
  
      const handleOptionClick = (index) => {
          setOptions(prevOptions => {
              const newOptions = [...prevOptions];
              newOptions[index].clicked = !newOptions[index].clicked;
              if (newOptions[index].clicked) {
                  setSelectedOption(newOptions[index].option);
              } else {
                  setSelectedOption('');
              }
              return newOptions;
          });
      };
  
      const handleSubmit = () => {
          onClose();
      };
  
      return (
          <div className={`bg-white rounded-3xl shadow-lg w-full max-w-xl `} >
              <div className="text-center flex items-center justify-center h-[3rem] quiz_gradiant relative">
                  <CircleArrowLeft className="absolute left-[20px] top-[25%] cursor-pointer" onClick={onClose} />
                  <span className="text-white font-medium text-center">Time for some Questions</span>
              </div>
              <div className="text-left mb-4 mx-6">
                  <p className="text-lg font-semibold text-black">{data[flagged][9][number-2].split('Option')[0].trim()}</p>
              </div>
              <div className="space-y-4 mx-6">
                  {options.map((item, index) => (
                      <label key={index} onClick={() => handleOptionClick(index)} className="flex font-medium items-center text-black cursor-pointer">
                          {item.clicked ? (
                              item.correct ? (
                                  <CircleCheck className="text-purple-600 cursor-pointer" />
                              ) : (
                                  <CircleX className="text-purple-600 cursor-pointer" />
                              )
                          ) : (
                              <Circle className="text-purple-600 cursor-pointer" />
                          )}
                          <span className="ml-2">{item.option}</span>
                      </label>
                  ))}
              </div>
              <div className="flex justify-between mt-6">
                  <button
                      onClick={onClose}
                      className="bg-purple-500 mx-6 mb-6 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                  >
                      Skip
                  </button>
                  <button
                      onClick={handleSubmit}
                      className="bg-purple-500 mx-6 mb-6 text-white px-4 py-2 rounded-md hover:bg-purple-600"
                  >
                      Submit
                  </button>
              </div>
          </div>
      );
  };
  
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
    const handlecaption=(dict,i)=>{
      console.log(`chunk ${i}`)
      console.log(Object.keys(dict[i-1]).length)
      for(let j=1;j<=Object.keys(dict[i-1]).length;j++){
        console.log('j');
        for(let k=Number(localStorage.getItem('capt'));k<=Number(localStorage.getItem('capt'))+Math.round(dict[i-1][`C${Number(flagged+1)}D${Number(flagged+1)}xchunk_${i}_sentence_${j}`][1]);k++){
          durations[`${k}`]=dict[i-1][`C${Number(flagged+1)}D${Number(flagged+1)}xchunk_${i}_sentence_${j}`][0]
          setdura(prevDuration => ({
            ...prevDuration,
            [`${k}`]: dict[i-1][`C${Number(flagged+1)}D${Number(flagged+1)}xchunk_${i}_sentence_${j}`][0]
          }));
        }
        console.log(durations)
        setcapt(capt+Math.round(dict[i-1][`C${Number(flagged+1)}D${Number(flagged+1)}xchunk_${i}_sentence_${j}`][1]))
        localStorage.setItem('capt',`${Number(localStorage.getItem('capt'))+Math.round(dict[i-1][`C${Number(flagged+1)}D${Number(flagged+1)}xchunk_${i}_sentence_${j}`][1])}`)
      }
      console.log('ho')
      console.log(durations)
    }
    const fetchresult2=async(i,f,t)=>{
      const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
      const headers = {
        // Add any required headers here
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer your-token-here',
      };
      try{
      const response1 = await axios.post(fetchUrl, {}, { headers });
      if (response1.status === 200) {
        const result = response1.data;
        
        console.log('Received Data:', result.receivedData);
        let c=result.receivedData;
        c[f][10]=1;
        c[f][11]=t;
        updateData(c)
        // You can now use 'data' as needed
      } else {
        console.error('Failed to fetch data:', response1.statusText);
      }}catch(error){}}
    const fetchresult=async(i)=>{
      const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
      const headers = {
        // Add any required headers here
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer your-token-here',
      };
      try{
      const response1 = await axios.post(fetchUrl, {}, { headers });
      if (response1.status === 200) {
        const result = response1.data;
        setData(result.receivedData);
        console.log('Received Data:', result.receivedData);
        let c=result.receivedData;
        
        setTopic(c[flagged][3].split('.pdf')[0])
        // You can now use 'data' as needed
      } else {
        console.error('Failed to fetch data:', response1.statusText);
      }}catch(error){}}
      const fetchresult1=async(i)=>{
        const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
        const headers = {
          // Add any required headers here
          'Content-Type': 'application/json',
          // 'Authorization': 'Bearer your-token-here',
        };
        try{
        const response1 = await axios.post(fetchUrl, {}, { headers });
        if (response1.status === 200) {
          const result = response1.data;
          setData(result.receivedData);
          console.log('Received Data:', result.receivedData);
          let c=result.receivedData;
          if(i==2){
          handlecaption(c[flagged][12],Number(localStorage.getItem('b')))
          }
          setTopic(c[flagged][3].split('.pdf')[0])
          // You can now use 'data' as needed
        } else {
          console.error('Failed to fetch data:', response1.statusText);
        }}catch(error){}}

    const { flagged } = location.state || {};
    const { random } =  location.sessionid || {};
    const [data,setData]=useState([[0,0,0,'','',0,0,[],0,[],0,'',[],'',[]],[0,0,0,'','',0,0,[],0,[],0,'',[],'',[]],[0,0,0,'','',1,0,[],0,''],[0,0,0,'','',1,0,[],0,'']])
    let b=0
    const fetchVideo = async (i) => {
        
      try {
        console.log(`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xconcatenated_chunk_${i}.mp4`)
        const response = await fetch(`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xconcatenated_chunk_${i}.mp4`);
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);
        setVideoSrc(videoUrl);
        localStorage.setItem('animation', videoUrl);
        console.log(JSON.stringify(localStorage.getItem('animation')));
        setLoaded(false)
      } catch (error) {
        console.error(error);
      }
    };
    const fetchTeacher = async (i) => {
      try {
        console.log(`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xconcatenated_chunk_${i}.mp4`)
        const response = await fetch(`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xresult_video_${i}.mp4`); // Change the URL according to your server
        if (!response.ok) {
          throw new Error('Failed to fetch video');
        }
        const videoBlob = await response.blob();
        const videoUrl = URL.createObjectURL(videoBlob);
        setTeacher(videoUrl);
        localStorage.setItem('teacher', videoUrl);
        setTLoaded(false)
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      .then(() => {
        console.log('jQuery loaded successfully');
      })
      .catch((error) => {
        console.error(error.message);
      });

    
    }, []); // Empty dependency array means this effect runs only once on mount
  
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizInterval, setQuizInterval] = useState(10); 
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
      if (videoRef1.current) {
        // Set the volume to 50% (0.5)
        videoRef1.current.volume = 0.2;
      }
      const fullscreenBtn = document.getElementById('fullscreen-toggle-btn');
      if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullScreen);
      }
      return () => {
        if (fullscreenBtn) {
          fullscreenBtn.removeEventListener('click', toggleFullScreen);
        }
      };
        const handleTimeUpdate = () => {
            if (videoRef.current.currentTime >= quizInterval) {
                setShowQuiz(true);
                videoRef.current.pause();
            }
        };

      

        return () => {
        };
    }, [quizInterval]);
    const closeQuiz = async() => {
        setShowQuiz(false);
        setQuizInterval(prev => prev + 10); 
        videoRef1.current.src=doubtanim
        videoRef2.current.src=doubtteacher
        videoRef1.current.load()
        videoRef2.current.load()
        videoRef1.current.play()
        videoRef2.current.play()
        videoRef2.current.muted=false;
    };
    const handlePlayPause = () => {
      setIsPlaying(prev => !prev); // Toggle play/pause state
      if (isPlaying) {
        videoRef1.current.pause(); // Pause the second video
        videoRef2.current.pause();
        audioRef.current.volume=0.8

      } else {
        videoRef2.current.play(); // Play the second video
        videoRef1.current.play();
        
        
      }
    };
    const handleSliderChange = (e) => {
      const video = videoRef2.current;
      const newTime = (e.target.value / 100) * video.duration;
      video.currentTime = newTime;
      videoRef1.current.currentTime=newTime;
      setVideoProgress(e.target.value);
  };

  const handleTimeUpdate = () => {
    if(videoProgress!=100){
      const video = videoRef2.current;
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress);
    }
  };
    const preloadVideo = (url) => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.src = url;
        video.oncanplaythrough = () => resolve(video);
        video.onerror = (e) => reject(e);
      });
    };
    const checkVideoAvailability = async (i) => {
console.log('called at instance'+i)
console.log('Duration is '+localStorage.getItem('duration'));

      try {
        await fetchresult(2)
        const response = await axios.get(`https://abiv.rnpsoft.com/check-availability/C${Number(flagged)+1}D${Number(flagged)+1}xconcatenated_chunk_${i}.mp4`);
        const response1=await axios.get(`https://abiv.rnpsoft.com/check-availability/C${Number(flagged)+1}D${Number(flagged)+1}xresult_video_${i}.mp4`)
        if (response.data.available && response1.data.available) {
          let ca=Number(localStorage.getItem('capt'))
          let ca2=Number(localStorage.getItem('capt1'))
          console.log('my value is'+ca)
          await fetchresult1(2)
setl1(true)
          setLoaded(true)
          let url1=`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xconcatenated_chunk_${i}.mp4`
          let url2=`https://abiv.rnpsoft.com/downloads/uploads/C${Number(flagged)+1}D${Number(flagged)+1}xresult_video_${i}.mp4`
          videoRef1.current.src=url1
          videoRef2.current.src=url2
          videoRef1.current.currentTime=ca
          videoRef2.current.currentTime=ca2
          videoRef1.current.load()
          videoRef2.current.load()
          if(login){
          videoRef1.current.play()
          videoRef2.current.play()
          }
          videoRef1.current.oncanplaythrough = () => {setl1(false);
            console.log(Number(localStorage.getItem('duration')))
            if(!capt1){
            
            
            }else{setcapt1(false)
            }
            
            setact(true)
            setTransition(false)

            
          }
          videoRef2.current.oncanplaythrough = () => {setl1(false);
           
          }
       
        videoRef1.current.muted=true
        videoRef2.current.muted=false
      
        } else {
          setLoaded(false)
          setTimeout(()=>{checkVideoAvailability(i)}, 5000); // Retry after 5 seconds if not available
        }
      } catch (error) {
        console.error('Error checking video availability:', error);
        setLoaded(false)
        setTimeout(()=>{checkVideoAvailability(i)}, 5000); // Retry after 5 seconds if there's an error
      }
    };

    const checkDoubtAvailability = async (i) => {
      try {
        fetchresult(1)
        const response = await axios.get(`https://abiv.rnpsoft.com/check-availability/${dbt}C${Number(flagged)+1}D${Number(flagged)+1}xdoubtconcatenated_chunk_${i}.mp4`);
        if (response.data.available) {
          setl1(true)
          setLoaded(true)
          setdoubt(true)
          let url1=`https://abiv.rnpsoft.com/downloads/uploads/${dbt}C${Number(flagged)+1}D${Number(flagged)+1}xdoubtconcatenated_chunk_${i}.mp4`
          await preloadVideo(url1);
          setAnimating(true);
          videoRef1.current.src=url1
          videoRef1.current.load()
          videoRef2.current.load()
          videoRef1.current.oncanplaythrough = () => setl1(false);
          setIsVideoVisible(false)
          setAnimating(false);
          setdbt(dbt+1);
        videoRef1.current.play()
        videoRef2.current.play()
        videoRef1.current.muted=false
        videoRef2.current.muted=true
        
        } else {
          setLoaded(false)
          setTimeout(()=>{checkDoubtAvailability(i)}, 5000); 
        }
      } catch (error) {
        console.error('Error checking video availability:', error);
        setLoaded(false)
        setTimeout(()=>{checkDoubtAvailability(i)}, 5000);
      }
    };
    const Endgame=async()=>{
      videoRef1.current.pause()
      console.log(videoRef1.current.duration)
      console.log(b)
      setact(false)
      console.log(data[flagged][6])
      
      if(videoRef2.current.muted){
      }
      if(videoRef1.current.src.includes('doubt_anim')){
        setcaption('If you have any doubts feel free to ask')
        setstopper(false)
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
      }
      setTimeout(()=>{recognition.start()},1000)
      
        
    };
        recognition.onresult = function(event) {
          setRec(false)
          const result = event.results[event.results.length - 1];
          const transcript = result[0].transcript.trim();
          console.log("transcript")
          console.log(transcript);
          console.log("transcript:", transcript);
          recognition.stop();
          if(transcript.includes('no')){
            localStorage.setItem('mcq','0');
            localStorage.setItem('b',Number(localStorage.getItem('b'))+1)
            checkVideoAvailability(Number(localStorage.getItem('b')))
            setcapt1(true)
            setact(true)
            setstopper(true)
          }else{
           
          fetchresult2(2,flagged,transcript)
          
         
          console.log(capt1)
          checkDoubtAvailability(1)
          }
          console.log('b value is'+localStorage.getItem('b'))
        };
        recognition.start();
      }
      else if(1==1 ){
        setnumber(number+1)
        setdoubt(false)
        setIsVideoVisible(true)
        let c=b+1;
        localStorage.setItem('b',JSON.parse(Number(localStorage.getItem('b')))+1)
        console.log('b value is'+localStorage.getItem('b'))
        b=b+1
        console.log(b)
        console.log(JSON.parse(localStorage.getItem('b')))
        console.log('i was called')
         if(localStorage.getItem('b')==1){
        checkVideoAvailability(1);
        setcapt1(false)
       }else{
        setstopper(true)
        if(Number(localStorage.getItem('b'))%3==0 && quizToggle){
          localStorage.setItem('appeared','1')
          
          localStorage.setItem('b',JSON.parse(Number(localStorage.getItem('b')))-1)
          setcapt1(true)
          if(Number(localStorage.getItem('mcq'))==0){
          setcaption('If you have any doubts feel free to ask')
          localStorage.setItem('capt1',Number(Math.round(videoRef2.current.duration)))  
          setShowQuiz(true)
          setnumber(number+1)
          localStorage.setItem('mcq','1');
          }else{
            videoRef1.current.src=doubtanim
            videoRef2.current.src=doubtteacher
            videoRef1.current.load()
            videoRef2.current.load()
            videoRef1.current.play()
            videoRef2.current.play()
            videoRef2.current.muted=false;
          }
        

         
         setcaption('If you have any doubts, feel free to ask !')
      }else{
        
        localStorage.setItem('appeared','0')
        console.log('avail'+Number(localStorage.getItem('duration')))

        setact(true)
       
        localStorage.setItem('capt1',Number(Math.round(videoRef2.current.duration)))  
        
checkVideoAvailability(Number(localStorage.getItem('b')))
}}      
    }
    }
    const toggleQuiz = () => {
      setQuizToggle(!quizToggle);
      if (!quizToggle) {
          setShowQuiz(false);
      }
  };
    const downloadNotes = () => {
      var printWindow = window.open('', '', 'height=400,width=800');
      
      printWindow.document.write(`</head><body ><title>${data[flagged][3]}</title>`);
      printWindow.document.write(`</body><b>Summary</b></html><br><br>`);
      printWindow.document.write(`</body>${data[flagged+2][3]}</html><br><br>`);
      printWindow.document.write(`</body><b>Multiple Choice Questions</b></html><br><br>`);
      printWindow.document.write(`</body>${data[flagged][9].join('<br><br>')}</html>`);
      printWindow.document.close();
      printWindow.print();
        //const link = document.createElement('a');
        //link.href = MLBOOK; 
        //link.download = 'notes.pdf';
        //document.body.appendChild(link);
        //link.click();
        //document.body.removeChild(link);
    };

    return (
        <div className='video-page-background w-screen  flex flex-col justify-center items-center text-white font-[Montserrat] '>
            <h1 className='md:text-5xl text-[22px] text-center lg:text-justify  mt-5 font-semibold font-[jost]'>{topic==''?``:`TOPIC NAME: ${topic}`}</h1>
        
               <div className="flex h-[520px] w-[1000px] relative" ref={containerRef}>
      {/* Video 1 */}
      <div className={`${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""} ${isVideoVisible?'w-[87%]':'w-[100%]'} h-[100%] flex justify-center items-center`}   style={{ backgroundImage: `url(${Blackboard})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  }}
      >
      <div className="chalkboard">
      <pre className="typing" ref={preRef}>
        {displayTexts.map((item, index) => (
          <span key={index} className={item.decoration.join(' ')}>
            {item.text}
          </span>
        ))}
        <span style={{ fontSize: '40px' }}>
          <b>{largeState}</b>
        </span>
        {largeState.length > 0 ? ' 🖋️' : null}
      </pre>
    </div>
      </div>

     
      {!isLoaded || l1 ? (
          <div className={`absolute inset-0 flex items-center justify-center z-10 ${!isLoaded || l1 ?"":"blur-sm"}`}>
            <img src="https://i.giphy.com/6ae7c7HIAkRkEnkoAc.webp" className="loadingimg" alt="Loading..." />
            <p className='font-semibold font-[jost]'>Thinking...</p>
            <audio autoPlay src={bg_music} ></audio>
          </div>
         
        ) : null}
      <style>{`
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    
            </div>
           
            <i id="fullscreen-toggle-btn" className="text-white cursor-pointer">[Fullscreen]</i>
            <audio ref={audioRef} src={`https://abiv.rnpsoft.com/stream/${data2[0].sound}.wav`} autoPlay onEnded={()=>{
              setTimeout(()=>{
              setTextIndex(textIndex + 1);
              setsoundstate(soundstate?false:true)},[1000])
            }}/>
<audio ref={audioRef1} src={mcq}/>
            <p className='w-[80%] md:w-[50%] text-sm  lg:text-xl  text-center mt-5'>YOU CAN EASILY DOWNLOAD THE NOTES FROM BELOW AND 
            ALSO ASK DOUBTS IF YOU HAVE ANY.</p>
            <div className='flex justify-evenly w-full mt-5'>
                <button className=' border border-white p-[7px] md:p-2 rounded-3xl text-[9px] md:text-sm hover:border-2'>FEEDBACK</button>
                <button onClick={downloadNotes} className=' border border-white p-[7px] md:p-2 rounded-3xl text-[9px] md:text-sm hover:border-2'>DOWNLOAD NOTES</button>
                <Link target='_blank' to="/doubt" className=' border border-white p-[7px] md:p-2 rounded-3xl text-[9px] md:text-sm hover:border-2'>ASK DOUBTS</Link>
            </div>
        </div>
    )
}

export default Video;
