import React, { useState, useEffect, useRef } from 'react';
import logo from "../assets/Vector.svg";
import search from "../assets/search.png";
import { CirclePlay, Menu, X } from 'lucide-react';
import bell from "../assets/bell.svg";
import profile from "../assets/NoProfile.jpg";
import successIcon from "../assets/success.png";
import alertIcon from "../assets/alert.png";
import errorIcon from "../assets/error.png";
import coin from "../assets/image 97.png";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showRecentlyViewed, setShowRecentlyViewed] = useState(false);
    const navigate = useNavigate();
    const profileRef = useRef(null);
    const recentlyViewedRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside of dropdowns
        const handleClickOutside = (event) => {
            if (profileRef.current && !profileRef.current.contains(event.target)) {
                setShowProfile(false);
            }
            if (recentlyViewedRef.current && !recentlyViewedRef.current.contains(event.target)) {
                setShowRecentlyViewed(false);
            }
        };

        // Attach event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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

    const handleNavigate = (path) => {
        navigate(path);
        setShowProfile(false); // Close profile dropdown after navigation
    };

    const toggleRecentlyViewed = () => {
        setShowRecentlyViewed(!showRecentlyViewed);
        setShowProfile(false);
    };

    return (
        <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700 navbar-background'>
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className='w-[6rem] h-[5rem] lg:w-[8rem] lg:h-[5rem]' src={logo} alt="Logo" />
                    </div>

                    <div className="hidden lg:flex justify-center items-center gap-4">
                        <ul className='hidden lg:flex ml-14 lg:space-x-7 xl:space-x-12 text-white text-lg font-medium tracking-wide'>
                            <li className="py-4"><button onClick={handleAddPdfClick}>Add Pdf</button></li>
                            <li className="py-4"><Link to="/pricing">Pricing</Link></li>
                            <li className="py-4"><Link to="/contact">Contact Us</Link></li>
                            <li className="hidden lg:flex items-center gap-2 px-3">
                                <div className='border-1 border border-white rounded-full'><img src={coin} alt="Number 100" className='w-7 h-7 rounded-full' /></div><span className='text-[#EBB12B]'>100</span>
                            </li>
                        </ul>
                        <div className='rounded-full cursor-pointer' onClick={toggleProfile}>
                            <img src={profile} alt="Profile" className='h-10 w-10 p-1 rounded-full' />
                        </div>
                    </div>
                    <div className='lg:hidden flex space-x-2'>
                        <div className="flex lg:hidden ml-24 items-center gap-2 px-5">
                            <div className='border-1 border border-white rounded-full'><img src={coin} alt="Number 100" className='w-5 h-5 rounded-full' /></div><span className='text-'>100</span>
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
                    <div ref={profileRef} className="absolute right-0 mt-2 w-48 rounded-3xl bg-[#1a1a1a] shadow-lg  z-20 text-center">
                    <div className="flex items-center justify-center py-4 border-b border-gray-700">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
            </svg>
        </div>
                        <ul>
                            <li className="py-3 px-4 border-b border-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer" onClick={toggleRecentlyViewed}>
                                Recently viewed content
                            </li>
                            <li className="py-3 px-4 border-b border-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer" onClick={() => handleNavigate('/stats')}>
                                Usage stats
                            </li>
                            <li className="py-3 px-4 border-b border-gray-700 hover:bg-gray-700 hover:text-white cursor-pointer" onClick={() => handleNavigate('/setting')}>
                                User settings
                            </li>
                            <li onClick={logOut} className="py-3 px-4 hover:bg-gray-700 hover:text-white cursor-pointer">
                                Logout
                            </li>
                        </ul>
                    </div>
                }
                {showRecentlyViewed &&
                    <div ref={recentlyViewedRef} className="absolute right-0 mt-2 w-48 bg-[#1a1a1a] shadow-lg rounded-3xl z-20 text-center">
                        <ul>
                            <li className="py-3 px-4 text-white">Recently viewed content</li>
                            <li className="py-3 px-4 text-white">Recently viewed content</li>
                            <li className="py-3 px-4 text-white">Recently viewed content</li>
                            <li className="py-3 px-4 text-white">Recently viewed content</li>
                            <li className="py-3 px-4 text-white">Recently viewed content</li>
                        </ul>
                    </div>
                }
            </div>
        </nav>
    );
};

export default Header;
