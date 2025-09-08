import Card from './card.jsx';
import AddBookOption from './addBookOption.jsx';
import RowContainer from './rowContainer.jsx';
import OptionPanel from './optionPanel.jsx';

const MainBanner = ({setBooks, setSelectedType, selectedType, setSelectedSort, selectedSort}) => {
  return (
    <RowContainer id = "mainBanner">

      <AddBookOption setBooks = {setBooks}/>

      <Card id = "mainTitle">
        My library
      </Card>

      <OptionPanel 
        setSelectedType={setSelectedType} 
        selectedType = {selectedType}
        setSelectedSort = {setSelectedSort} 
        selectedSort = {selectedSort}
      />

    </RowContainer>
  );
};
export default MainBanner;