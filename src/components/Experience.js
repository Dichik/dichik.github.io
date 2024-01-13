import React from 'react';

function Experience() {
    const experiences = [
        {
            title: "Job Title 1",
            company: "Company 1",
            dates: "Jan 2020 - Present",
            description: "Description of your responsibilities and achievements."
        },
        // ... other experiences
    ];

    return (
        <div>
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
