import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [books, setBooks] = useState([]);
  const [newBookData, setNewBookData] = useState({
    title: "",
    author: "",
    availability: true,
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/books");
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  const handleAddBook = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5001/api/books",
        newBookData
      );
      console.log("Book added:", res.data);
      setNewBookData({ title: "", author: "", availability: true });
      fetchBooks();
    } catch (err) {
      console.error("Error adding book:", err);
    }
  };

  const handleUpdateBook = async (id, newData) => {
    try {
      const res = await axios.put(
        `http://localhost:5001/api/books/${id}`,
        newData
      );
      console.log("Book updated:", res.data);
      fetchBooks();
    } catch (err) {
      console.error("Error updating book:", err);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/books/${id}`);
      console.log("Book deleted:", id);
      fetchBooks();
    } catch (err) {
      console.error("Error deleting book:", err);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Add New Book</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          value={newBookData.title}
          onChange={(e) =>
            setNewBookData({ ...newBookData, title: e.target.value })
          }
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={newBookData.author}
          onChange={(e) =>
            setNewBookData({ ...newBookData, author: e.target.value })
          }
          placeholder="Author"
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            {book.title} by {book.author} | Availability:{" "}
            {book.availability ? "Available" : "Not Available"}{" "}
            <button
              onClick={() =>
                handleUpdateBook(book._id, {
                  ...book,
                  availability: !book.availability,
                })
              }
            >
              Toggle Availability
            </button>{" "}
            <button onClick={() => handleDeleteBook(book._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
