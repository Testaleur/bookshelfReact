import Card from "../utils/card.jsx";
import RowContainer from "../utils/rowContainer.jsx";
import FilterOption from "./filterOption.jsx";
import SortOption from "./sortOption.jsx";
import StatOption from "./statOption.jsx";

const OptionPanel = ({setSelectedType, selectedType, setSelectedSort, selectedSort, setDisplayStats}) => {
  return (
    <Card id="optionPanel">
      <RowContainer id = "optionRowContainer">

        <FilterOption
          setSelectedType = {setSelectedType}
          selectedType = {selectedType}
        />

        <SortOption
          setSelectedSort = {setSelectedSort}
          selectedSort = {selectedSort}
        />

        <StatOption
          setDisplayStats = {setDisplayStats}
        />

      </RowContainer>
    </Card>
  );
};

export default OptionPanel;
