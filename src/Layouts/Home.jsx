import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/AboutCmp';
import Navbar from '../Components/Navbar';
import Skills from '../Components/Skill';
import Education from '../Components/Education';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;