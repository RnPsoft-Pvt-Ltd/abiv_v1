import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import faqimg from '../assets/Frame 1321314808.png';

const Page8 = () => {
    return (
        <>
            <section className="FAQ py-12 bg-[#010B78]">
                <div className="flex flex-col lg:flex-row justify-between items-center px-4">
                    <div className="FAQheading text-center mx-auto">
                        <h1 className="text-3xl md:text-5xl text-white">FAQ</h1>
                        <h2 className="text-2xl md:text-4xl lg:text-6xl text-white my-4 lg:my-7">Ask Me Anything</h2>
                        <p className="text-base md:text-lg lg:text-xl text-white my-4 lg:my-7">Have any questions? We are here to assist you.</p>
                        <form className="relative max-w-xs md:max-w-md lg:max-w-xl mx-auto my-10">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm border border-white rounded-lg bg-white dark:placeholder-black dark:text-black" placeholder="Search here" required />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="question py-10 bg-gradient-to-b from-[#000D3F] to-black">
                <div className="questionheading">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold text-white">Popular Questions</h1>
                </div>
                <div className="questioncard grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-4">
                    {/* Card 1 */}
                    <div className="card1 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">What is Deupload?</h5>
                        </div>
                        <p className="font-normal text-gray-300">Zoho WorkDrive is a secure online file storage and collaboration platform for modern teams, small businesses, and large enterprises.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="card2 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">What payment methods are accepted?</h5>
                        </div>
                        <p className="font-normal text-gray-300">We accept payments via Visa, MasterCard, Discover, American Express, and PayPal. You can also make payments through bank transfer or check transfer.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="card3 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">Can I buy additional storage?</h5>
                        </div>
                        <p className="font-normal text-gray-300">You can select the number of units you need for the required storage add-on. For example, if you need 50 GB, you can choose the 10 GB add-on.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="card4 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">What is a Deupload for teams user?</h5>
                        </div>
                        <p className="font-normal text-gray-300">A user is any person on your team with their own unique email address. Each team member should have their own user license.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="card5 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">How much space does my team get?</h5>
                        </div>
                        <p className="font-normal text-gray-300">Dropbox provides three plans to fit your team’s needs. The Standard plan gives your team 5,000 GB of shared storage. For teams needing more space.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="card6 block p-6 bg-transparent rounded-lg shadow">
                        <div className="flex items-center mb-2">
                            <FaQuestionCircle className='text-blue-500 text-2xl md:text-3xl mr-2' />
                            <h5 className="text-base md:text-lg font-bold tracking-tight text-white">Do you have any discounts for nonprofits?</h5>
                        </div>
                        <p className="font-normal text-gray-300">Yes! Please contact our sales team for more information. To provide the discount, a sales rep will need a copy of your 501(c)3.</p>
                    </div>
                </div>
                <div className="askquestion mx-auto bg-[#EFEDE0] rounded-lg p-6 text-center max-w-xs md:max-w-md lg:max-w-lg">
                    <h6 className="text-blue-700 font-bold mb-2">Still have questions?</h6>
                    <p className="text-black">Can’t find the answer you're looking for? Please chat with our friendly team.</p>
                    <button type="button" className="bg-blue-700 text-white mt-4 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Get in Touch</button>
                </div>
            </section>
        </>
    );
}

export default Page8;
