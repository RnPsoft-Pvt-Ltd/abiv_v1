import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Page2 from '../components/page2/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page1 from '../components/Page1';
import Page6 from '../components/Page6'
import Footer from '../components/footer/Footer';
import Header from '../components/Header'
const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('auth-token'))navigate('/LoginSignUP')
          
        const handleScrollToPage3 = () => {
            const page3Element = document.getElementById('page3');
            if (page3Element) {
                page3Element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('scrollToPage3', handleScrollToPage3);

        return () => {
            window.removeEventListener('scrollToPage3', handleScrollToPage3);
        };
    }, []);

    return (
        <div>
            <Helmet>
            <title>ABIV</title>
            <link rel="icon" href="%PUBLIC_URL%/custom-favicon.png" />
            <meta name="keywords" content="ai classroom,classroom ai,using ai in the classroom,ai in classrooms,applied ai classroom,applied ai course classroom,artificial intelligence in classroom teaching,classroom applied ai,classroom applied ai course,google classroom ai" />
            </Helmet>
            <main className="w-screen h-screen overflow-x-hidden">
            <Header/>

                <Page1 />
                <Page2 id="page2"/>
                <Page3 id="page3" />
                <Page4 />
                <Page5 />
                <Page6 />
                <Footer/>
            </main>
        </div>
    );
};

export default Home;
