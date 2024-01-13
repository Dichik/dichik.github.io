import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: "TBD",
            company: "TBD",
            dates: "Jan TBD - Present",
            description: "Description of your responsibilities and achievements."
        }
    ];

    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            {experiences.map((exp, index) => (
                <div key={index}>
                    <h2>{exp.title}</h2>
                    <h3>{exp.company}</h3>
                    <p>{exp.dates}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;
