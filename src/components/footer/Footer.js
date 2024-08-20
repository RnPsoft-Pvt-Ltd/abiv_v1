import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-[#000622] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full sm:w-1/4 px-4 mb-8 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul>
                            <li className="mb-2"><a href="/" className="hover:underline">Teams</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Advertising</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Talent</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/4 px-4 mb-8 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Network</h4>
                        <ul>
                            <li className="mb-2"><a href="/" className="hover:underline">Technology</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Science</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Business</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Professional</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">API</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/4 px-4 mb-8 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul>
                            <li className="mb-2"><a href="/" className="hover:underline">About</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Legal</a></li>
                            <li className="mb-2"><a href="/" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/4 px-4 mb-8 sm:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                         <div className="flex space-x-4 mb-4">
                            <a href="https://www.linkedin.com/company/rnpsoft" rel="noreferrer" target="_blank" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.youtube.com/@RnPsoft" rel="noreferrer" target="_blank" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://twitter.com/RnPsoft" rel="noreferrer" target="_blank" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com/rnpsoft/" rel="noreferrer" target="_blank" className="hover:text-gray-400">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </footer>
    );
};

export default Footer;
