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
      <p><strong>Reading state:</strong> {selectedBook.readingState}</p>
      <p>
        <strong>Completion date:</strong>{" "}
        {selectedBook.date
          ? new Date(selectedBook.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "-"}
      </p>
      <p>
        <strong>Note :</strong>{" "}
        {selectedBook.rating && selectedBook.rating >= 0
          ? [...Array(10)].map((_, i) => (
              <span
                key={i}
                style={{ color: i < selectedBook.rating ? "gold" : "lightgray" }}
              >
                ★
              </span>
            ))
          : "-"}
      </p>

      <p><strong>Comments:</strong> {selectedBook.comments?selectedBook.comments:"-"}</p>
    </Card>
  );
};

export default BookInfosDisplayer;
