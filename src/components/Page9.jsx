import React from "react";
import job from './job.png'
import attend from './attend.png'
import { useNavigate } from "react-router-dom";

const Component = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-[100%] h-[1024px] bg-white [background:linear-gradient(180deg,rgb(1,11,120)_0%,rgb(0,0,0)_100%)]">
      <div className="absolute w-[1121px] h-[599px] top-[252px] left-[364px]">
        <div className="absolute w-[389px] h-[377px] top-[222px] left-7 bg-[#010c16] rounded-[10.83px] border-[1.35px] border-dashed border-[#d9d9d9]" onClick={()=>navigate('/uploads')}style={{cursor:"pointer"}}>
          <div className="absolute h-[30px] top-[315px] left-[53px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
            Join Interview
          </div>
          <img
            className="absolute w-[220px] h-[220px] top-[79px] left-[84px]"
            alt="Online interview"
            // src="/img/interview.svg"
            src={job}
          />
        </div>
        <div className="absolute w-[389px] h-[377px] top-[222px] left-[679px] bg-[#010b78] rounded-[10.83px] border border-dashed border-white shadow-[0px_4px_4px_#00000040]"  onClick={()=>navigate('/selectscreen')}style={{cursor:"pointer"}}>
          <div className="absolute h-[30px] top-[315px] left-16 [font-family:'Poppins',Helvetica] font-semibold text-white text-[40px] text-center tracking-[0] leading-[30px] whitespace-nowrap">
            Attend Exam
          </div>
          <img
            className="absolute w-[140px] h-[140px] top-[119px] left-[124px]"
            alt="School learn study"
            src={attend}
          />
        </div>
        <div className="absolute h-[66px] top-0 left-[49px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-5xl text-center tracking-[0] leading-[66px] whitespace-nowrap">
          Live Interview
        </div>
        <div className="absolute h-[66px] top-0 left-[634px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-5xl text-center tracking-[0] leading-[66px] whitespace-nowrap">
          Answersheet Exam
        </div>
        <p className="absolute h-[90px] top-[98px] left-0 [font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[30px]">
          Participate in our live AI-based interview to <br />
          assess and enhance your knowledge <br />
          and preparation.
        </p>
        <p className="absolute h-[90px] top-[98px] left-[654px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-[30px]">
          Take our Answersheet Exam to <br />
          evaluate your subjective knowledge <br />
          and receive a detailed performance report.
        </p>
      </div>
      <div className="absolute w-[1163px] h-[87px] top-[99px] left-[359px] [font-family:'Poppins',Helvetica] font-extrabold text-white text-[100px] text-center tracking-[-1.39px] leading-[87.0px] whitespace-nowrap">
        Test yourself!
      </div>
    </div>
  );
};
export default Component