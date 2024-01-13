import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <h2>Dmytro Omelian</h2>
                <nav>
                    <a href="/">About</a> /
                    <a href="/experience">Experience</a> /
                    <a href="/blog">Blog</a> /
                    <a href="/projects">Code</a> /
                    <a href="/books">Books</a> /
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
