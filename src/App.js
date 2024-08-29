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
import SettingPage from './pages/SettingPage';
import PricingPage from './pages/PricingPage';
import UserStats from './pages/UserStats';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<Private />}>
        <Route path="/video" element={<VideoPage />} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/doubt' element={<DoubtPage/>} />
        <Route path='/demo' element={<DemoPage/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/setting' element={<SettingPage/>} />
        <Route path='/stats' element={<UserStats />} />

      </Route>
        <Route path="/" element={<Home/>} />
        <Route path="/LoginSignUP" element={<LoginSignUp />} />
        <Route path="/forget" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
