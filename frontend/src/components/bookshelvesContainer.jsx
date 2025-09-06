import Shelf from './shelf.jsx'
import Card from './card.jsx'
import Book from './book.jsx'

const MAX_BOOKS_PER_SHELF = 5;

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
              type = {"Book"}
            />
          ))}
        </Shelf>
      ))}
    </Card>
  );
};


export default BookshelvesContainer
