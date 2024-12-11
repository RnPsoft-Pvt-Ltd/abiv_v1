import { useDropzone } from 'react-dropzone';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { PiFilePdf } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import axios from 'axios';
import border1 from './Overlay+Border.png'
import border2 from './Overlay+Border2.png'
import jsPDF from "jspdf";
const Page3 = ({ id }) => {
  const mathExplanationInstruction = `
In less than 300 words describe and explain the topic
  `;
  const generatePDF = (text) => {
    const doc = new jsPDF();

    // Add some text to the PDF
    doc.text(text, 10, 10);

    // Save the PDF
    doc.save("File1.pdf");
  };

const mathToWordExplanationInstruction = `
replace each symbol like + - √ or any symbol including brackets with their English word. I am building a system which can't understand them.
`;

async function explaincontext(question, prompt = mathExplanationInstruction) {
  console.log('triggered')
  
  const sentences = `Topic : ${question}`;

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

  const location = useLocation();
    const scrollToPage3 = location.state?.scrollToPage3;

    useEffect(() => {
        if (scrollToPage3) {
            const page3Element = document.getElementById('page3');
            if (page3Element) {
                page3Element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [scrollToPage3]);


  return (
    <section id={id} className="w-full min-h-screen bg-custom-gradient flex flex-col items-center gap-y-4 p-4">
      {isUpload
        ? <Popup filedata={{ state: { file: selectedFile } }} style={{ height: '200vh' }} />
        : <>
          <div className="w-full font-poppins font-extrabold tracking-[-1.4px] pt-20 text-center" id="GetStarted">
            <p className="text-white text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug lg:leading-normal">
              Study with any Text/Image/PDF
            </p>
            <p className="text-[#b9b9b9] text-lg md:text-xl lg:text-2xl leading-snug md:leading-normal lg:leading-relaxed w-full md:w-3/4 lg:w-1/2 mx-auto mt-4">
              Join millions of students, researchers and professionals to
              instantly answer questions and understand research with AI
            </p>
          </div>
          <div className='container flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
            <div className="relative w-full md:w-1/2 lg:w-1/4 aspect-square rounded-xl overflow-hidden mb-4 md:mb-0" {...getRootProps()}>
              <input {...getInputProps()} name='file' />
              <img src={border1} className="object-cover w-full h-full" />
              {isDragActive && <p className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">Drop the files here ...</p>}
            </div>
            <div className="relative w-full md:w-1/2 lg:w-1/4 aspect-square rounded-xl overflow-hidden cursor-pointer" onClick={() => { navigate('/qna') }}>
              <img src={border2} className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center gap-y-8 mt-8">
            <p className="w-full text-center text-white text-xl md:text-2xl lg:text-3xl font-bold flex gap-x-2">
              You can also <span className="text-[#3015d6]">search</span> for your answers below
              <BsStars className="fill-[#3015d6] rotate-[135deg]" />
            </p>
            <div className="w-full bg-custom-grad flex items-center justify-center rounded-2xl p-2">
              <div className="w-full bg-[#1c1f28] rounded-2xl p-2 flex items-center shadow-lg">
                <FaSearch className="fill-white w-8 h-8 cursor-pointer" />
                <BsStars className="fill-white absolute top-0 left-6 -rotate-90 ml-1" />
                <input type="text" className="flex-grow bg-transparent text-white text-lg md:text-xl lg:text-2xl placeholder-white outline-none ml-4" placeholder="Paste Your Topic to Study" value={text} onChange={handelText} />
                <div className="w-12 h-12 bg-[#272b34] rounded-lg flex items-center justify-center ml-4 cursor-pointer" onClick={async () => {
                  let c = await explaincontext(text);
                  console.log(c);
                  navigate('/textupload', { state: { c } });
                }}>
                  <VscSend className="fill-white w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </section>
  )
}

export default Page3;