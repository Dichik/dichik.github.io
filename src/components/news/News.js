import React from 'react';
import './News.css';

const newsItems = [
    { date: "Jan 2024", description: "TBD" },
    { date: "Jan 2024", description: "TBD" },
    { date: "Dec 2023", description: "Blog created 🥳" },
    { date: "Dec 2023", description: "Finished internship  - Center of Responsible AI @ NYU" },
    { date: "Nov 2023", description: "TBD" },
    { date: "Aug 2023", description: "Not working at Harmix anymore." },
    { date: "July 2023", description: "Didn't like, resigned from Huawei." },
    { date: "May 2023", description: "Got $5k grant from CfE (team: Hearify)." },
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
