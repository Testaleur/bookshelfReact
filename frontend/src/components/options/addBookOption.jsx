
import { types, readingStates } from "../../config.jsx";
import { useState } from "react";
import Card from '../utils/card.jsx'
import { observer } from "mobx-react-lite";

const AddBookOption = observer(({rootStore}) => {
  const uiStore = rootStore.uiStore;
  const utilStore = rootStore.utilStore;
  const addBook = () => {
    utilStore.apiHelper.addBook(title, author, type, readingState);
  }
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('Book');
  const [readingState, setReadingState] = useState('Finished');

  return (
    <Card id = "addBookOption">
        Ajouter {types[uiStore.selectedType]?.gender || 'un'} {(types[uiStore.selectedType]?.name || uiStore.selectedType).toLowerCase()}:
      <div className="mb-4">
        <input
          className="border p-1 mr-2"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          className="border p-1 mr-2"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <select
          id = "selectType"
          className="border p-1 mr-2"
          value={type}
          onChange={e => setType(e.target.value)}
        >
          {Object.keys(types).map(typeKey => (
            <option key={typeKey} value={types[typeKey].name}>
              {types[typeKey].name}
            </option>
          ))}
        </select>
        <select
          id = "selectReadingState"
          className="border p-1 mr-2"
          value={readingState}
          onChange={e => setReadingState(e.target.value)}
        >
          {readingStates.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <button
          className="bg-blue-500 text-white px-3 py-1 rounded"
          onClick={addBook}
        >
          Add
        </button>
      </div>
    </Card>
  );
});
export default AddBookOption

