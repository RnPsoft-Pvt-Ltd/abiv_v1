import React, { useState } from 'react';
import logo from "../assets/Vector.svg";
import search from "../assets/search.png";
import { CirclePlay, Menu, X } from 'lucide-react';
import bell from "../assets/bell.svg";
import profile from "../assets/NoProfile.jpg";
import successIcon from "../assets/success.png";
import alertIcon from "../assets/alert.png";
import errorIcon from "../assets/error.png";
import coin from "../assets/Coins.png";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const navigate = useNavigate();
    const [notifications] = useState([
        {
            type: 'new',
            title: 'New Message',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente non ad odit, nisi aliquid aliquam quae nostrum? Deleniti odio facilis aliquam, soluta sunt, dignissimos quis fugiat, nostrum ducimus perspiciatis earum.',
            time: 'Today 11:00PM',
        },
        {
            type: 'success',
            title: 'Successfully Message',
            content: '',
            time: 'Today 10:30PM',
            icon: successIcon
        },
        {
            type: 'alert',
            title: 'Alert Message',
            content: '',
            time: 'Today 10:30PM',
            icon: alertIcon
        },
        {
            type: 'error',
            title: 'Error Message',
            content: '',
            time: 'Today 10:30PM',
            icon: errorIcon
        },
    ]);

    const handelToggle = () => {
        setToggle(!toggle);
    };

    const toggleFalse = () => {
        setToggle(false);
    };

    const toggleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowProfile(false);
        setToggle(false);
    };

    const closeNotifications = () => {
        setShowNotifications(false);
    };

    const toggleProfile = () => {
        setShowProfile(!showProfile);
        setShowNotifications(false);
        setToggle(false);
    };

    const logOut = async () => {
        localStorage.removeItem("auth-token");
        try {
            const response = await fetch('http://localhost:4000/logout', {
                method: 'GET',
                credentials: 'include' // Include cookies if using sessions
            });

            if (response.ok) {
                // Redirect to the homepage
                navigate('/');

            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('An error occurred during logout', error);
        }
        navigate('/');
    };

    const handleAddPdfClick = () => {
        const event = new CustomEvent('scrollToPage3');
        window.dispatchEvent(event);
        navigate('/home', { state: { scrollToPage3: true } });

    };
    const handleFeaturesClick = () => {
        const event = new CustomEvent('scrollToPage2');
        window.dispatchEvent(event);
        navigate('/home', { state: { scrollToPage2: true } });
    };

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700 navbar-background'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex  justify-between items-center">
                    <div className="flex items-center flex-shrink-0 ">
                        <img className='w-[6rem] h-[5rem] lg:w-[8rem] lg:h-[5rem]' src={logo} alt="Logo" />
                    </div>

                    <div className="hidden lg:flex justify-center items-center gap-4">
                        <ul className='hidden lg:flex ml-14 lg:space-x-7 xl:space-x-12 text-white text-lg font-medium tracking-wide'>
                            <li className="py-4"><button onClick={handleAddPdfClick}>Add Pdf</button></li>
                            <li className="py-4"><Link to="/pricing">Pricing</Link></li>
                            <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                            <li className="hidden lg:flex items-center gap-2 px-3">
                                <div className=' border-1 border border-white rounded-full'><img src={coin} alt="Number 100" className='w-5 h-5 rounded-full' /></div><span className='text-[#EBB12B]'>100</span>
                            </li>
                        </ul>
                        <div className='rounded-full cursor-pointer' onClick={toggleProfile}>
                            <img src={profile} alt="Profile" className='h-10 w-10 p-1 rounded-full' />
                        </div>
                    </div>
                    <div className='lg:hidden flex space-x-2'>
                        <div className=" flex lg:hidden ml-24 items-center gap-2  px-5">
                        <div className=' border-1 border border-white rounded-full'><img src={coin} alt="Number 100" className='w-5 h-5 rounded-full' /></div><span className='text-'>100</span>
                        </div>
                        {toggle ? <X color='white' onClick={handelToggle} className='lg:hidden' /> : <Menu color='#ffff' className='lg:hidden' onClick={handelToggle} />}
                    </div>

                </div>
                {toggle &&
                    <div className="flex flex-col justify-center items-center py-12 bg-black list-none z-20 right-0 fixed w-full text-center top-to-bottom">
                        <ul className='w-full text-white text-md font-medium tracking-wide'>
                            <li className="py-4 hover:bg-[#9C6CDD] hover:text-black" onClick={toggleFalse}><button onClick={handleAddPdfClick}>Add Pdf</button></li>
                            <li className="py-4 hover:bg-[#9C6CDD] hover:text-black" onClick={toggleFalse}><Link to="/pricing">Pricing</Link></li>
                            <li className="py-4 hover:bg-[#9C6CDD] hover:text-black" onClick={toggleFalse}><Link to="/contact">Contact Us</Link></li>
                        </ul>
                        <div className="m-4 w-full flex flex-col lg:hidden justify-center items-center">
                            <div className='py-4 flex items-center w-full justify-center cursor-pointer hover:bg-[#9C6CDD] hover:text-black' onClick={toggleProfile}><p>Profile</p></div>
                        </div>
                    </div>
                }
                {showProfile &&
                    <div className="absolute right-0 mt-2 w-48 bg-[#000622] shadow-lg rounded-lg z-20">
                        <ul>
                            <li className="p-4 hover:bg-gray-100 hover:text-black cursor-pointer flex items-start">
                                <Link to="/setting" className="w-full">Settings</Link>
                            </li>
                            <li onClick={logOut} className="p-4 hover:bg-gray-100 hover:text-black cursor-pointer flex items-start">
                                Logout
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;
