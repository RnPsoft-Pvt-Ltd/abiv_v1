import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const SelectTestType = () => {
  const nav = useNavigate();
  const [mcq,ismcq]=useState(false)
    return (
      <div className="flex items-center justify-center bg-gradient-to-b from-[#010B78] to-[#000000] h-[100vh]">
      <div className="bg-gray-200 bg-opacity-50 backdrop-blur-md p-8 rounded-lg shadow-lg relative w-[450px]">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <i className="fas fa-times"></i>
        </button>
        <h1 className="text-2xl font-bold text-center mb-8">Select Test Type:</h1>
        <div className="flex justify-around gap-4">
          <button className="bg-[#1C3CAB] max-w-[269px] text-white py-4 px-6 rounded-lg shadow-md hover:bg-[#0B194B] border border-white" onClick={()=>{
            ismcq(false)
            localStorage.setItem("pattern","false")
            nav('/attend')
          }}>
            Answer-sheet Exam
          </button>
          <button className="bg-[#1C3CAB] max-w-[269px]s text-white py-4 px-6 rounded-lg shadow-md hover:bg-[#0B194B] border border-white" onClick={()=>{
            ismcq(true)
            localStorage.setItem("pattern","true")
            nav('/attend')
          }}>
            MCQ Based Exam
          </button>
        </div>
      </div>
      </div>
    );
  };
  
  export default SelectTestType;
  