import Card from "./card.jsx";
import { Check } from "lucide-react";
import RowContainer from "./rowContainer.jsx";
import FilterOption from "./filterOption.jsx";
import SortOption from "./sortOption.jsx";

const OptionPanel = ({setSelectedType, selectedType, setSelectedSort, selectedSort}) => {
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

        <button>
          <Check size={18} />
        </button>

      </RowContainer>
    </Card>
  );
};

export default OptionPanel;
