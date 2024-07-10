import React, { useEffect, useState } from "react";
import { getBooks, createBorrowingRecord } from "../services/api";
import "./BorrowBooks.css";

const BorrowBooks = () => {
  const [books, setBooks] = useState([]);

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
      // Logic for borrowing a book (e.g., create a borrowing record)
      await createBorrowingRecord({ bookId });
      alert("Book borrowed successfully!");
      // Optionally: Update local state or redirect to dashboard
    } catch (err) {
      console.error("Error borrowing book:", err);
    }
  };

  return (
    <div>
      <h1>Borrow Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author}{" "}
            <button onClick={() => handleBorrow(book._id)}>Borrow</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowBooks;
