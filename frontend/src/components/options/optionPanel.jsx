import Card from "../utils/card.jsx";
import RowContainer from "../utils/rowContainer.jsx";
import FilterOption from "./filterOption.jsx";
import SortOption from "./sortOption.jsx";
import StatOption from "./statOption.jsx";

const OptionPanel = ({rootStore}) => {
  return (
    <Card id="optionPanel">
      <RowContainer id = "optionRowContainer">

        <FilterOption rootStore = {rootStore}/>

        <SortOption rootStore = {rootStore}/>

        <StatOption rootStore = {rootStore}/>

      </RowContainer>
    </Card>
  );
};

export default OptionPanel;
