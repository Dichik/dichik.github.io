import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: "SE",
            company: "...",
            dates: "Present",
            description: "TBD."
        },
        {
            title: "Machine Learning Intern",
            company: "Center of Responsible AI @ NYU",
            dates: "Sep 2023 - Dec 2023",
            description: "TBD."
        },
        {
            title: "Co-Founder",
            company: "Hearify",
            dates: "March 2023 - Nov 2023",
            description: "TBD."
        },
        {
            title: "Software Engineer Intern",
            company: "Huawei",
            dates: "June 2023 - July 2023",
            description: "TBD."
        },
        {
            title: "Machine Learning Engineer",
            company: "Harmix",
            dates: "Apr 2023 - Aug 2023",
            description: "TBD."
        },
        {
            title: "Junior Software Engineer",
            company: "Micro Focus",
            dates: "Nov 2021 - Dec 2022",
            description: "TBD."
        },
    ];

    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            {experiences.map((exp, index) => (
                <div className='experience-box' key={index}>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company}</h4>
                    <p>{exp.dates}</p>
                    <p>{exp.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;
