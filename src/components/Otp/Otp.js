import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardFooter, Divider } from "@nextui-org/react";
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";
import { toast, Toaster } from 'react-hot-toast';
import { MuiOtpInput } from 'mui-one-time-password-input';
import './Otp.css';
import { useNavigate } from 'react-router-dom';

const Otp = () => {
    const [otp, setOtp] = useState('');
    const [timer, setTimer] = useState(60);
    const [isResendEnabled, setIsResendEnabled] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        } else {
            setIsResendEnabled(true);
        }
    }, [timer]);

    const handleResendOtp = () => {
        // Logic to resend the OTP
        setTimer(60); // Reset the timer to 60 seconds
        setIsResendEnabled(false); // Disable the resend button until the timer expires again
    };

    const handleVerifyOtp = () => {
        if (otp) {
            navigate("/otpconfirm")
        } else {
            toast.error("Re-enter the Otp");
        }
    };

    return (
        <>
            <section className="Loginsignup2 relative p-5 flex h-screen flex-col md:flex-row gap-20 md:gap-0 justify-evenly items-center">
                {/* Background eclipse images */}
                <img src={eclipse4} alt="" className="z-10 absolute left-0 top-[10rem] w-[10rem]" />
                <img src={eclipse2} alt="" className="z-10 absolute right-0 bottom-[0px] w-[38rem]" />
                <img src={eclipse3} alt="" className="z-10 hidden lg:block absolute left-[10rem] top-[-5rem] w-[40rem]" />
                <img src={eclipse5} alt="" className="z-10 absolute right-0 top-0 w-[8rem]" />

                <section className="Otp z-20">
                    <Toaster />
                    <Card className="otpcard max-w-[400px] w-[500px] h-[280px] rounded-3xl">
                        <CardHeader className="flex gap-3">
                            <div className="flex">
                                <MuiOtpInput
                                    display="flex"
                                    gap={1}
                                    length={6}
                                    className="loginverifyotp -mt-5 mx-8 w-[300px] h-[150px]"
                                    value={otp}
                                    onChange={setOtp}
                                />
                            </div>
                        </CardHeader>

                        <div className="w-[347px] -mt-10" style={{ color: "#210126" }}>
                            <label htmlFor="otp" className="mx-11">
                                <b>{timer}s</b> 
                                <button
                                    className={`float-right underline ${isResendEnabled ? "" : "disabled"}`}
                                    type="button"
                                    onClick={handleResendOtp}
                                    disabled={!isResendEnabled}
                                >
                                    <b>Resend OTP</b>
                                </button>
                            </label>
                        </div>
                        
                        <Divider />

                        <CardFooter>
                            <button
                                type="button"
                                disabled={otp.length < 6}
                                onClick={handleVerifyOtp}
                                id="verifybutton"
                                className="text-white my-2 w-[180px] focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-4 py-2.5 me-2 mb-2"
                                style={{ background: "#210126", marginLeft: "25%" }}
                            >
                                Confirm OTP
                            </button>
                        </CardFooter>

                        <a href="/signup" className="text-center underline" style={{ color: "#210126" }}>
                            <b>Modify Credentials</b>
                        </a>
                    </Card>
                </section>
            </section>
        </>
    );
};

export default Otp;
