import './App.css';
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import Card from './components/card.jsx';
import RowContainer from './components/rowContainer.jsx';
import MainBanner from './components/mainBanner.jsx';
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';
import { ENV, API_URL, NB_GENERATED_BOOKS, defaultType } from './config.jsx';

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [mockBooks] = useState(() => generateBooks(NB_GENERATED_BOOKS));

  // load books from backend
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      if(ENV=="mockTest"){
        setBooks(mockBooks);
      }else{
        setBooks(data);
      }
    })
    .catch(err => console.error('Error fetching books:', err));
  }, []);

  return (
    <>
      <MainBanner setBooks = {setBooks} setSelectedType = {setSelectedType} selectedType = {selectedType}/>

      <RowContainer>
        <BookshelvesContainer
          books = {filterBooks(books, selectedType)}
        />
        <Card id = "bookInfosDisplayer">
          bookInfosDisplayer
        </Card>
      </RowContainer>
    </>
  )
}

function filterBooks(data, selectedType){
  return data.filter(e => ((e.type === selectedType) || selectedType === defaultType))
}

export default App
