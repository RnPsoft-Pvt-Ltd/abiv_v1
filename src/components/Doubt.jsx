import React, { useState } from 'react'
import search from "../assets/Icon Art.png"
import { ChevronDown, X } from 'lucide-react'
import illustration from "../assets/illustration.png"
import { ChevronUp } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const Doubt = () => {
  const [selectedDescription, setSelectedDescription] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isXVisible, setIsXVisible] = useState(false);

  console.log(selectedDescription)

  const buttons=[
    {
      item:"Visit FAQ center",
      color:"button-1"
    },
    {
      item:"Visit our blog",
      color:"button-2"
    },
    {
      item:"Ask for more help",
      color:"button-3"
    },
  ]

  const [descriptions,setDescription]=useState([
    {
        item:"Pellentesque ac bibendum tortor?",
        des:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
        clicked:true
    },
    {
        item:"Pellentesque ac bibendum tortor?",
        des:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
        clicked:false
    },
    {
        item:"Pellentesque ac bibendum tortor?",
        des:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
        clicked:false
    },
    {
        item:"Pellentesque ac bibendum tortor?",
        des:"Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.",
        clicked:false
    },
  ])

  const handleDesClick = (index) => {
    setDescription(prevDescription => {
        const newDescription = [...prevDescription];
        newDescription[index].clicked = !newDescription[index].clicked;
        if (newDescription[index].clicked) {
            setSelectedDescription(newDescription[index].option);
        } else {
            setSelectedDescription('');
        }
        return newDescription;
    });
  };

  const handleInputFocus = () => {
    setIsXVisible(true);
  };

  const handleInputBlur = () => {
    if (!inputValue) {
      setIsXVisible(false);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setIsXVisible(true);
    } else {
      setIsXVisible(false);
    }
  };

  const clearInput = () => {
    setInputValue('');
    setIsXVisible(false);
  };

  return (
    <div className='video-page-background w-screen flex flex-col justify-center items-center text-white font-[Montserrat] '>
      <span className='flex md:text-5xl text-[22px]  mt-5 font-semibold font-[jost]'>TITLE NAME: <span> ASK YOUR&nbsp;</span> <span className='text-[#651FFF]'>DOUBTS</span></span>
      <p className='w-[80%] md:w-[50%] text-[11px] sm:text-sm  lg:text-xl  text-center mt-5'>YOU CAN EASILY DOWNLOAD THE NOTES FROM BELOW AND ALSO ASK DOUBTS IF YOU HAVE ANY.</p>
      <div className='mt-[3rem] bg-[#575B79] flex w-[70%]  p-[10px] rounded-lg justify-evenly items-center '>
        <img src={search} alt="" className='w-[1.5rem]' /> 
        <input 
          type="text" 
          placeholder='Search your doubts' 
          className=' outline-none border-none bg-[#575B79] w-[80%]'
          value={inputValue}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
        {isXVisible && <X color='purple ' className='w-[2rem] cursor-pointer' onClick={clearInput} />}
      </div>
      <div className='flex w-[90%] md:w-[75%] justify-evenly gap-4 md:gap-32 mt-9  '>
        <div className='w-[50%] flex flex-col justify-center md:justify-evenly items-center gap-7'>
          <img src={illustration} alt="" />
          {
            buttons.map((item,index)=>(
              <div key={index} className={`flex  justify-between items-center ${item.color} text-[13px] md:text-[15px] font-extrabold text-black rounded-xl p-3 w-[100%] md:w-[70%]`}>
                <p>{item.item}</p>
                <ArrowRight />
              </div>
            ))
          }
        </div>
        <div className='flex flex-col w-[50%] justify-evenly items-center gap-7 mb-7'>
          <h1 className='flex lg:text-4xl sm:text-2xl text:xl  mt-5 font-bold'>FREQUENTLY ASKED QUESTIONS</h1>
          {descriptions.map((items,index)=>(
            <div key={index} className={`${items.clicked ? 'bg-[#651FFF] border border-[#651FFF]' : 'bg-[#42424280] border border-[#42424280]' } flex flex-col w-[100%] h-[50%] justify-evenly  p-[20px] rounded-md`} onClick={()=>handleDesClick(index)}>
              <div className='flex justify-between'>
                <p className='text-[11px] md:text-[15px] mb-2 md:mb-0 font-semibold'>{items.item}</p>
                {items.clicked?<ChevronUp className=' w-6 h-7'/>:<ChevronDown className='w-6 h-7' />}
              </div>
              <p className={`text-[11px] md:text-[15px] font-normal ${!items.clicked && "hidden"} `}>{items.des} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doubt
