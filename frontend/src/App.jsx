import './App.css';
import BookshelvesContainer from './components/bookshelvesContainer.jsx';
import RowContainer from './components/utils/rowContainer.jsx';
import MainBanner from './components/mainBanner.jsx';
import BookInfosDisplayer from './components/bookInfosDisplayer.jsx';
import Stats from './components/options/stats.jsx';
import RootStore from '../store/rootstore.js'; 
import { prepareData } from './utils.js';
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

const rootStore = new RootStore();
const uiStore = rootStore.uiStore;

const App = observer(() => {
  useEffect(() => {
    uiStore.loadBooks();
  }, []);

  return (
    <>
      <MainBanner 
        setBooks        = {uiStore.setBooks} 
        selectedType    = {uiStore.selectedType}
        setSelectedType = {uiStore.setSelectedType}
        selectedReadingState    = {uiStore.selectedReadingState}
        setSelectedReadingState = {uiStore.setSelectedReadingState}
        selectedSort    = {uiStore.selectedSort}
        setSelectedSort = {uiStore.setSelectedSort}
        setDisplayStats = {uiStore.setDisplayStats}
      />

      {uiStore.displayStats &&
        <Stats
          setDisplayStats = {uiStore.setDisplayStats}
          data = {uiStore.books}
        />
      }

      <RowContainer>
        <BookshelvesContainer
          uiStore = {uiStore}
        />
        <BookInfosDisplayer
          selectedBook = {uiStore.selectedBook}
        />
      </RowContainer>
    </>
  )
})

export default App
