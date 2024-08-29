import img6 from "../assets/Rectangle 2372 (7).png"
import img5 from "../assets/Rectangle 2371 (1).png"
import img4 from "../assets/Rectangle 2370 (1).png"
import img3 from "../assets/Rectangle 2372.png"
import img2 from "../assets/Rectangle 2371 (2).png"
import img1 from "../assets/Rectangle 2370covidprotocols.png"
import credit from "../assets/image 97.png";
const Stats = () => {
  return (
    <main className='w-screen h-screen bg-gradient-to-b from-[#010b78] to-[black] overflow-x-hidden max-[540px]:pb-[800px]'>
        <div className="w-[1144px] max-[426px]:w-[360px] max-[345px]:w-[330px] max-[1026px]:w-[750px] h-full mx-auto flex flex-col">

            <div className="w-full flex justify-between text-white mb-4 p-4 font-inter items-center border-b border-b-white max-[426px]:border-none border-opacity-75 ">
                <p className="font-bold text-[22px]">User Stats</p>
                <button className="text-[13px] font-semibold leading-[16px] flex">

                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_3852_6800)">
                            <path d="M14.6564 7.68534H13.3102V3.45211C13.3102 2.98646 12.9292 2.60547 12.4636 2.60547H9.07698C8.61132 2.60547 8.23033 2.98646 8.23033 3.45211V7.68534H6.88416C6.13065 7.68534 5.74966 8.59972 6.28305 9.1331L10.1691 13.0192C10.4993 13.3494 11.0327 13.3494 11.3629 13.0192L15.249 9.1331C15.7824 8.59972 15.4099 7.68534 14.6564 7.68534ZM4.84375 16.1518C4.84375 16.6174 5.22474 16.9984 5.6904 16.9984H15.8501C16.3158 16.9984 16.6968 16.6174 16.6968 16.1518C16.6968 15.6861 16.3158 15.3051 15.8501 15.3051H5.6904C5.22474 15.3051 4.84375 15.6861 4.84375 16.1518Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_3852_6800">
                                <rect width="20.3195" height="20.3195" fill="white" transform="translate(0.609375 0.0664062)"/>
                            </clipPath>
                        </defs>
                    </svg>

                    Download

                </button>
            </div>

            <div className="w-[200px] h-[45px] mt-4 rounded-[18px] outline-none p-2 font-inter 
            font-medium text-[15px] leading-[18.5px] tracking-[-0.28px] bg-white flex items-center justify-between 
            hover:cursor-pointer max-[426px]:mx-auto text-black">
                <option value="all-time">All-time</option>
                <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.94231 10.5403L10.3048 12.9325C10.6606 13.2927 11.2352 13.2927 11.591 12.9325L13.9535 10.5403C14.5282 9.95844 14.1177 8.96094 13.3059 8.96094H8.58083C7.769 8.96094 7.36765 9.95844 7.94231 10.5403Z" fill="black"/>
                </svg>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 mt-4 pb-8 gap-10 max-[426px]:grid-cols-1 max-[1026px]:grid-cols-1 max-[1026px]:mx-auto">

                <div className="flex flex-col gap-y-3">

                    <div className="w-[540px] h-[154px] flex justify-between max-[426px]:w-[310px] max-[426px]:h-[90px] max-[426px]:items-center ">

                        <div className="w-[173px] h-full bg-white rounded-[20px] max-[426px]:w-[100px]">
                            <div className="w-[143px] h-[107px] flex flex-col mt-3 p-4 gap-y-2 max-[426px]:w-[86px] max-[426px]:h-[63px]">

                                <p className="text-[#000000] text-opacity-70 font-medium text-[14px] max-[426px]:text-[8px] font-inter tracking-[-0.4px]"> Active Duration </p>
                                <p className="text-black font-bold font-inter text-[24px] max-[426px]:text-[14px]">27Hrs</p>
                                 
                            </div>
                        </div>

                        <div className="w-[173px] h-full bg-white rounded-[20px] max-[426px]:w-[100px]">
                            <div className="w-[143px] h-[107px] flex flex-col mt-3 p-4 gap-y-2 max-[426px]:w-[86px] max-[426px]:h-[63px]">
                                
                                <p className="text-[#000000] text-opacity-70 font-medium text-[11px] max-[426px]:text-[5px] font-inter "> Questions Attempted </p>
                                <p className="text-black font-bold font-inter text-[24px] max-[426px]:text-[14px]">32</p>
                                 
                            </div>
                        </div>

                        <div className="w-[173px] h-full bg-white rounded-[20px] max-[426px]:w-[100px]">
                            <div className="w-[144px] h-[107px] flex flex-col mt-3 p-4 gap-y-2 max-[426px]:w-[86px] max-[426px]:h-[63px]">
                                
                                <p className="text-[#000000] text-opacity-70 font-medium text-[14px] max-[426px]:text-[7px] font-inter tracking-[-0.4px]"> Av. Session Length </p>
                                <p className="text-black font-bold font-inter text-[24px] max-[426px]:text-[14px]">2m 34s</p>
                                 
                            </div>
                        </div>

                    </div>

                    <div className="w-[540px] h-[227px] bg-white rounded-[20px] flex flex-col justify-center p-4 gap-y-3 mt-8 max-[426px]:w-[273px]
                    max-[426px]:h-[115px] max-[426px]:mx-auto">

                        <p className="text-[#000000] text-opacity-50 font-inter font-semibold text-[14px] leading-[18px] max-[426px]:leading-[9px] max-[426px]:text-[7px]">
                            Recently Viewed Content
                        </p>

                        <div className="w-[500px] h-[134px] pt-4 flex flex-col font-semibold text-inter text-[14px] text-black
                        gap-y-4 max-[426px]:w-[252px] max-[426px]:h-[70px] max-[426px]:gap-y-1 max-[426px]:pt-1 max-[426px]:text-[7px] leading-[9px]">
                            <p>Mauryan Art</p>
                            <p>Krishna Dynasty</p>
                            <p>Digestive System</p>
                        </div>
                    </div>

                    <div className="w-[540px] h-[227px] bg-white rounded-[20px] flex flex-col justify-center p-4 gap-y-3
                    max-[426px]:w-[271px] max-[426px]:h-[114px] max-[426px]:mx-auto max-[426px]:p-2">

                        <p className="text-[#000000] text-opacity-50 font-inter font-semibold text-[14px] leading-[18px] max-[426px]:text-[7px] max-[426px]:leading-[9px] ">
                            Credit Monitoring
                        </p>
                        <table className="max-[426px]:w-[253px] w-[510px]">
                        <tr className="w-full h-[30px] max-[426px]:h-[15px] max-[426px]:text-[6.46px] max-[426px]:leading-[9.4px] bg-[#9e00ff] flex text-white justify-evenly p-1 max-[426px]:p-0.5 font-semibold text-inter text-[13px] leading-[19px] mx-auto">
                            <th>Topic Name</th>
                            <th>Video Length</th>
                            <th>Credits Consumed</th>
                        </tr>
                        <tr className="w-full h-[30px] max-[426px]:h-[15px] max-[426px]:text-[6.46px] max-[426px]:leading-[9.4px] flex justify-evenly bg-white font-normal text-inter text-[13px] text-slate-600 leading-[19px]">
                            <td className=" mx-auto">Mouriyan Art</td>
                            <td className=" mx-auto">20mins 10secs</td> 
                            <td className="flex mx-auto">2 
                                <span><img src={credit} alt="" className="w-6"/></span>
                            </td>
                        </tr>

                        <tr className="w-full h-[30px] max-[426px]:h-[15px] max-[426px]:text-[6.46px] max-[426px]:leading-[9.4px] flex justify-evenly bg-white font-normal text-inter  text-[13px] text-slate-600 leading-[19px]">
                            <td className="mx-auto text-center">Digestive System</td>
                            <td className="mx-auto">30mins 10secs</td>
                            <td className="flex mx-auto">3 <span><img src={credit}  alt=" " className="w-6"/></span></td>
                        </tr>

                        </table>
                        

                        
                    </div>

                    
                </div>

                <div className="flex flex-col gap-y-8 max-[426px]:gap-y-4">

                    <div className="w-[520px] h-[315px] bg-white rounded-[20px] flex flex-col justify-center p-4 gap-y-3
                    max-[426px]:w-[300px] max-[426px]:h-[177px] max-[426px]:p-1 max-[426px]:gap-y-1 max-[426px]:mx-auto">
                        <p className="text-[#000000] text-opacity-50 font-inter font-semibold text-[14px] max-[426px]:text-[7px] max-[426px]:leading-[9px] leading-[18px] mb-3 ml-4 max-[426px]:mb-1">
                            Strongest Topics 
                        </p>
                        <div className="gap-y-6 flex flex-col max-[426px]:gap-y-3 text-black">
                            <div className="flex items-center justify-evenly">
                                <img src={img1} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Covid Protocols</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#2fea9b] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[95%] h-full rounded-[92px] bg-gradient-to-r to-[#2fea9b] from-[#7fdd53]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">95%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <img src={img2} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Cyber Security Basics</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#2fea9b] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[92%] h-full rounded-[92px] bg-gradient-to-r to-[#2fea9b] from-[#7fdd53]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">92%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <img src={img3} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Social Media Policies</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#2fea9b] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[89%] h-full rounded-[92px] bg-gradient-to-r to-[#2fea9b] from-[#7fdd53]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">89%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className="w-[520px] h-[315px] text-black bg-white rounded-[20px] flex flex-col justify-center p-4 gap-y-3
                    max-[426px]:w-[300px] max-[426px]:h-[177px] max-[426px]:p-1 max-[426px]:gap-y-1 max-[426px]:mx-auto">
                        <p className="text-[#000000] text-opacity-50 font-inter font-semibold text-[14px] leading-[18px] mb-3 ml-4 max-[426px]:text-[7px] max-[426px]:leading-[9px] max-[426px]:mb-1">
                            Weakest Topics 
                        </p>
                        <div className="gap-y-6 flex flex-col">
                            <div className="flex items-center justify-evenly">
                                <img src={img4} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Covid Protocols</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#ff4080] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[74%] h-full rounded-[92px] bg-gradient-to-r to-[#ff4080] from-[#ffbf1a]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">74%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <img src={img5} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Cyber Security Basics</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#ff4080] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[52%] h-full rounded-[92px] bg-gradient-to-r to-[#ff4080] from-[#ffbf1a]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">52%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-evenly">
                                <img src={img6} alt="" className="w-[48px] h-[36px] max-[426px]:w-[27px] max-[426px]:h-[20px]" />
                                <div className="flex flex-col">
                                    <p className=" font-semibold font-inter text-[13px] leading-4 max-[426px]:text-[7px] max-[426px]:leading-[9px]">Social Media Policies</p>
                                    <div className="w-[300px] h-[11px] rounded-[92px] bg-[#ff4080] bg-opacity-30 max-[426px]:w-[170px] max-[426px]:h-[6px]">
                                        <div className="w-[36%] h-full rounded-[92px] bg-gradient-to-r to-[#ff4080] from-[#ffbf1a]">

                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center h-full font-semibold text-[13px] leading-4 font-inter max-[426px]:text-[7px] max-[426px]:leading-[9px]">
                                    <p className="text-opacity-70 text-[#000000]">36%</p>
                                    <p className="text-opacity-30 text-[#000000]">Correct</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>

        
    </main>
  )
}

export default Stats;