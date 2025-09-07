import Card from './card.jsx';
import AddBookOption from './addBookOption.jsx';
import RowContainer from './rowContainer.jsx';
import OptionPanel from './optionPanel.jsx';

const MainBanner = ({setBooks, setSelectedType, selectedType}) => {
  return (
    <RowContainer id = "mainBanner">

      <AddBookOption setBooks = {setBooks}/>

      <Card id = "mainTitle">
        My library
      </Card>

      <OptionPanel setSelectedType={setSelectedType} selectedType = {selectedType}/>

    </RowContainer>
  );
};
export default MainBanner;