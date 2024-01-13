import React from 'react';
import './BooksList.css';

const books = [
    { year: 2023, title: 'To be added', author: 'Added' },
];

function BooksList2023() {
    return (
        <div>
            <div className="books-by-year">
                <h3>2023</h3>
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

export default BooksList2023;
