import React,{useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import Chatbot from '../components/chatbot/bot';
import Login from './LoginSignup2/LoginSignup2'
import Signin from './LoginSignup2/SignUp'
import 'react-puzzle-captcha/dist/react-puzzle-captcha.css';
const Layout = ({ children }) => {
    
    const [login,setsignin]=useState(false)
    const [signin,signup]=useState(false)
    return (

        <div className={`${login||signin?"blur-sm":""}siw-screen  overflow-x-hidden`}>
            <Header setlogin={setsignin} />
            
            <main>{children}</main>
            {login && (
<div className="absolute inset-0 flex items-center justify-center z-30">
<Login islogin={setsignin} issignup={signup}></Login> 
</div>
            )            
            }
            {signin && (
<div className="absolute inset-0 flex items-center justify-center z-30 mt-30">
<Signin setsign={signup}/> 
</div>
                )
            }
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Layout;
