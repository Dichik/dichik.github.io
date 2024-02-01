import React from 'react';
import './BooksList.css';

const books = [
    { year: 2024, title: '🔥 Стів Джобс', author: 'Волтер Айзексон' },
    { year: 2024, title: 'Never Stop', author: 'Марі Карачіна' },
    { year: 2024, title: 'The Path', author: 'Konosuke Matsushita' },
];

function BooksList2024() {
    return (
        <div>
            <div className="books-by-year">
                <h3>2024</h3>
                <ul>
                    {books.map((book, index) => (
                        <li key={index}><u>{book.title}</u> by {book.author}</li>
                    ))}
                </ul>
            </div>
            {/* You can add more years and books as needed */}
        </div>
    );
}

export default BooksList2024;
