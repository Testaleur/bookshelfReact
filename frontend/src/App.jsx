import './App.css';
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import RowContainer from './components/utils/rowContainer.jsx';
import MainBanner from './components/mainBanner.jsx';
import BookInfosDisplayer from './components/bookInfosDisplayer.jsx';
import Stats from './components/options/stats.jsx';
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';
import { ENV, API_URL, NB_GENERATED_BOOKS, defaultType, defaultSort } from './config.jsx';

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [selectedSort, setSelectedSort] = useState(defaultSort);
  const [displayStats, setDisplayStats] = useState(false);
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

  // filter
  const setSelectedTypeAndUpdate = (newType) => {
    setSelectedType(newType);
    if(selectedBook.type){
      if(selectedBook.type != newType && newType != defaultType){ // if the book is filtered, stop displaying it
        setSelectedBook(null)
      }
    }
  }

  return (
    <>
      <MainBanner 
        setBooks        = {setBooks} 
        setSelectedType = {setSelectedTypeAndUpdate} 
        selectedType    = {selectedType}
        setSelectedSort = {setSelectedSort}
        selectedSort    = {selectedSort}
        setDisplayStats = {setDisplayStats}
      />

      {displayStats &&
        <Stats
          setDisplayStats = {setDisplayStats}
        />
      }

      <RowContainer>
        <BookshelvesContainer
          books = {prepareData(books, selectedSort, selectedType)}
          setSelectedBook = {setSelectedBook}
        />
        <BookInfosDisplayer
          selectedBook = {selectedBook}
        />
      </RowContainer>
    </>
  )
}

function prepareData(data, selectedSort, selectedType){
  return sortBooks(filterBooks(data, selectedType), selectedSort);
}

function filterBooks(data, selectedType){
  return data.filter(e => ((e.type === selectedType) || selectedType === defaultType))
}

function sortBooks(data, selectedSort) {
  const books = [...data];
  switch (selectedSort) {
    case "Title (A->Z)":
      return books.sort((a, b) => a.title.localeCompare(b.title));

    case "Title (Z->A)":
      return books.sort((a, b) => b.title.localeCompare(a.title));

    case "Author (A->Z)":
      return books.sort((a, b) => a.author.localeCompare(b.author));

    case "Author (Z->A)":
      return books.sort((a, b) => b.author.localeCompare(a.author));

    case "Any":
    default:
      return books;
  }
}


export default App
