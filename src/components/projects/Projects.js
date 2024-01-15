import React from 'react';

function Projects() {
    const projects = [
        {
            name: "Project 1",
            description: "A brief description of Project 1."
        },
    ];

    return (
        <div>
            <h1>Projects</h1>
            {projects.map((project, index) => (
                <div key={index}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Projects;
