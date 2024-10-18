import React from "react";
import Book from "./Book";
import data from "../data/books.json";
import { render } from "../index.js";
import { root } from "../index.js";

export default function SelectCategory({ books }) {
  return (
    <div id="categoryFilter">
      <select id="selector" onChange={handleCategoryChange}>
        <option key="all" value="all">
          All
        </option>
        {Array.from(new Set(data.map((book) => book.category))).map(
          (category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ),
        )}
      </select>
      <div className="book-catalog">
        {books.map((book, i) => (
          <Book className="book" key={i} {...book} />
        ))}
      </div>
    </div>
  );
}

function handleCategoryChange() {
  const selector = document.getElementById("selector");
  const category = selector.value;
  const filteredBooks = data.filter((book) => book.category === category || category === "all");
  

  render(filteredBooks, root);
}
