import React, { useEffect, useRef, useState } from 'react'
import Video_Robot from "../assets/video_robot.png"
import video from "../assets/video.mp4"
import { Circle, CircleX, CircleArrowLeft, CircleCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import MLBOOK from "../assets/MLBOOK.pdf"
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import startinganim from './animation1.mp4'
import video9 from './welcome.mp4'
import doubtteacher from './Doubt.mp4'
import doubtteacher1 from './Doubt1.mp4'
import doubtanim from './doubt_anim.mp4'
import bg_music from './bg_music.mp3'
import bg_music1 from './bg_music1.mp3'
import mcq from './mcq.mp3'
import Login from './LoginSignup2/LoginSignup2'
import SignUp from './LoginSignup2/SignUp';
import Thinking from './thinking.gif'
import './numcericals.css'
import hindiwelcome from './intro_hindi.mp4'
import DownloadNotes from './download.png';  
import AskDoubts from './ask.png'; 
import Audi from './neerja.wav'
import './styles.css';
import thindi from './thindi.mp4'
import tenglish from './tenglish.mp4'
import Blackboard from './Blackboard.png'
const Video = () => {
  const [videoProgress, setVideoProgress] = useState(100);
  const[isRecognizing,setRec]=useState(false)
  const preRef =useRef(null)

    const [videoSrc, setVideoSrc] = useState('null');
    const [isDoubt,setdoubt]=useState(false);
    const [isLoaded,setLoaded]=useState(true)
    const [showTransition, setShowTransition] = useState(false);
    const [showTransition1,setShowTransition1]=useState(false)
    const [teacher,setTeacher]=useState('null')
    const [stop,setstopper]=useState(true)
    const audioRef = useRef(null);
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
  const [error, setError] = useState(null);
  const [credits, setcredits]=useState(100);
  const [istheory,settheory]=useState(false);
  const [displayText,setDisplayText]=useState('')
  const [index,setIndex]=useState(0)
  const [text1,settext1]=useState('')
  const [language, setLanguage] = useState(false);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const scrollTimeoutRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
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
    };

    const pre = preRef.current;
    if (pre) pre.addEventListener("scroll", handleScroll);

    return () => {
      if (pre) pre.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if(preRef.current){try{
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }catch(e){}}
    
  }, [displayText,isUserScrolling]);
  useEffect(() => {
    localStorage.setItem('isCheck','True')
    localStorage.setItem("isTheory",'False')
    const { lngSelected } = location.state || {};
    setLanguage(lngSelected);
  }, [location.lngSelected])
const interval=10000;
const applyTransition1 = () => {
  if (videoRef.current) {
    videoRef.current.pause();
  }
  setShowTransition1(true);

  setTimeout(() => {
    setShowTransition1(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, 2000); // Duration of transition
};
    const applyTransition = () => {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setShowTransition(true);

      setTimeout(() => {
        setShowTransition(false);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 2000); // Duration of transition
    };
  const tileCount = 10;
  const xtiles = [];
  for (let i = 0; i < tileCount * tileCount; i++) {
    const row = Math.floor(i / tileCount);
    const col = i % tileCount;
    const delay = (row + col) * 50;
    xtiles.push(
      <div
        key={i}
        className={`xmosaic-tile ${showTransition1 ? "show" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      ></div>
    );
  }
  const tiles = [];
  const centerX = Math.floor(tileCount / 2);
  const centerY = Math.floor(tileCount / 2);

  for (let i = 0; i < tileCount * tileCount; i++) {
    const row = Math.floor(i / tileCount);
    const col = i % tileCount;
    const distanceFromCenter = Math.sqrt(
      Math.pow(row - centerX, 2) + Math.pow(col - centerY, 2)
    );
    const delay = distanceFromCenter * 80; // Ripple delay
    tiles.push(
      <div
        key={i}
        className={`mosaic-tile ${showTransition ? "show" : ""}`}
        style={{ transitionDelay: `${delay}ms` }}
      ></div>
    );
  }
  const requestMicrophoneAccess = async () => {
    try {
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
      let count=1;
     try{
      let c=data[flagged][9][number-2].split('Option')[4].trim().split('Correct')[1].replace(',','.').replace('\n','')
      count=counter(c)
      if (!typeof count === 'number'){
        if(data[flagged][9][number-2].split('Option').length>4){
          count=counter(data[flagged][9][number-2].split('Option')[5])
        }
      }
    }catch{
        
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
        for(let k=Number(localStorage.getItem('capt'));k<=Number(localStorage.getItem('capt'))+Math.round(dict[i-1][`C1D1xchunk_${i}_sentence_${j}`][1]);k++){
          durations[`${k}`]=dict[i-1][`C1D1xchunk_${i}_sentence_${j}`][0]
          setdura(prevDuration => ({
            ...prevDuration,
            [`${k}`]: dict[i-1][`C1D1xchunk_${i}_sentence_${j}`][0]
          }));
        }
        console.log(durations)
        setcapt(capt+Math.round(dict[i-1][`C1D1xchunk_${i}_sentence_${j}`][1]))
        localStorage.setItem('capt',`${Number(localStorage.getItem('capt'))+Math.round(dict[i-1][`C1D1xchunk_${i}_sentence_${j}`][1])}`)
      }
      console.log('ho')
      console.log(durations)
    }
    const fetchresult2=async(i,f,t)=>{
      const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
      const headers = {
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
    const fetchresult3=async()=>{
      const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
      const headers = {
        // Add any required headers here
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer your-token-here',
      };
      const response1 = await axios.post(fetchUrl, {}, { headers });
      if (response1.status === 200) {
        const result = response1.data;
        console.log('Received Data:', result.receivedData);
        let c=result.receivedData;
        setData(c);
        return c[flagged][14].length
      }else{return -1}

  }
  const fetchresult4=async(i)=>{
    const fetchUrl = 'https://abiv.rnpsoft.com/submit1';
    const headers = {
      // Add any required headers here
      'Content-Type': 'application/json',
      // 'Authorization': 'Bearer your-token-here',
    };
    const response1 = await axios.post(fetchUrl, {}, { headers });
    if (response1.status === 200) {
      const result = response1.data;
      console.log('Received Data:', result.receivedData);
      let c=result.receivedData;
      return c[flagged][14][i]
    }else{return -1}

}
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
        console.log(JSON.stringify(localStorage.getItem('animation')))
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
      localStorage.setItem('index',0)

      setTimeout(()=>{
        if(!localStorage.getItem('auth-token')){islogin(false);
        videoRef1.current.pause();
        videoRef2.current.pause();
        }
        },10000)
      requestMicrophoneAccess()
      localStorage.setItem('capt','0');
      localStorage.setItem('capt1','0');
      localStorage.setItem('duration','0');
      localStorage.setItem('appeared','0')
      localStorage.setItem('mcq','0');
      loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
      .then(() => {
        console.log('jQuery loaded successfully');
      })
      .catch((error) => {
        console.error(error.message);
      });
      console.log(data)
     
      localStorage.setItem('b', JSON.stringify(0));
      localStorage.setItem('animation', null);
      localStorage.setItem('teacher', null);

    
    }, []); // Empty dependency array means this effect runs only once on mount
  
    const [showQuiz, setShowQuiz] = useState(false);
    const [quizInterval, setQuizInterval] = useState(10); 
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    useEffect(() => {
      console.log(language)
      localStorage.setItem('text1','')
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

    }, [quizInterval]);
    const closeQuiz = async() => {
        setShowQuiz(false);
        audioRef1.current.pause()
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
      setIsPlaying(prev => !prev); 
      if (isPlaying) {
        videoRef1.current.pause(); 
        videoRef2.current.pause();
        audioRef.current.pause();
        audioRef.current.volume=0.8

      } else {
        videoRef2.current.play(); 
        videoRef1.current.play();
        audioRef.current.volume=0.8
        audioRef.current.play();
        
        
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
          videoRef1.current.currentTime=ca2
          videoRef2.current.currentTime=ca2
          videoRef1.current.load()
          videoRef2.current.load()
          if(login){
          videoRef1.current.play()
          videoRef2.current.play()
          audioRef.current.play()
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
        audioRef.current.play()
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
        // Restart recognition unless there's a specific error that should stop it
        if (isRecognizing) {
          recognition.stop();  // Stop recognition if it's still running
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
          setShowQuiz(true)
          setnumber(number+1)
          localStorage.setItem('mcq','1');
          audioRef1.current.play()
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
    const applying=async()=>{
      if(Number(localStorage.getItem('b'))!=0){
        localStorage.setItem('capt1',Number(Math.round(videoRef2.current.duration)))  
      }
      const interval2=setInterval(async()=>{
        console.log(await fetchresult3())

        if(await fetchresult3()>=Number(localStorage.getItem('b'))+1){
          console.log("value of c is"+localStorage.getItem('b'));
          console.log(data[0][14][localStorage.getItem('b')])
          localStorage.setItem('text1',' '+await fetchresult4(localStorage.getItem('b')))
        clearInterval(interval2)
      localStorage.setItem('isTheory','True')
    const interval=setInterval(()=>{
      if(localStorage.getItem('index')<localStorage.getItem('text1').length && localStorage.getItem('isTheory').includes('True')){
        console.log("Value of b is "+ localStorage.getItem('b'))
        setDisplayText(prevDisplayText => prevDisplayText + localStorage.getItem('text1')[Number(localStorage.getItem('index'))]);
        if(!isUserScrolling)preRef.current.scrollTop = preRef.current.scrollHeight;
        localStorage.setItem('index',Number(localStorage.getItem('index'))+1)
        }else{
          clearInterval(interval)
        localStorage.setItem('isTheory','False')
        settheory(false)
        setDisplayText('')
        localStorage.setItem('index',0)
        let b=localStorage.getItem('b')
        const t=setTimeout(()=>{
          if(b==localStorage.getItem('b'))
          Endgame()
        },3000)
      }
    },150)}
  },1000)}

    return (
        <div className='video-page-background w-screen  flex flex-col justify-center items-center text-white font-[Montserrat] '>
            <h1 className='md:text-5xl text-[22px] text-center lg:text-justify  mt-5 font-semibold font-[jost]'>{topic==''?``:`TOPIC NAME: ${topic}`}</h1>
            <div className='relative flex items-center absolute right-[-380px] top-[-10px]'>
                        <span className='text-sm mr-2'>Quiz:</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={quizToggle} onChange={toggleQuiz} />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{quizToggle ? 'On' : 'Off'}</span>
                        </label>
                    </div>
                   
                      
               {(!localStorage.getItem('isTheory').includes('True') && !localStorage.getItem('isDoubt').includes('True')) &&     
               <div className="flex h-[520px] w-[1000px] relative" ref={containerRef}style={

          {
            border: '2px solid #fff',borderRadius: '15px',padding:'3px'
          }
               }>
               

      {/* Video 1 */}
      <div className={`${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""} ${isVideoVisible?'w-[60%]':'w-[100%]'} h-full flex justify-center items-center`} style={{ backgroundColor: '#181c64'}}>
        <div className="caption absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md z-20">
          {caption}
        </div>
        <div className={`mosaic-container object-cover w-full ${isFullScreen?'h-full':'h-[500px]'}`}>
        <video
          ref={videoRef1}
          onClick={handlePlayPause}
          className="object-cover w-full h-full"
          onTransitionEnd={() => setAnimating(false)}
          style={{ transition: 'transform 1s',marginLeft:'10px' }}
          onTimeUpdate={() => {
            if (Math.floor(videoRef2.current.duration - videoRef2.current.currentTime) === 3) {
              setTransition(true);
            }
            if(act && (Number(localStorage.getItem('b'))!=0 && stop &&!videoRef1.current.src.includes('doubt_anim')) )
            if(caption!=dura[`${Math.round(videoRef2.current.currentTime)}`]){
              let transitions=[applyTransition,applyTransition1]
              let randomIndex = Math.floor(Math.random() * transitions.length);
              transitions[randomIndex]();

            }
                        setcaption(dura[`${Math.round(videoRef2.current.currentTime)}`]);
          }}
          controls
        >
          <source src={startinganim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`tiles ${showTransition ? "visible" : ""}`}>{tiles}</div>
        <div className={`xtiles ${showTransition1 ? "visible" : ""}`}>{xtiles}</div>

        </div>
      </div>

      {/* Video 2 */}
      <div className={`sm:flex items-right ${isVideoVisible?'w-[40%]':'w-[0%]'} h-full hidden ${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""}  ml-30 justify-end`} style={{ backgroundColor: '#181c64' }}>
        <video
          ref={videoRef2}
          onTimeUpdate={handleTimeUpdate}
          onEnded={applying}
          controls
          className="object-cover w-full h-full flex justify-end"
          style={{ backgroundColor: '#086c7c', display: isVideoVisible ? 'block' : 'none' }}
        >
          <source src={localStorage.getItem('language').includes('False')?video9:hindiwelcome} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loader */}
        
      </div>
      {!isLoaded || l1 ? (
          <div className={`absolute inset-0 flex items-center justify-center z-10 ${!isLoaded || l1 ?"":"blur-sm"}`}>
            <img src="https://i.giphy.com/6ae7c7HIAkRkEnkoAc.webp" className="loadingimg" alt="Loading..." />
            <p className='font-semibold font-[jost]'>Thinking...</p>
            <audio autoPlay src={bg_music} loop></audio>
          </div>
         
        ) : null}
      {/* Quiz and controls */}
      {showQuiz && ( <div className="absolute inset-0 flex items-center justify-center z-30">
          <Quiz onClose={closeQuiz} />
        </div>)}
        {!login && !signup &&(
          <div className="absolute inset-0 flex items-center justify-center z-30">
          <Login islogin={islogin} issignup={issignup}></Login>
          </div>
          )}
          {!login && signup && (
            <div className="absolute inset-0 flex items-center justify-center z-30">
<SignUp/>
            </div>
          )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300 "
      onMouseEnter={() => {
        const captions = document.querySelectorAll('.caption');
        captions.forEach(caption => caption.style.bottom = '60px');
    }}
    style={{zIndex:'4'}}
    onMouseLeave={() => {
        const captions = document.querySelectorAll('.caption');
        captions.forEach(caption => caption.style.bottom = '12px');
    }}
      >
        <button onClick={handlePlayPause} className="text-white">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={videoProgress}
          onChange={handleSliderChange}
          className="w-full mx-4"
        />
        <span className="text-white">
          {videoProgress === 100 ? 'LIVE' : `-${Math.floor((videoRef2.current.duration - videoRef2.current.currentTime) / 60).toString().padStart(2, '0')}:${Math.floor((videoRef2.current.duration - videoRef2.current.currentTime) % 60).toString().padStart(2, '0')}`}
        </span>
      </div>

      <style>{`
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    
            </div>
}{
  (localStorage.getItem('isTheory').includes('True') && !localStorage.getItem('isDoubt').includes('True')) &&
  <image className="flex h-[520px] w-[1000px] relative" ref={containerRef} >

  <div className={`${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""} ${isVideoVisible?'w-[100%]':'w-[100%]'} h-full flex justify-center items-center`} style={{ backgroundColor: 'black' }}>

  <div className="chalkboard">
    <pre className="typing" ref={preRef}>
  <p>{displayText}</p>
  </pre>
 
</div>
</div>
{Number(localStorage.getItem('b'))==0&&
  <audio src={Audi} autoPlay/>
}
</image>
}  {localStorage.getItem('isDoubt').includes('True') &&     
               <div className="flex h-[520px] w-[1000px] relative" ref={containerRef}>
      {/* Video 1 */}
      <div className={`${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""} ${isVideoVisible?'w-[60%]':'w-[100%]'} h-full flex justify-center items-center`} style={{ backgroundColor: '#006a7d' }}>
        <div className="caption absolute bottom-4 left-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md z-20">
          {caption}
        </div>
        <div className="mosaic-container object-cover w-full h-[500px]">
        <video
          ref={videoRef1}
          onClick={handlePlayPause}
          className="object-cover w-full h-full"
          onTransitionEnd={() => setAnimating(false)}
          style={{ transition: 'transform 1s',marginLeft:'10px' }}
          controls
          autoPlay
          onEnded={()=>{
            setdoubt(false)
            if(isDoubt &&localStorage.getItem('isCheck').includes('notknown')){
              setdoubt(false);
              localStorage.setItem('isCheck','alpha');
              console.log('appears')
              setdoubt(false)
              setIsVideoVisible(true)
              setTimeout(()=>{
              videoRef1.current.src=doubtanim
              videoRef2.current.src=localStorage.getItem('language').includes('False')?tenglish:thindi;
              videoRef1.current.load()
              videoRef2.current.load()
              videoRef2.current.muted=false
              videoRef1.current.play()
              videoRef2.current.play()
            },2000)}
          }}
        
        >
          <source src={doubtanim} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={`tiles ${showTransition ? "visible" : ""}`}>{tiles}</div>
        <div className={`xtiles ${showTransition1 ? "visible" : ""}`}>{xtiles}</div>

        </div>
      </div>

      {/* Video 2 */}
      <div className={`sm:flex items-right ${isVideoVisible?'w-[40%]':'w-[0%]'} h-full hidden ${showQuiz||!login ? "blur-sm" : ""} ${!isLoaded || l1 ?"blur-sm":""}  ml-30 justify-end`} style={{ backgroundColor: '#086c7c' }}>
        <video
          ref={videoRef2}
          onTimeUpdate={handleTimeUpdate}
          onEnded={()=>{
            console.log(videoRef1.current.src)
            if(!isDoubt && localStorage.getItem('isCheck').includes('True')){
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
              // Restart recognition unless there's a specific error that should stop it
              if (isRecognizing) {
                recognition.stop();  // Stop recognition if it's still running
            }
            setTimeout(()=>{recognition.start()},1000)
            
              
          };
              recognition.onresult = function(event) {
                setRec(false)
                const result = event.results[event.results.length - 1];
                const transcript = result[0].transcript.trim();
                console.log("transcript");
                console.log(transcript);
                console.log("transcript:", transcript);
                recognition.stop();
                if(transcript.includes('no')){
                  localStorage.setItem('mcq','0');
                  localStorage.setItem('b',Number(localStorage.getItem('b'))+1)
                  localStorage.setItem('isCheck','True')
                  localStorage.setItem('isDoubt','False');
                  setdoubt(false)
                  checkVideoAvailability(Number(localStorage.getItem('b')))
                  setcapt1(true)
                  setact(true)
                  setstopper(true)
                }else{
                  fetchresult2(2,flagged,transcript)
                  console.log(capt1)
                  localStorage.setItem('isCheck','notknown')
                  checkDoubtAvailability(1)
                }
              }
              recognition.start();
            
                  }else if(localStorage.getItem('isCheck').includes('alpha')){
                    localStorage.setItem('isDoubt','False');
                    localStorage.setItem('isCheck','True');
                    setdoubt(false)
                    checkVideoAvailability(Number(localStorage.getItem('b')));
                    }
                console.log('b value is'+localStorage.getItem('b'))
              }
          }
          autoPlay
          controls
          className="object-cover w-full h-full flex justify-end"
          style={{ backgroundColor: '#086c7c', display: isVideoVisible ? 'block' : 'none' }}
        >
          <source src={localStorage.getItem('language').includes('False')?doubtteacher:doubtteacher1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loader */}
        
      </div>
      {!isLoaded || l1 ? (
          <div className={`absolute inset-0 flex items-center justify-center z-10 ${!isLoaded || l1 ?"":"blur-sm"}`}>
            <img src={Thinking} className="loadingimg" alt="Loading..." />
            <p className='font-semibold font-[jost]'>Thinking...</p>
            <audio autoPlay src={bg_music} loop></audio>
          </div>
         
        ) : null}
      {/* Quiz and controls */}
      {showQuiz && ( <div className="absolute inset-0 flex items-center justify-center z-30">
          <Quiz onClose={closeQuiz} />
        </div>)}
        {!login && !signup &&(
          <div className="absolute inset-0 flex items-center justify-center z-30">
          <Login islogin={islogin} issignup={issignup}></Login>
          </div>
          )}
          {!login && signup && (
            <div className="absolute inset-0 flex items-center justify-center z-30">
<SignUp/>
            </div>
          )}

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300 "
      onMouseEnter={() => {
        const captions = document.querySelectorAll('.caption');
        captions.forEach(caption => caption.style.bottom = '60px');
    }}
    style={{zIndex:'4'}}
    onMouseLeave={() => {
        const captions = document.querySelectorAll('.caption');
        captions.forEach(caption => caption.style.bottom = '12px');
    }}
      >
        <button onClick={handlePlayPause} className="text-white">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={videoProgress}
          onChange={handleSliderChange}
          className="w-full mx-4"
        />
        <span className="text-white">
          {videoProgress === 100 ? 'LIVE' : `-${Math.floor((videoRef2.current.duration - videoRef2.current.currentTime) / 60).toString().padStart(2, '0')}:${Math.floor((videoRef2.current.duration - videoRef2.current.currentTime) % 60).toString().padStart(2, '0')}`}
        </span>
      </div>

      <style>{`
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    
            </div>
}
            <i id="fullscreen-toggle-btn" className="text-white cursor-pointer">[Fullscreen]</i>
            <div className="flex justify-center space-x-14 top-2 mb-8">
      <div className="text-center ">
           <a href="/path-to-file/notes.pdf" download="notes.pdf ">
              <button className="hover:shadow-[0_0_30px_rgba(255,255,0,0.7)] transition-all duration-300" onClick={downloadNotes}>
                  <img
                  src={DownloadNotes}
                  alt="Download Notes"
                  className="h-[12vh] mb-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  />
              </button>
           </a>
      </div>

        <div className="text-center ">
                <button
                   onClick={() =>{localStorage.setItem('isDoubt','True')}} 
                   className="hover:shadow-[0_0_30px_rgba(255,255,0,0.7)] transition-all duration-300"
                >
                <img
                    src={AskDoubts}
                    alt="3D Mode"
                    className="h-[12vh] mb-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                />
                 </button>
        </div>
        </div>
            <audio ref={audioRef} src={bg_music} loop />
<audio ref={audioRef1} src={mcq}/>
          
        </div>
    )
}
export default Video;