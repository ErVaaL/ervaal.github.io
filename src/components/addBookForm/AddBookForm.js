import React from "react";
import { render } from "../../index.js";
import { root } from "../../index.js";
import books from "../../data/books.json";
import "./AddBookForm.css";

export default function AddBookForm() {
  return (
    <div id="addBookFormContainer">
      <h2 id="formHeader">Add a Book</h2>
      <form id="addBookForm" onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input className="formInputs" type="text" id="title" required />
        </label>
        <label>
          Author:
          <br />
          <input className="formInputs" type="text" id="author" required />
        </label>
        <label>
          Category:
          <br />
          <input className="formInputs" type="text" id="category" required />
        </label>
        <label>
          Description:
          <br />
          <textarea id="description" required />
        </label>
        <br />
        <input type="submit" value="Add Book" id="addButton"/>
        <br />
      </form>
      <br />
    </div>
  );
}

function handleSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;

  const newBook = { title, author, category, description };
  books.push(newBook);

  render(books, root);
}
