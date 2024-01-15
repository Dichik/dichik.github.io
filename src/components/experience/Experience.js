import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "TBD",
            dates: "Nov 2023 - Present",
            descriptions: ["TBD."],
            tags: ["React", "NestJS"]
        },
        {
            title: "Machine Learning Intern",
            company: "Center of Responsible AI @ NYU",
            dates: "Sep 2023 - Dec 2023",
            descriptions: ["TBD."],
            tags: ["Academic Research", "Machine Learning", "Fairness"]
        },
        {
            title: "Co-Founder",
            company: "Hearify",
            dates: "March 2023 - Nov 2023",
            descriptions: ["TBD."]
        },
        {
            title: "Software Engineer Intern",
            company: "Huawei",
            city: "Dublin, Ireland (remote)",
            dates: "June 2023 - July 2023",
            descriptions: [
                "Researching and experimenting with eBPF technology, which involves running sandboxed programs within the privileged context of the operating system kernel to enhance kernel capabilities without source code modifications or module loading.",
                "Didn\'t like, resigned."
            ],
            tags: ["Research", "C"]
        },
        {
            title: "Machine Learning Engineer",
            company: "Harmix",
            city: "Kyiv, Ukraine (remote)",
            dates: "Apr 2023 - Aug 2023",
            descriptions: ["TBD."],
            tags: ["Python", "Machine Learning", "Audio Processing"]
        },
        {
            title: "Junior Software Engineer",
            company: "Micro Focus",
            city: "Kyiv, Ukraine (remote)",
            dates: "Nov 2021 - Dec 2022",
            descriptions: [
                "Worked on the ALM Octane project, module \“Release Processes\".",
                "Designed, supported, and implemented new backend features in close cooperation with different teams. Helped to speed up the time of resource loading by 4x.",
                "Contributed to CI / CD open-source GitLab, Jenkins, Bamboo, and TeamCity plugins and integrated them into the project."
            ],
            tags: ["Java", "Spring Framework"]
        },
    ];

    return (
        <div className='experience-container'>
            <h1>Experience</h1>
            {experiences.map((exp, index) => (
                <div className='experience-box' key={index}>
                    <h3>{exp.title}</h3>
                    <h4>{exp.company} {exp.city ? `- ${exp.city}` : ''}</h4>
                    <p>{exp.dates}</p>
                    <ul className='descriptions-box'>
                        {exp.descriptions.map((point, index) => (
                            <li id={index}>{point}</li>
                        ))}
                    </ul>
                    {exp.tags &&
                        <div className='tags-box'>
                            {exp.tags.map((tag, index) => (
                                <p className="tag" key={index}>{tag}</p>
                            ))}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default Experience;
