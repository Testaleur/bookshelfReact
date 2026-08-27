import Shelf from './displayingBooks/shelf.jsx'
import Card from './utils/card.jsx'
import Book from './displayingBooks/book.jsx'
import { MAX_BOOKS_PER_SHELF, MIN_NUMBER_OF_SHELVES } from '../config.jsx'
import { prepareData } from '../utils.js';
import { observer } from "mobx-react-lite";

const BookshelvesContainer = observer(({ uiStore }) => {

  const books = prepareData(uiStore.books, uiStore.selectedSort, uiStore.selectedType, uiStore.selectedReadingState);

  const shelves = [];
  for (let i = 0; i < books.length; i += MAX_BOOKS_PER_SHELF) {
    shelves.push(books.slice(i, i + MAX_BOOKS_PER_SHELF));
  }
  while (shelves.length < MIN_NUMBER_OF_SHELVES) {
    shelves.push([]);
  }

  return (
    <Card
      className="shelf"
      id="bookshelvesContainer"
    >
      {shelves.map((shelfBooks, shelfIndex) => (
        <Shelf key={`shelf-${shelfIndex}`}>
          {shelfBooks.map((book) => (
            <Book
              key = {"book_" + book.id}
              book = {book}
              uiStore = {uiStore}
            />
          ))}
        </Shelf>
      ))}
    </Card>
  );
});


export default BookshelvesContainer
