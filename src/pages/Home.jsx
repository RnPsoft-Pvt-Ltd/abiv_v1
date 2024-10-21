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
import PricingTable from '../components/Pricing/Pricing';
import Page8 from '../components/Page8';
import Page9 from '../components/Page9'
import Layout from '../components/layout';
const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflowX = "hidden";
      
        const handleScrollToPage3 = () => {
            const page3Element = document.getElementById('page3');
            if (page3Element) {
                page3Element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('scrollToPage3', handleScrollToPage3);

        return () => {
            window.removeEventListener('scrollToPage3', handleScrollToPage3);
            document.body.style.overflowX = "auto";

        };
    }, []);

    return (
        <Layout>
        <Page1 />
        <Page2 id="page2"/>
        <Page3 id="page3" />
        <Page9/>

        <Page4 />
        <Page5 />
        <Page6 />
        <PricingTable />
        <Page8 />
    </Layout>
    );
};

export default Home;
