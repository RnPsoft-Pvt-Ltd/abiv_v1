import React from 'react';
import group1 from "../assets/Home/OBJECTS.png";
import circle1 from "../assets/Home/absolutecircle.png";
import circle2 from "../assets/Home/absolutecircle2.png";
import scale from "../assets/Home/absoluteScale.png";
import set from "../assets/Home/absoluteset.png";
import testtube from "../assets/Home/absoluteTesttube.png";
import bulb from "../assets/Home/right/Group (7).png";
import react from "../assets/Home/right/Group (8).png";
import circle3 from "../assets/Home/right/Group (9).png";
import circle4 from "../assets/Home/right/Group (10).png";
import circle5 from "../assets/Home/right/Group (11).png";
import circle6 from "../assets/Home/right/Ellipse 1.png";
import video1 from '../assets/Video/gif.gif';

const HeroSection2 = () => {
  return (
    <div className='h-full w-screen flex lg:flex-row flex-col background'>
      <div className='w-[90%] lg:w-[40%] relative h-full flex flex-col ml-5 lg:ml-10 mt-[1rem] lg:mt-[12rem] gap-6 pl-6 font-[jost]'>
        <img src={circle1} className='hidden lg:block absolute top-[-150px] left-[10px]' alt="" />
        <img src={circle2} className='hidden lg:block absolute top-[-107px] left-[56px]' alt="" />
        <img src={scale} className='hidden lg:block absolute top-[-144px] right-[93px]' alt="" />
        <img src={set} className='hidden lg:block absolute xl:bottom-[344px] lg:bottom-[280px] xl:right-90 lg:right-[40px]' alt="" />
        <img src={testtube} className='hidden lg:block absolute bottom-[244px] left-[30px]' alt="" />

        <div className='text-white font-jost font-bold'>
          <p className='text-3xl leading-[46px] tracking-[0.06em]'>WELCOME TO</p>
          <p className='text-8xl leading-[140px] tracking-[-0.045em]'>ABIV</p>
        </div>

        <div className='text-white text-justify font-[poppins] font-semibold text-lg leading-[30px] tracking-normal lg:tracking-widest w-[90%] capitalize'>
          <p>
            Transform your textbooks into engaging animated videos with our AI-driven platform. Enjoy real-time video summaries, multi-language support, and interactive learning anytime, anywhere.
          </p>
          <a href="#GetStarted">
            <button className='font-jost font-medium leading-6 text-base tracking-[0.02em] mt-10 w-[260px] h-[53px] rounded-lg bg-[#002aff] hover:shadow-md hover:shadow-white'>
              Get Started
            </button>
          </a>
        </div>
      </div>
      {/* mobile view */}
      <div className=' w-full mt-20 pt-5 lg:hidden flex justify-center  relative items-center'>

      <div className='bg-rad-grad w-full flex lg:hidden h-[60vh] md:h-[80vh] justify-center relative items-center'>
        <div className='bg-rad-grad-new w-full h-full flex justify-center items-center'>
          <div className='relative w-[80%] flex justify-center items-center'>
            <img src={bulb} className='absolute -top-16 left-50 w-[10%]' alt="" />
            <img src={react} className='w-[10%] absolute -top-8 right-10' alt="" />
            <img src={circle3} className='w-[10%] absolute -bottom-8 right-16' alt="" />
            <img src={circle4} className='w-[10%] absolute bottom-52 right-80' alt="" />
            <div className='w-[400px]  flex justify-center items-center relative'>
            <img src={group1} alt="" className='min-w-[344px] sm:w-[480px]  z-20' />
            <img
              src={video1} 
              autoPlay 
              loop 
              className='absolute z-30  sm:w-[280px] w-[230px] top-[27px] left-[65px] sm:top-[30px] sm:left-[70px] ' 
            />
          </div>
          </div>
      </div>
        </div>
      </div>
      {/* mobile view end */}

      <div className=' w-[80%] lg:w-[60%]  mt-20 pt-5 hidden lg:flex justify-center  relative items-center'>
      <div className='bg-rad-grad w-[100%] h-[100%] hidden  lg:flex justify-center relative items-center'>
        <img src={bulb} className='hidden lg:block absolute top-16 left-50' alt="" />
        <img src={react} className='hidden lg:block absolute top-8 right-20' alt="" />
        <img src={circle3} className='hidden lg:block absolute lg:bottom-4 xl:-bottom-8 right-16' alt="" />
        <img src={circle4} className='hidden lg:block absolute lg:bottom-32 xl:bottom-16 right-80' alt="" />
        <img src={circle5} className='hidden lg:block absolute top-60 left-36 z-0' alt="" />
        <img src={circle6} className='hidden lg:block absolute top-32  right-28 z-0' alt="" />
        
        <div className='bg-rad-grad-new relative w-full h-full flex justify-center items-center'>
          <div className='w-[600px]  flex justify-center items-center relative'>
            <img src={group1} alt="" className='xl:w-[580px] lg:w-[480px] z-20' />
            <img 
              src={video1} 
              autoPlay 
              loop 
              className='absolute z-30 lg:w-[326px]  xl:w-[400px] xl:top-[36px] lg:top-[32px] xl:left-[114px] lg:left-[148px]' 
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroSection2;
