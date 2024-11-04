import { useDropzone } from 'react-dropzone';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Popup from './Popup1';
import { PiFilePdf } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import axios from 'axios';

const Page3 = ({ id }) => {
  
  const mathExplanationInstruction = `
Find the solution like a real teacher, explain like it happens in books. Use human readable format like 3x^2+2x+3/5=0 strictly
`;

const mathToWordExplanationInstruction = `
replace each symbol like + - √ or any symbol including brackets with their English word. I am building a system which can't understand them.
`;

async function explainMath(question, answer = "", prompt = mathExplanationInstruction) {
  console.log('triggered')
  if (answer.trim() === "") {
      answer = "I don't know the solution, guide me to reach the solution.";
  }

  const sentences = `Question : ${question}\nAnswer : ${answer}`;

  const url = 'https://abiv.rnpsoft.com/prompt';
  const payload = {
      message: sentences,
      prompt: prompt
  };

  try {
      const response = await axios.post(url, payload, {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) {
          return response.data.output_text;
      } else {
          console.error(`Error: Request failed with status code ${response.status}`);
          return ""; // or some other default value as needed
      }
  } catch (error) {
      console.error(`Error: ${error.message}`);
      return ""; // or some other default value as needed
  }
}

// Function to convert math symbols to words
async function mathToWords(sentences, prompt = mathToWordExplanationInstruction) {
  const url = 'https://abiv.rnpsoft.com/prompt';
  const payload = {
      message: sentences,
      prompt: prompt
  };

  try {
      const response = await axios.post(url, payload, {
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.status === 200) {
          return response.data.output_text;
      } else {
          console.error(`Error: Request failed with status code ${response.status}`);
          return ""; // or some other default value as needed
      }
  } catch (error) {
      console.error(`Error: ${error.message}`);
      return ""; // or some other default value as needed
  }
}
  const [text, setText] = useState("");
  const handelText = (e) => {
    setText(e.target.value);
  }
  const navigate = useNavigate();
  const sending = () => {
    if (text === "") {
      alert("please enter Something")
    }
    else {
      navigate("/video",{ state: { file: selectedFile } })
    }
  }
  const [isUpload, setUpload] = useState(false);

  const [selectedFile, setFile] = useState([]);
  console.log(selectedFile)
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);

    setFile(acceptedFiles)
    setUpload(true)
  }, []);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
useEffect(()=>{
  const {mcq}=location.state||{};
  console.log(mcq)
},[])
  const location = useLocation();
    const scrollToPage3 = location.state?.scrollToPage3;


  return (
    <section id={id} className="w-full h-[1024px] bg-custom-gradient flex flex-col items-center gap-y-4" >
      {isUpload
        ? <Popup filedata={{state: { file: selectedFile } }}/>
        : <>

          <div className="w-full font-poppins font-extrabold tracking-[-1.4px] pt-20" id="GetStarted" >

            <p className="text-white text-[64px] leading-[87px] text-center">
              Study with any Text/Image/PDF
            </p>

            <p className="text-[#b9b9b9] text-[32px] leading-[44px] text-center w-[900px] h-[160px] mx-auto">
              Join millions of students, researchers and professionals to
              instantly answer questions and understand research with AI
            </p>
          </div>
          
          <div {...getRootProps()} className="w-[840px] h-[310px] border-[1.35px] rounded-[10px] bg-[#010c16] border-[#d9d9d9] border-dashed flex flex-col items-center justify-center">





            <div className='className="w-[840px] h-[310px] flex flex-col items-center justify-center'>

              <input {...getInputProps()} name='file' />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <>
                    <PiFilePdf className='fill-[#f8f8f8] w-[145px] h-[34px]' />
                    <p className=' w-[145px] h-[34px] font-abel font-normal text-[21px] leading-[50px] text-[#ffffff] opacity-[88%] text-center'> Drop PDF here </p>
                  </>

              }
            </div>


            <div className="font-abel font-normal text-[24.8px] leading-10 text-[#7699de] flex justify-between w-full">

              <button className="p-2">
                Browse my Computer
              </button>

              <button className="p-2" onClick={()=>{navigate('/numericals')}}>
                From URL
              </button>

            </div>

          </div>
        </>

      }
    </section>

  )
}

export default Page3;