import React, { useEffect, useState } from "react";
import { getBooks, createBorrowingRecord } from "../services/api";
import { useAuth } from "../context/AuthContext";
import "./BookList.css";

const BookList = ({ showBorrowButton }) => {
  const [books, setBooks] = useState([]);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err);
      }
    };
    fetchBooks();
  }, []);

  const handleBorrow = async (bookId) => {
    try {
      await createBorrowingRecord({ bookId });
      // Optionally update the UI or show a success message
      alert("Book borrowed successfully!");
    } catch (err) {
      console.error("Error borrowing book:", err);
    }
  };

  return (
    <div className="booklist-container">
      <h1 className="booklist-header">Book List</h1>
      <ul className="booklist">
        {books.map((book) => (
          <li key={book._id} className="booklist-item">
            <div>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Available Copies: {book.copies}</p>
            </div>
            {showBorrowButton && isAuthenticated && (
              <button onClick={() => handleBorrow(book._id)}>Borrow</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
