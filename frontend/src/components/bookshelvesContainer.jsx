import Shelf from './shelf.jsx'
import Card from './card.jsx'

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
      title="bookshelvesContainer"
    >
      {shelves.map((shelfBooks, shelfIndex) => (
        <Shelf key={`shelf-${shelfIndex}`}>
          <ul>
            {shelfBooks.map((book) => (
              <li key={`book-${book.id}`}>
                {book.title} — {book.author}
              </li>
            ))}
          </ul>
        </Shelf>
      ))}
    </Card>
  );
};


export default BookshelvesContainer
