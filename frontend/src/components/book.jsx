const Book = ({ title, author, type }) => {
  return (
    <button
      className={`book ${type}`}
    >
      {title}
    </button>
  );
};
export default Book