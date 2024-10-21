import React, { useState, useEffect } from 'react';
import UploadSVG from './Upload.svg'
import ScanSVG from './Scan.svg'
import axios from 'axios';
const TimerDiv = () => {
  const initialTime = 3 * 60 * 60;
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
                <button className="upload justify-center items-center">
                        <img src={ScanSVG} alt="scan-icon"></img>  
                </button>
                </div>
                <button className="submit">Submit and <br />Exit</button>
      </div>
  );
};

export default function Qna() {
    const [data,setData]=useState([])
    const [summary,setSummary]=useState('')
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
      <TimerDiv/>
    </div>
    </>
  )
}
