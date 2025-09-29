import './App.css';
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import RowContainer from './components/utils/rowContainer.jsx';
import MainBanner from './components/mainBanner.jsx';
import BookInfosDisplayer from './components/bookInfosDisplayer.jsx';
import Stats from './components/options/stats.jsx';
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';
import { ENV, API_URL, NB_GENERATED_BOOKS, defaultType, defaultSort, defaultReadingState, anyReadingState } from './config.jsx';

function App() {
  // displayed features
  const [books, setBooks]                                 = useState([]);
  const [selectedBook, setSelectedBook]                   = useState(null);
  const [selectedType, setSelectedType]                   = useState(defaultType);
  const [selectedReadingState, setSelectedReadingState]   = useState(defaultReadingState);
  const [selectedSort, setSelectedSort]                   = useState(defaultSort);
  const [displayStats, setDisplayStats]                   = useState(false);
  const [mockBooks]                                       = useState(() => generateBooks(NB_GENERATED_BOOKS));

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

    if (
      selectedBook?.type &&
      newType !== defaultType &&
      selectedBook.type !== newType
    ) { // if the book is filtered, stop displaying it
      setSelectedBook(null);
    }
  };
  const setSelectedReadingStateAndUpdate = (newReadingState) => {
    setSelectedReadingState(newReadingState);

    if (
      selectedBook?.readingState &&
      newReadingState !== anyReadingState &&
      selectedBook.readingState !== newReadingState
    ) { // if the book is filtered, stop displaying it
      setSelectedBook(null);
    }
  };


  return (
    <>
      <MainBanner 
        setBooks        = {setBooks} 
        selectedType    = {selectedType}
        setSelectedType = {setSelectedTypeAndUpdate} 
        selectedReadingState    = {selectedReadingState}
        setSelectedReadingState = {setSelectedReadingStateAndUpdate} 
        selectedSort    = {selectedSort}
        setSelectedSort = {setSelectedSort}
        setDisplayStats = {setDisplayStats}
      />

      {displayStats &&
        <Stats
          setDisplayStats = {setDisplayStats}
          data = {books}
        />
      }

      <RowContainer>
        <BookshelvesContainer
          books = {prepareData(books, selectedSort, selectedType, selectedReadingState)}
          setSelectedBook = {setSelectedBook}
        />
        <BookInfosDisplayer
          selectedBook = {selectedBook}
        />
      </RowContainer>
    </>
  )
}

function prepareData(data, selectedSort, selectedType, selectedReadingState){
  return sortBooks(filterBooks(data, selectedType, selectedReadingState), selectedSort);
}

function filterBooks(data, selectedType, selectedReadingState) {
  return data.filter(e => {
    const typeMatch =
      selectedType === defaultType || 
      e.type === selectedType;

    const readMatch =
      selectedReadingState === anyReadingState ||
      e.readingState == selectedReadingState;

    return typeMatch && readMatch;
  });
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
