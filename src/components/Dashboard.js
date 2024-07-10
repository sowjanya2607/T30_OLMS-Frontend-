import React, { useEffect, useState } from "react";
import { getBorrowingRecords, getBooks } from "../services/api";
import BookList from "../pages/BookList";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  const [booksMap, setBooksMap] = useState({});

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const recordsRes = await getBorrowingRecords();
        const booksRes = await getBooks();

        const booksById = booksRes.data.reduce((map, book) => {
          map[book._id] = book.title;
          return map;
        }, {});

        setBooksMap(booksById);
        setRecords(recordsRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchRecords();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">User Dashboard</h1>
      <BookList showBorrowButton={true} />
      <div className="dashboard-content">
        <div className="dashboard-links">
          <Link to="/borrow-books">Borrow Books</Link>
          <Link to="/access-resources">Access Digital Resources</Link>
        </div>
        {records.length > 0 ? (
          records.map((record) => (
            <div key={record._id} className="dashboard-record">
              <h2>{booksMap[record.bookId]}</h2>
              <p>
                Borrow Date: {new Date(record.borrowDate).toLocaleDateString()}
              </p>
              <p>Status: {record.status}</p>
            </div>
          ))
        ) : (
          <p>No borrowing records found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
