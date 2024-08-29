import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer/Footer';
import Chatbot from '../components/chatbot/bot';

const Layout = ({ children }) => {
    return (
        <div className="w-screen  overflow-x-hidden">
            <Header />
            <main>{children}</main>
            <Footer />
            <Chatbot />
        </div>
    );
};

export default Layout;
