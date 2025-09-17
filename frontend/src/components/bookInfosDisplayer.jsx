import Card from "./utils/card.jsx";

const BookInfosDisplayer = ({ selectedBook }) => {
  if (!selectedBook) {
    return (
      <Card id="bookInfosDisplayer">
        Select a book to display informations!
      </Card>
    );
  }

  return (
    <Card id="bookInfosDisplayer">
      <h1 className="font-bold text-lg mb-2">{selectedBook.title}</h1>
      <p><strong>Author:</strong> {selectedBook.author}</p>
      <p><strong>Type:</strong> {selectedBook.type}</p>
    </Card>
  );
};

export default BookInfosDisplayer;
