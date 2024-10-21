import React from "react";
import { useNavigate } from 'react-router-dom';

export default function MyModal({visible,onclose}) {
    const navigate = useNavigate();
    const handleYesClick = () => {
        navigate('/next'); // Navigate to the next component
      };
    const handleOnclose = (e) => {
        if(e.target.id ==="container" || "No")onclose();
    };
    if(!visible) return null;
  return (
    <div 
    id='container'
    onClick={handleOnclose}
    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-7 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          End Interview
        </h1>
       <div className="flex flex-row justify-center space-x-4">
        <button className="px-8 py-3 bg-gray-800 text-white rounded" id="No" onClick={handleOnclose}>No</button> 
        <button className="px-8 py-3 bg-red-700 text-white rounded space-x-10" onClick={handleYesClick}>Yes</button>
        </div>
      </div>
    </div>
  );
}