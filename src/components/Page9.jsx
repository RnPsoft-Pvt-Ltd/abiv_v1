import React from "react";
import job from './job.png'
import attend from './attend.png'
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-white" style={{ background: "linear-gradient(180deg, rgb(1,11,120) 0%, rgb(0,0,0) 100%)" }}>
            
      <div className="relative inset-0 flex flex-col items-center justify-center">
      <div className="mt-40 relative text-white text-6xl font-extrabold text-center">
        Test yourself!
      </div>
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
          
<div>
<div className=" text-white text-4xl font-extrabold text-center">Live Interview</div>
<p className="mt-4 text-white text-lg text-center">
          Participate in our live AI-based interview to <br />
          assess and enhance your knowledge <br />
          and preparation.
        </p>
          <div className="mt-10 w-80 h-80 bg-[#010c16] rounded-lg border border-dashed border-[#d9d9d9] flex flex-col items-center justify-center cursor-pointer" onClick={() => navigate('/uploads')}>
            <img className="w-60 h-60" alt="Online interview" src={job} />
            <div className="mt-4 text-white text-2xl font-semibold text-center">Join Interview</div>
          </div>
          </div>
          <div>
          <div className=" text-white text-4xl font-extrabold text-center">Answersheet Exam</div>
          <p className="mt-4 text-white text-lg text-center">
          Take our Answersheet Exam to <br />
          evaluate your subjective knowledge <br />
          and receive a detailed performance report.
        </p>
          <div className="mt-10 w-80 h-80 bg-[#010b78] rounded-lg border border-dashed border-white shadow-md flex flex-col items-center justify-center cursor-pointer" onClick={() => navigate('/selectscreen')}>
            <img className="w-36 h-36" alt="School learn study" src={attend} />
            <div className="mt-4 text-white text-2xl font-semibold text-center">Attend Exam</div>
          </div>
          </div>
        </div>
        
      </div>

    </div>
  );
};
export default Component