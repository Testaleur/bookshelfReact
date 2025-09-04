import './App.css'
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import Card from './components/card.jsx'
import RowContainer from './components/rowContainer.jsx'
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4000/books';
const ENV = "mockTest";

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const mockBooks = generateBooks(42);

  // load books from backend
  useEffect(() => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  const addBook = () => {
    if (!title.trim() || !author.trim()) return;

    const newBook = { title, author };

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
      })
      .catch(err => console.error('Error adding book:', err));
  };

  return (
    <>
      <Card id = "mainTitle ">
        Main title + options panel

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
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
            onClick={addBook}
          >
            Add
          </button>
        </div>
      </Card>

      <RowContainer>

        <BookshelvesContainer
          books = {ENV=="mockTest"?mockBooks:books}
        />

        <Card id = "bookInfosDisplayer">
          bookInfosDisplayer
        </Card>

      </RowContainer>
    </>
  )
}

export default App
