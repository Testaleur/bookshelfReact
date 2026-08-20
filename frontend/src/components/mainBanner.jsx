import Card from './utils/card.jsx';
import AddBookOption from './options/addBookOption.jsx';
import RowContainer from './utils/rowContainer.jsx';
import OptionPanel from './options/optionPanel.jsx';
import { types, defaultType } from '../config.jsx';

const MainBanner = ({setBooks, setSelectedType, selectedType, setSelectedSort, selectedSort, setDisplayStats, selectedReadingState, setSelectedReadingState}) => {
  return (
    <RowContainer id = "mainBanner">

      <AddBookOption setBooks = {setBooks}/>

      <Card id = "mainTitle">
        {selectedType ? types[selectedType].librairyName : types[defaultType].librairyName}
      </Card>

      <OptionPanel 
        selectedType    = {selectedType}
        setSelectedType = {setSelectedType} 
        selectedReadingState    = {selectedReadingState}
        setSelectedReadingState = {setSelectedReadingState} 
        selectedSort    = {selectedSort}
        setSelectedSort = {setSelectedSort} 
        setDisplayStats = {setDisplayStats}
      />

    </RowContainer>
  );
};
export default MainBanner;