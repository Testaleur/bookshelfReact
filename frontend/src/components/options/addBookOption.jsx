
import { types, API_URL, readingStates } from "../../config.jsx";
import { useState } from "react";
import Card from '../utils/card.jsx'

const AddBookOption = ({setBooks}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('Book');
  const [readingState, setReadingState] = useState('Finished');

  const addBook = () => {
    if (!title.trim() || !author.trim() || !readingState.trim()) return;
    const newBook = { title, author, type, readingState };
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
        setType('Book');
        setReadingState('Finished');
      })
      .catch(err => console.error('Error adding book:', err));
  };

  return (
    <Card id = "addBookOption">
        Add a book
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
        <select
          id = "selectReadingState"
          className="border p-1 mr-2"
          value={readingState}
          onChange={e => setReadingState(e.target.value)}
        >
          {readingStates.map(t => (
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
    </Card>
  );
};
export default AddBookOption

