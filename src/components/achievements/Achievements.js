import React from 'react';
import './Achievements.css';

const newsItems = [
    { date: "Month 2024", description: "TBD" },
];

const Achievements = () => {
    return (
        <div className="news-container">
            <h2>Some small achievements</h2>
            {newsItems.map((item, index) => (
                <div className="news-item" key={index}>
                    <div className="news-date">{item.date}</div>
                    <div className="news-description">{item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default Achievements;
