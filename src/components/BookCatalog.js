import React from "react";
import SelectCategory from "./SelectCategory";
import AddBookForm from "./AddBookForm";

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
