import React from "react";
import { render } from "../index.js";
import { root } from "../index.js";

export default function AddBookForm() {
  return (
    <form id="addBookForm" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input id="title" name="title" type="text" required />
      <label htmlFor="author">Author:</label>
      <input id="author" name="author" type="text" required />
      <label htmlFor="category">Category:</label>
      <input id="category" name="category" type="text" required />
      <button type="submit">Add Book</button>
    </form>
  );
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const title = form.title.value;
  const author = form.author.value;
  const category = form.category.value;
  const description = form.description.value;
  const book = { title, author, category, description };
  form.reset();
  // Add book to the catalog
  render(books, root);
}
