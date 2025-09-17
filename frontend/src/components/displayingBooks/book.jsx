const Book = ({ book, setSelectedBook }) => {

  return (
    <button
      className={`book ${book.type}`}
      onClick={() => {
        console.log("setting book : ", book)
        setSelectedBook(book)
      }}
    >
      {book.title}
    </button>
  );
};
export default Book