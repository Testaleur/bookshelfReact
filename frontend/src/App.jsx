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
      <MainBanner rootStore = {rootStore}/>

      {uiStore.displayStats &&
        <Stats rootStore = {rootStore}/>
      }

      <RowContainer>
        <BookshelvesContainer rootStore = {rootStore}/>
        <BookInfosDisplayer rootStore = {rootStore}/>
      </RowContainer>
    </>
  )
})

export default App
