import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';
import axios from 'axios';

const Popup = ({filedata}) => {
  const [closer, setCloser] = useState(true);
    const [loader, setLoader] = useState(false);
    const nav = useNavigate();
    const loadingHandler = () => setLoader(true);
    const [language,setLanguage] =useState("")
    const [lngSelected,setLngSelected]=useState(false);
    const [flagged,setflag]=useState(0)
    let file=filedata.state.file
    file=file[0]

    const handleUpload = async (data) => {
      console.log(file)
      if (!file) {
        console.error('No file selected');
        return;
      }
    
      try {
        if (language.includes('False'))data='False'
        else data='True'
        const formData = new FormData();
        formData.append('file', file);
    formData.append('text',data)
        const response = await axios.post('http://54.79.239.162:4000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        if (response.status === 200) {
          const result = response.data; // Axios already parses the response data
          console.log('Server response:', result);
          alert('File uploaded successfully: ' + result);
        } 
    
        console.log('File uploaded successfully', response);
      } catch (error) {
        console.error('Error uploading file', error);
      }
    };
    const handelLanguage=(e)=>{
      setLanguage(e);
      setLngSelected(true)
      console.log(language)
      loadingHandler()
    }

    console.log(language)

    useEffect(() => {
      localStorage.setItem('capt','0');
      localStorage.setItem('duration','0');
      localStorage.setItem('appeared','0')
      
      localStorage.setItem('b', JSON.stringify(0));
      localStorage.setItem('animation', null);
      localStorage.setItem('teacher', null);
        const closeHandler = () => {
            if (closer) {
              setCloser(false);
              console.log('I am triggered')
            }
            else if (loader) {
                setLoader(false);
                handleUpload("True")
                localStorage.setItem('capt','0');
      localStorage.setItem('duration','0');
      localStorage.setItem('appeared','0')
      
      localStorage.setItem('b', JSON.stringify(0));
      localStorage.setItem('animation', null);
      localStorage.setItem('teacher', null);
                nav("/video", { state: { flagged } });
                
            }
        }
        
        setTimeout(() => closeHandler(), 3000)
    }, [closer, loader, nav]);
  return (
    
      <div className='z-[2] w-full h-[90%] md:w-[90%] md:h-[80%] flex justify-center items-center flex-col  '>
       <h1 className={`sm:text-4xl lg:text-[2.5rem]  text-[1.75rem] w-full font-bold ${closer && 'text-[#928d8d]'}  text-center  `}>Study with any Text/Image/PDF</h1>
       <p className={`text-[#B9B9B9] font-bold text-sm  sm-text-lg  md:text-xl p-3 w-[90%] lg:w-[60%]  text-center ${closer && 'hidden'} `}>Join millions of students, researchers and professionals to  instantly answer questions and understand research with AI </p>

       { closer 
       ? <div className='m-2 h-[30%] w-[80%] sm:h-[60%] sm:w-[60%] lg:w-[50%]  border  text-white flex justify-center items-center  border-[#D9D9D9] bg-[#ffff] mt-10 max-h-80'> <FadeLoader color="#adadad" /> </div>
       : <div className='m-2 h-[30%] w-[80%] sm:h-[60%] sm:w-[60%] lg:w-[50%] border-[2px] border-dashed rounded-lg text-white flex flex-col justify-evenly items-center text-center  border-[#D9D9D9] bg-[#010C16] mt-10 max-h-80 '>
       
          <p className={`text-sm text-[#828282] md:text-[16px] tracking-tight ${lngSelected && 'hidden'}`}>Please choose the language you are comfortable with!</p>

          <div className={`flex justify-evenly  w-full ${lngSelected && 'hidden'} `}>
            <button className='tracking-tight text-center w-[7rem] p-2 h-[2rem] text-[10px] bg-[#8d53df] rounded-3xl 'defaultValue={"English"} onClick={()=>{handelLanguage('False')}} >Continue in English</button>
            <button className='tracking-tight w-[7rem] text-center p-2 h-[2rem] text-[10px] bg-[#8d53df] rounded-3xl ' defaultValue={"Hindi"} onClick={()=>{handelLanguage('True')}} >Continue in Hindi</button>
          </div>

          {lngSelected && 
          <FadeLoader color="#adadad"  />
          }


       
        </div>

       }
       
      
    </div>
  )
}

export default Popup