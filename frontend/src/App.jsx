import './App.css';
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import Card from './components/card.jsx';
import RowContainer from './components/rowContainer.jsx';
import MainBanner from './components/mainBanner.jsx';
import { generateBooks } from "./mock/mockBooks";
import { useEffect, useState } from 'react';
import { ENV, API_URL, NB_GENERATED_BOOKS, defaultType, defaultSort } from './config.jsx';

function App() {
  // displayed features
  const [books, setBooks] = useState([]);
  const [selectedType, setSelectedType] = useState(defaultType);
  const [selectedSort, setSelectedSort] = useState(defaultSort);
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
      <MainBanner 
        setBooks        = {setBooks} 
        setSelectedType = {setSelectedType} 
        selectedType    = {selectedType}
        setSelectedSort = {setSelectedSort}
        selectedSort    = {selectedSort}
      />

      <RowContainer>
        <BookshelvesContainer
          books = {prepareData(books, selectedSort, selectedType)}
        />
        <Card id = "bookInfosDisplayer">
          bookInfosDisplayer
        </Card>
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
