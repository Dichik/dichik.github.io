import React from 'react';
import './Footer.css'; // Make sure to create a corresponding CSS file

function Footer() {
    const year = new Date().getFullYear(); // Gets the current year

    return (
        <footer className="site-footer">
            <div className="container">
                <span>&copy; {year} Dmytro Omelian. All rights reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
