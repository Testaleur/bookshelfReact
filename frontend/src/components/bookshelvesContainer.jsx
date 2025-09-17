import Shelf from './displayingBooks/shelf.jsx'
import Card from './utils/card.jsx'
import Book from './displayingBooks/book.jsx'
import {MAX_BOOKS_PER_SHELF} from '../config.jsx'

const BookshelvesContainer = ({ books, setSelectedBook }) => {
  const shelves = [];
  for (let i = 0; i < books.length; i += MAX_BOOKS_PER_SHELF) {
    shelves.push(books.slice(i, i + MAX_BOOKS_PER_SHELF));
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
              setSelectedBook = {setSelectedBook}
            />
          ))}
        </Shelf>
      ))}
    </Card>
  );
};


export default BookshelvesContainer
