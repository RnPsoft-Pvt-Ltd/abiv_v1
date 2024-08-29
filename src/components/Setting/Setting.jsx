import React, { useState } from 'react';
import eclipse4 from "../../assets/Ellipse 4.png";
import eclipse2 from "../../assets/Ellipse 2.png";
import eclipse3 from "../../assets/Ellipse 3.png";
import eclipse5 from "../../assets/Ellipse 5.png";
import avatar from "../../assets/Ellipse 12.png";
import tick from "../../assets/tick.png";
import coin from "../../assets/image 96.png";
import bell from "../../assets/Group 48097070.png";

const Setting = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('3750847205729476');
  const [newPassword, setNewPassword] = useState('24857028947609726');
  const [confirmNewPassword, setConfirmNewPassword] = useState('2387609721360970');
  const [category, setCategory] = useState('');
  const [phoneNo, setPhoneNo] = useState('+91 965838207607');
  const [creditBalance, setCreditBalance] = useState('71');

  const inputStyle = "w-full md:w-[90%] p-2 rounded bg-white border border-gray-600 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ";

  return (
    <>
      <section className="setting relative p-5 flex flex-col md:flex-row gap-20 md:gap-0 justify-evenly items-center">
        {/* background eclipse */}
        <img src={eclipse4} alt="" className="z-10 absolute left-0 top-[10rem] w-[10rem]" />
        <img src={eclipse2} alt="" className="z-10 absolute right-0 bottom-[0px] w-[38rem]" />
        <img src={eclipse3} alt="" className="z-10 hidden lg:block absolute left-[10rem] top-[-5rem] w-[40rem]" />
        <img src={eclipse5} alt="" className="z-10 absolute right-0 top-0 w-[8rem]" />
        {/* end of background eclipse */}
        <div className='bg-[#FFFFFF] z-20 bg-opacity-10 w-full lg:w-[85%] h-[98%] flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center my-3'>
            <div className='rounded-full  mr-8 border-2 border-violet-600 '><img src={coin} className='w-8' alt="" /></div>
            <img src={bell} alt="" className='w-8' />
          </div>
          <div className='bg-[#FFFFFF] bg-opacity-30 w-full lg:w-[95%] h-[80%]'>
            <div className='w-full bg-[#0E0D0D] bg-opacity-[70%] h-[4rem] flex justify-between items-center p-4 lg:p-10'>
              <h1 className="text-lg lg:text-2xl font-semibold">Welcome, Arindam</h1>
              <div className='p-1 px-3 rounded-3xl bg-yellow-200 text-black font-semibold'>
                BASIC
              </div>
            </div>
            <div className='p-4 lg:p-6'>
              {/* details */}
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className='flex items-center mb-4 lg:mb-0'>
                  <img src={avatar} alt="Avatar" className="w-12 lg:w-16 h-12 lg:h-16 rounded-full border-2 border-gray-500 mr-4" />
                  <div>
                    <p className="font-semibold">Arindam Kanrar</p>
                    <p className="text-gray-400">arindam.ck.yuvja@gmail.com</p>
                    <p className="text-gray-400">&lt;STUDENT&gt;</p>
                  </div>
                </div>
                <div className='text-sm p-2 bg-blue-500 rounded-lg cursor-pointer'>Save Changes</div>
              </div>

              {/* General Setting */}
              <div className='p-3 w-full flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5'>
                <div className='border border-black w-full lg:w-[40%] h-0'></div>
                <div className='text-lg lg:text-xl'>General Settings</div>
                <div className='border border-black w-full lg:w-[40%] h-0'></div>
              </div>

              <div className='px-3 pb-3 w-full flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
                <div className='w-full lg:w-[45%] px-3'>
                  <p>First Name</p>
                  <input
                    type="text"
                    placeholder="Your First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={inputStyle}
                  />
                </div>
                <div className='w-full lg:w-[45%] px-3'>
                  <p>Last Name</p>
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* Password Setting */}
              <div className='p-3 w-full flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5'>
                <div className='border border-black w-full lg:w-[38%] h-0'></div>
                <div className='text-lg lg:text-xl'>Password Settings</div>
                <div className='border border-black w-full lg:w-[38%] h-0'></div>
              </div>

              <div className='px-3 pb-3 w-full flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>Current Password</p>
                  <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className={inputStyle}
                  />
                </div>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>New Password</p>
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={inputStyle}
                  />
                </div>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>Confirm New Password</p>
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className={inputStyle}
                  />
                </div>
              </div>

              {/* Account Setting */}
              <div className='p-3 w-full flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-5'>
                <div className='border border-black w-full lg:w-[38%] h-0'></div>
                <div className='text-lg lg:text-xl'>Account Settings</div>
                <div className='border border-black w-full lg:w-[38%] h-0'></div>
              </div>

              <div className='px-3 pb-3 w-full flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0'>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>Category</p>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className={inputStyle}
                  >
                    <option value="basic">basic</option>
                    <option value="standard">standard</option>
                    <option value="premium">premium</option>
                  </select>
                </div>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>Update Phone No.</p>
                  <div className="w-full md:w-[90%] p-2 rounded text-gray-600 bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between">
                    {phoneNo}
                    <img src={tick} alt="" />
                  </div>
                </div>
                <div className='w-full lg:w-[35%] px-3'>
                  <p>Credit Balance</p>
                  <div className="w-full md:w-[90%] text-gray-400 rounded items-center bg-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between p-1">
                    <div className='flex items-center font-[Poly] text-xl'><img src={coin} alt="" />{creditBalance} </div>
                    <p className='underline cursor-pointer'>Buy Credits</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center mx-auto mb-5 p-2 w-full lg:w-[15%] text-lg bg-blue-500 rounded-lg cursor-pointer'>Confirm</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
