import React from 'react';

function Books() {
    const books = [
        {
            title: "Book Title 1",
            date: "2022"
        },
        // ... other books
    ];

    return (
        <div>
            <h1>Books</h1>
            {books.map((book, index) => (
                <div key={index}>
                    <h2>{book.title}</h2>
                    <p>Published in {book.date}</p>
                </div>
            ))}
        </div>
    );
}

export default Books;
