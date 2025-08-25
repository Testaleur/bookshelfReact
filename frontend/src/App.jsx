import './App.css'
import Card from './components/card.jsx'
import RowContainer from './components/rowContainer.jsx'
import Shelf from './components/shelf.jsx'
import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4000/books';

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');

  // Load books from backend
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  return (
    <>
      <Card id = "mainTitle ">
        Main title + options panel
      </Card>

      <RowContainer>

        <Card id = "bookshelvesContainer" title = "bookshelvesContainer">
          <Shelf>
            <ul>
              {books.map(book => (
                <li key={"book" + book.id}>{book.title} — {book.author}</li>
              ))}
            </ul>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>

          <Shelf>
            <div>book1</div>
            <div>book2</div>
          </Shelf>
        </Card>

        <Card id = "bookInfosDisplayer">
          bookInfosDisplayer
        </Card>

      </RowContainer>
    </>
  )
}

export default App
