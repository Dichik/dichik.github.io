import React from 'react';
import './About.css';
import News from '../news/News';
import Achievements from '../achievements/Achievements';
import Others from '../others/Others';

function About() {
    return (
        <div className='about-me-container'>
            <img className='me-image' src="me.jpg" alt="Profile" />
            <h1>About Me</h1>
            <p>This is a paragraph about me...</p>

            <News />
            <Achievements />
            <Others />
        </div>
    );
}

export default About;
