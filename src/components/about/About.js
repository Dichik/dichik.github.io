import React from 'react';
import Posts from '../posts/Posts';
import './About.css';

function About() {
    return (
        <div className='about-me-container'>
            <img className='me-image' src="me.jpg" alt="Profile" />
            <h1>About Me</h1>
            <p>This is a paragraph about me...</p>

            <Posts />
        </div>
    );
}

export default About;
