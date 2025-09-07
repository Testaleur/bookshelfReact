import './App.css'
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import Card from './components/card.jsx'
import RowContainer from './components/rowContainer.jsx'
import AddBookOption from './components/addBookOption.jsx'
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';
import { ENV, API_URL } from './config.jsx';

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  const [mockBooks] = useState(() => generateBooks(42));

  // load books from backend
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
        <AddBookOption setBooks = {setBooks}/>
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
