import Card from './utils/card.jsx';
import AddBookOption from './options/addBookOption.jsx';
import RowContainer from './utils/rowContainer.jsx';
import OptionPanel from './options/optionPanel.jsx';

const MainBanner = ({setBooks, setSelectedType, selectedType, setSelectedSort, selectedSort, setDisplayStats}) => {
  return (
    <RowContainer id = "mainBanner">

      <AddBookOption setBooks = {setBooks}/>

      <Card id = "mainTitle">
        My library
      </Card>

      <OptionPanel 
        setSelectedType = {setSelectedType} 
        selectedType    = {selectedType}
        setSelectedSort = {setSelectedSort} 
        selectedSort    = {selectedSort}
        setDisplayStats = {setDisplayStats}
      />

    </RowContainer>
  );
};
export default MainBanner;