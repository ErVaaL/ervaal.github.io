import React from "react";
import "./Book.css";

export default function Book({ title, author, category, description }) {
  return (
    <section className="book">
      <h3>Title: {title}</h3>
      <ul>
        <li>Author: {author}</li>
        <li>Category: {category}</li>
        <li>Description: {description}</li>
      </ul>
    </section>
  );
}
