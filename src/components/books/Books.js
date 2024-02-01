import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import BooksList2024 from './BooksList2024';
import BooksList2023 from './BooksList2023';
import './BooksList.css';
import BooksList2022 from './BooksList2022';

function Books() {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch('/BOOKS.md')
            .then(response => response.text())
            .then(text => setMarkdown(marked(text)));
    }, []);

    return (
        // <div className="markdown-container" dangerouslySetInnerHTML={{ __html: markdown }} />
        <div className="books-list-container">
            <h2 className='books-container-title'>An incomplete list of books that I've been reading lately...</h2>

            <BooksList2024 />
            <BooksList2023 />
            <BooksList2022 />
        </div>
    );
}

export default Books;
