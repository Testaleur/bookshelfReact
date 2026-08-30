import Card from './utils/card.jsx';
import AddBookOption from './options/addBookOption.jsx';
import RowContainer from './utils/rowContainer.jsx';
import OptionPanel from './options/optionPanel.jsx';
import ColumnContainer from './utils/columnContainer.jsx';
import TypeSelector from './typeSelector.jsx';
import { types } from '../config.jsx';
import { observer } from "mobx-react-lite";

const MainBanner = observer(({rootStore}) => {
  const uiStore = rootStore.uiStore;
  return (
    < ColumnContainer id = "mainBanner">
      <RowContainer id = "mainBannerFirstRow">      
        <Card id = "mainTitle">
          {uiStore.selectedType ? types[uiStore.selectedType].librairyName : types["book"].librairyName}
        </Card>
        <TypeSelector rootStore = {rootStore}/>
      </RowContainer>

      <RowContainer id = "mainBannerSecondRow">

        <AddBookOption rootStore = {rootStore}/>

        <OptionPanel rootStore = {rootStore}/>

      </RowContainer>
    </ColumnContainer>
  );
});
export default MainBanner;