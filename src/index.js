import React from "react";
import ReactDOM from "react-dom/client";
import BookCatalog from "./components/BookCatalog";
import data from "./data/books.json";

export const root = ReactDOM.createRoot(document.getElementById("root"));

export function render(books, root) {
  root.render(<BookCatalog books={books} />);
}

render(data, root);
