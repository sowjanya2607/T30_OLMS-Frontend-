// components/BookItem.js

import React from "react";

const BookItem = ({ book }) => {
  return (
    <li>
      <strong>{book.title}</strong> by {book.author}
      {book.dueDate && <span> - Due Date: {book.dueDate}</span>}
    </li>
  );
};

export default BookItem;
