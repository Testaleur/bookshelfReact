import Shelf from './shelf.jsx'
import Card from './card.jsx'
import Book from './book.jsx'
import {MAX_BOOKS_PER_SHELF} from '../config.jsx'

const BookshelvesContainer = ({ books }) => {
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
              key={`book-${book.id}`}
              title={book.title}
              author={book.author}
              type = {book.type}
            />
          ))}
        </Shelf>
      ))}
    </Card>
  );
};


export default BookshelvesContainer
