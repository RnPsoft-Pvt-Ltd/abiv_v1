import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginSignUp from './components/LoginSignup/loginnsignup';
import ForgetPassword from './components/forgot/forget';
import FirstComponent from './components/firstPage/first';
import Private from './components/Private';
import VideoPage from './pages/VideoPage';
import DoubtPage from './pages/DoubtPage';
import DemoPage from './pages/DemoPage';
import Home from './pages/Home';
import TextUploaf from './components/textuploaf.jsx'
import SettingPage from './pages/SettingPage';
import PricingPage from './pages/PricingPage';
import UserStats from './pages/UserStats';
import SignUp from './components/LoginSignup2/SignUp';
import OtpConfirm from './components/OtpConfirm/OtpConfirm';
import Otp from './components/Otp/Otp';
import Numericals from './components/numericals'
import Interview from './pages/Interview.jsx'
import Session from './pages/Session.jsx'
import Uploads from './pages/upload.jsx';
import Qna from './pages/Qna.jsx'
import Attend from './pages/upload1.jsx'
import Selectscreen from './pages/selectscreen.jsx'
import Mcqexam from './pages/mcqexam'
import Reportcard from './pages/reportcard.jsx'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Private />}>
        <Route path="/video" element={<VideoPage />} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/numericals' element={<Numericals/>} />
        <Route path='/doubt' element={<DoubtPage/>} />
        <Route path='/demo' element={<DemoPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/textupload' element={<TextUploaf/>}/>
        <Route path='/setting' element={<SettingPage/>} />
        <Route path='/stats' element={<UserStats />} />
        <Route path='/interview' element={<Interview/>}/>
        <Route path='/session' element ={<Session/>}/>
        <Route path='/uploads' element={<Uploads/>}/>
        <Route path='/qna' element={<Qna/>}/>
        <Route path='/attend' element={<Attend/>}/>
        <Route path='/selectscreen' element={<Selectscreen/>}/>
        <Route path='/mcqexam' element={<Mcqexam/>}/>
        <Route path='/report' element={<Reportcard/>}/>
       </Route>
      <Route path="/signup" element={<SignUp />} />
        <Route path="/otpconfirm" element={<OtpConfirm />} />
        <Route path="/" element={<Home/>} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/LoginSignUP" element={<LoginSignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
