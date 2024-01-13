import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <h2>Dmytro Omelian</h2>
                <nav>
                    <Link to="/">About</Link> /
                    <Link to="/experience">Experience</Link> /
                    <Link to="/blog">Blog</Link> /
                    <Link to="/projects">Code</Link> /
                    <Link to="/books">Books</Link> /
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
