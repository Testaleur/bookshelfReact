import { types, defaultType, readingStates, anyReadingState } from '../../config.jsx';
import { Filter } from "lucide-react";
import ColumnContainer from '../utils/columnContainer.jsx';

const FilterOption = ({setSelectedType, selectedType, selectedReadingState, setSelectedReadingState}) => {
  return (
    <div id = "filterOption">
      <Filter size={18} />
      <ColumnContainer>

        <select
          id = "selectFilteringType"
          className="border p-1 mr-2"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
          >
          {types.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option key={defaultType} value={defaultType}>
            {defaultType}
          </option>
        </select>

        <select
          id = "selectFilteringReadingState"
          className="border p-1 mr-2"
          value={selectedReadingState}
          onChange={e => setSelectedReadingState(e.target.value)}
          >
          {readingStates.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
          <option key={anyReadingState} value={anyReadingState}>
            {anyReadingState}
          </option>
        </select>
      </ColumnContainer>
    </div>
  );
};
export default FilterOption