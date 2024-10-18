import React from "react";
import SelectCategory from "../selectCategory/SelectCategory";
import AddBookForm from "../addBookForm/AddBookForm";
import "./BookCatalog.css";


export default function BookCatalog({ books }) {
  return (
    <>
      <header>
        <h1>Book Catalog</h1>
      </header>
      <AddBookForm />
      <SelectCategory books={books} />
    </>
  );
}
