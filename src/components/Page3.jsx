import { useDropzone } from 'react-dropzone';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Popup from './Popup';
import { PiFilePdf } from "react-icons/pi";
import { BsStars } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { VscSend } from "react-icons/vsc";
const Page3 = ({ id }) => {
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

          <div {...getRootProps()} className="w-[840px] h-[370px] border-[1.35px] rounded-[10px] bg-[#010c16] border-[#d9d9d9] border-dashed flex flex-col items-center justify-center">




            <div className='className="w-[840px] h-[310px] flex flex-col items-center justify-center'>

              <input {...getInputProps()} name='file' />
              {
                isDragActive ?
                  <p>Drop the files here ...</p> :
                  <>
                    <PiFilePdf className='fill-[#f8f8f8] w-[64px] h-[64px]' />
                    <p className=' w-[145px] h-[34px] font-abel font-normal text-[21px] leading-[50px] text-[#ffffff] opacity-[88%] text-center'> Drop PDF here </p>
                  </>

              }
            </div>


            <div className="font-abel font-normal text-[24.8px] leading-10 text-[#7699de] flex justify-between w-full">

              <button className="p-2">
                Browse my Computer
              </button>

              <button className="p-2">
                From URL
              </button>

            </div>

          </div>

          <div className="w-[800px] h-[150px] flex flex-col items-center gap-y-8">
            <p className=" w-[540px] h-[26px] font-poppins font-bold text-2xl leading-[26px] text-center text-white flex gap-x-2 mt-4" >
              You can also <span className="text-[#3015d6]" > search </span> for your answers below
              <BsStars className="fill-[#3015d6] rotate-[135deg]" />
            </p>

            <div className="w-[750px] h-[77px] bg-custom-grad flex items-center justify-center rounded-[20px] border-none">
              <div className=" w-[745px] h-[72px] rounded-[20px] border-none p-[8.93px_30.9px_8.93px_30.9px] bg-[#1c1f28] shadow-[0px_0px_66.67px_10.99px_#3E2487]
                flex justify-center items-center">

                <div className="w-[550px] h-[48px] flex justify-between items-center relative">


                  <FaSearch className="fill-white w-[34px] h-[34px] cursor-pointer" />
                  <BsStars className="fill-white absolute top-0 left-6 -rotate-90 ml-1" />

                  <input type="text" className=" ml-9 w-[500px] bg-transparent placeholder:w-[190px] text-2xl placeholder:h-[34px] placeholder:font-poppins
                        placeholder:font-normal placeholder:text-[25px] placeholder:leading-[36px] placeholder:text-white outline-none text-white font-poppins font-normal" placeholder="Paste Your Text" value={text} onChange={handelText} />

                  <div className="w-[48px] h-[47px] rounded-[7px] bg-[#272b34] ml-4 flex items-center justify-center hover:cursor-pointer">
                    <VscSend className="fill-white w-[24.35px] h-[24.35px]" onClick={sending} />
                  </div>

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