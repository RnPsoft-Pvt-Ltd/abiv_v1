import React from 'react';
import "./CSS/Page4.css";
import img1 from '../assets/isometric view of man working online.png';
import img2 from '../assets/teacher with pointer and paper.png';
import img3 from '../assets/Teacher in empty classroom throwing her hands up.png';
import img4 from '../assets/young people brainstorming.png';
import { RiCheckboxCircleLine } from "react-icons/ri";

const Page4 = () => {
    const card = {
        text1: "Whats Include",
        text2: "No Ads",
        text3: "Notes",
        text4: "MCQ Test (Moderate)"
    };

    return (
        <section className="bg-gradient-to-b from-[#000D3F] to-black pt-10 pb-10 w-full h-full">
            <div className="w-full h-full bg-gradient-to-b from-[#000D3F] to-black">
                <div className="text-center">
                    <h1 className="text-lg lg:text-5xl font-bold">INTRODUCING 4 DIFFERENT MODES</h1>
                    <p className="my-2 text-lg">
                        Affordable and scalable options for everyone. Affordable and scalable <br />
                        options for everyone. Affordable and scalable options for everyone.
                    </p>
                    <div className="mx-auto w-11/12 lg:w-4/6 h-[70%] bg-opacity-20 bg-[#FFFFFF]  rounded-2xl mt-8">
                        <div className="grid grid-cols-2 gap-4 p-3">
                            {/* First card */}
                            <a href="/" className="block w-full sm:w-[200px] md:w-[250px] lg:w-[310px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] p-2 md:p-6 bg-black rounded-2xl shadow mx-auto lg:text-lg text-[10px]">
                                <span className="bg-[#FBF7B8] text-[#573CFF] text-xs font-medium px-2.5 py-0.5 rounded-full">Default</span>
                                <img src={img1} alt="img" className="float-right w-[46%] h-[20%] sm:h-[30%] lg:h-[30%]" />
                                <h4 className="mt-4 sm:mt-6 md:mt-8 lg:mt-9">{card.text1}</h4>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text2}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text3}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                            </a>

                            {/* Second card */}
                            <a href="/" className="block w-full sm:w-[200px] md:w-[250px] lg:w-[310px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] p-2 md:p-6 bg-black rounded-2xl shadow mx-auto lg:text-lg text-[10px]">
                                <span className="bg-[#FBF7B8] text-[#573CFF] text-xs font-medium px-2.5 py-0.5 rounded-full">Default</span>
                                <img src={img2} alt="img" className="float-right h-[25%] sm:h-[30%] lg:h-[35%]" />
                                <h4 className="mt-4 sm:mt-6 md:mt-8 lg:mt-9">{card.text1}</h4>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text2}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text3}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                            </a>

                            {/* Third card */}
                            <a href="/" className="block w-full sm:w-[200px] md:w-[250px] lg:w-[310px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] p-2 md:p-6 bg-black rounded-2xl shadow mx-auto lg:text-lg text-[10px]">
                                <span className="bg-[#FBF7B8] text-[#573CFF] text-xs font-medium px-2.5 py-0.5 rounded-full">Default</span>
                                <img src={img3} alt="img" className="float-right h-[25%] sm:h-[30%] lg:h-[35%]" />
                                <h4 className="mt-4 sm:mt-6 md:mt-8 lg:mt-9">{card.text1}</h4>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text2}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text3}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                            </a>

                            {/* Fourth card */}
                            <a href="/" className="block w-full sm:w-[200px] md:w-[250px] lg:w-[310px] h-[240px] sm:h-[320px] md:h-[380px] lg:h-[400px] p-2 md:p-6 bg-black rounded-2xl shadow mx-auto lg:text-lg text-[10px]">
                                <span className="bg-[#FBF7B8] text-[#573CFF] text-xs font-medium px-2.5 py-0.5 rounded-full">Default</span>
                                <img src={img4} alt="img" className="float-right h-[25%] sm:h-[30%] lg:h-[35%]" />
                                <h4 className="mt-4 sm:mt-6 md:mt-8 lg:mt-9">{card.text1}</h4>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text2}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text3}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                                <h5 className="mt-2 sm:mt-3 md:mt-4 lg:mt-5 flex gap-2">
                                    <RiCheckboxCircleLine className="text-sm sm:text-base md:text-lg" />
                                    {card.text4}
                                </h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page4;
