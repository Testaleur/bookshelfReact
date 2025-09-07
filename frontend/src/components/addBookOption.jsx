
import { types, API_URL } from "../config.jsx";
import { useState } from "react";

const AddBookOption = ({setBooks}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('Book');

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;
    const newBook = { title, author, type };
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then(res => res.json())
      .then(data => {
        setBooks(data.books);
        setTitle('');
        setAuthor('');
        setType('');
      })
      .catch(err => console.error('Error adding book:', err));
  };

  return (
    <div className="mb-4">
      <input
        className="border p-1 mr-2"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <input
        className="border p-1 mr-2"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <select
        id = "selectType"
        className="border p-1 mr-2"
        value={type}
        onChange={e => setType(e.target.value)}
      >
        {types.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <button
        className="bg-blue-500 text-white px-3 py-1 rounded"
        onClick={addBook}
      >
        Add
      </button>
    </div>
  );
};
export default AddBookOption

