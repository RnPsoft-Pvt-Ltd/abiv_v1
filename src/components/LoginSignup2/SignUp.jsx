import { useState } from "react";
import { useNavigate } from "react-router-dom";
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [continueAs, setContinueAs] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add any validation or processing logic here

        // Navigate to the /otp page after form submission
        navigate("/otp");
    };

    return (
        

            <div className="z-20 text-black w-[552px] h-[656px] bg-[#d9d9d9] bg-opacity-55 relative rounded-3xl drop-shadow flex justify-center items-center">
                <form onSubmit={handleSubmit} className="w-[350px] h-[450px] flex flex-col justify-center items-center gap-y-2">
                    <p className="text-black text-poppins font-medium text-[38.4px]">Sign Up</p>

                    <label className="w-[350px]">
                        Your email
                        <input 
                            type="email" 
                            className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <div className="flex w-[350px] justify-between gap-x-5">
                        <label className="w-1/2">
                            First Name
                            <input 
                                type="text" 
                                className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            required

                            />
                        </label>
                        <label className="w-1/2">
                            Last Name
                            <input 
                                type="text" 
                                className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            required

                            />
                        </label>
                    </div>

                    <label className="w-[350px]">
                        Enter Phone Number
                        <input 
                            type="text" 
                            className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required

                        />
                    </label>

                    <label className="w-[350px]">
                        Your password
                        <input 
                            type="password" 
                            className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required

                        />
                    </label>

                    <label className="w-[350px]">
                        Confirm password
                        <input 
                            type="password" 
                            className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required

                        />
                    </label>

                    <label className="w-[350px]">
                        Continue as
                        <input 
                            type="text" 
                            className="w-full h-[46px] bg-transparent border-black rounded-[12px] border outline-none p-4"
                            value={continueAs}
                            onChange={(e) => setContinueAs(e.target.value)}
                            required

                        />
                    </label>

                    <button type="submit" className="w-[328px] h-[64px] py-3 rounded-[40px] bg-[#18141b] text-white mt-4">
                        Confirm Credentials
                    </button>
                </form>
            </div>
    );
};

export default SignUp;
