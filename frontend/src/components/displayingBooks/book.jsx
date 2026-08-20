import { observer } from "mobx-react-lite";

const Book = observer(({ book, uiStore }) => {
  return (
    <button
      className={`book ${book.type}`}
      onClick={() => {
        console.log("setting book : ", book)
        uiStore.setSelectedBook(book)
      }}
    >
      {book.title}
    </button>
  );
});
export default Book