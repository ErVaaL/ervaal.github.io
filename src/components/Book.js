import React from 'react';

export default function Book({ title, author, category, description }) {
  return (
    <section id="{title.toLowerCase().replace(/ /g, '-')}" >
     <h3>Title: {title}</h3>
     <ul>
      <li>Author: {author}</li>
      <li>Category: {category}</li>
      <li>Description: {description}</li>
     </ul>
  </section >
  );


}
