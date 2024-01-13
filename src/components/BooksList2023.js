import React from 'react';
import './BooksList.css';

const books = [
    { year: 2023, title: 'Напролом', author: 'Раян Голідей' },
    { year: 2023, title: 'Розгадка геніальності', author: 'Рон Фрідман' },
    { year: 2023, title: 'Creative personal branding', author: 'Jürgen Salenbacher' },
    { year: 2023, title: 'Нові Стоїки', author: 'Массімо Пільюччі та Ґреґорі Лопес' },
    { year: 2023, title: 'Дар', author: 'Едіт Еґер' },
    { year: 2023, title: 'Зелене світло', author: 'Метью Макконагі' },
    { year: 2023, title: 'The Subtle Art of Not Giving a F*ck', author: 'Mark Manson' },
    { year: 2023, title: 'Мізері', author: 'Стівен Кінг' },
    { year: 2023, title: '...', author: '...' }
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
