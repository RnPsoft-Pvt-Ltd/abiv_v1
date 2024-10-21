import React, { useEffect } from 'react';
import tick from "../../assets/Tick Tick.png";
import eclipse4 from "../../assets/Ellipse 2 (1).png";
import eclipse3 from "../../assets/Ellipse 3 (1).png";
import eclipse5 from "../../assets/Ellipse 4 (1).png";
import { useNavigate } from 'react-router-dom';

const OtpConfirm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/home');
        }, 4000);

        return () => clearTimeout(timer);  // Clean up the timer if the component unmounts
    }, [navigate]);
    return (
        <section className=" relative p-5 flex h-screen flex-col md:flex-row gap-20 md:gap-0 justify-evenly items-center">
            {/* Background eclipse images */}
            <img src={eclipse4} alt="" className="z-10 absolute right-0 top-0 w-[10rem] md:w-[15rem]" />
            <img src={eclipse3} alt="" className="z-10 hidden lg:block absolute left-0 top-[5rem] w-[15rem] md:w-[20rem]" />
            <img src={eclipse5} alt="" className="z-10 absolute bottom-0 left-[5rem] md:left-[28rem] w-[12rem] md:w-[17rem]" />
            
            <div className='bg-white z-20 text-black bg-opacity-50 w-[90%] md:w-[70%] lg:w-[50%] h-[50%] md:h-[60%] rounded-3xl flex flex-col justify-center items-center p-5'>
                <h1 className='text-2xl md:text-4xl font-semibold text-center'>OTP Confirmed</h1>
                <img src={tick} alt="" className='w-[40%] md:w-[30%] my-4' />
                <h3 className='font-semibold text-lg md:text-xl text-center'>Let's Get Started</h3>
            </div>
        </section>
    );
}

export default OtpConfirm;
