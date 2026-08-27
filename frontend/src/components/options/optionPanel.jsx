import Card from "../utils/card.jsx";
import RowContainer from "../utils/rowContainer.jsx";
import FilterOption from "./filterOption.jsx";
import SortOption from "./sortOption.jsx";
import StatOption from "./statOption.jsx";

const OptionPanel = ({uiStore}) => {
  return (
    <Card id="optionPanel">
      <RowContainer id = "optionRowContainer">

        <FilterOption uiStore = {uiStore}/>

        <SortOption uiStore = {uiStore}/>

        <StatOption uiStore = {uiStore}/>

      </RowContainer>
    </Card>
  );
};

export default OptionPanel;
