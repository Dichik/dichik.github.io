import React from 'react';
import './News.css';

const newsItems = [
    { date: "Month 2024", description: "TBD" },
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
