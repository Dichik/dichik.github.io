import React from 'react';
import './News.css';

const newsItems = [
    { date: "Jan 2024", description: "Finished Football Analytics Course as teaching assistant (UCU)." },
    { date: "Jan 2024", description: "Finished my research @ Anhalt University" },
    { date: "Dec 2023", description: "Blog and website created 🥳" },
    { date: "Dec 2023", description: "Finished internship  - Center of Responsible AI @ NYU" },
    { date: "Nov 2023", description: "Not working on Hearify anymore :(" },
    { date: "Nov 2023", description: "Student Startup Battle (IT Arena) Winners (Slush Conference) (team: Hearify)" },
    { date: "Sep 2023", description: "AI HOUSE Camp 2023 Winners (team: Hearify)" },
    { date: "Aug 2023", description: "Not working at Harmix anymore :(" },
    { date: "July 2023", description: "Didn't like, quitted the internship at Huawei." },
    { date: "May 2023", description: "Got $5k grant from CfE (team: Hearify)." },
    { date: "March 2023", description: "Participated at MIT & KSE Bootcamp 2023 (team: Hearify)" },
    { date: "March 2023", description: "Finished NLP School (Gathers)." },
    { date: "Feb 2023", description: "Presented final project @ NLP for Good School (AI HOUSE)." },
    { date: "Dec 2022", description: "finished ideasLab program | Batch 2" },
    { date: "Dec 2022", description: "Quitted the job at MicroFocus :(" },
    { date: "Nov 2022", description: "Finished Software Engineering School 2 @ Genesis, Kyiv-Mohyla Academy, AWS." },
    { date: "Nov 2021", description: "Desided not to finish Java Camp @ ELEKs, quitted" },
    { date: "Nov 2021", description: "Desided not to finish Openware Hackademy, quitted" },
    { date: "Apr 2021", description: "Desided not to finish EPAM Java Course, quitted" },
];

const News = () => {
    return (
        <div className="news-container">
            <h2>News</h2>
            {newsItems.map((item, index) => (
                <div className="news-item" key={index}>
                    <div className="news-date">{item.date}</div>
                    <div className="news-description">{item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default News;
