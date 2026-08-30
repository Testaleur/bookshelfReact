import { types, readingStates, anyReadingState, defaultReadingState } from '../../config.jsx';
import { Filter } from "lucide-react";
import ColumnContainer from '../utils/columnContainer.jsx';
import { observer } from "mobx-react-lite";

const FilterOption = observer(({rootStore}) => {
  const uiStore = rootStore.uiStore;
  const resetFilterValues = () => {
    uiStore.setSelectedReadingState(defaultReadingState);
  }

  return (
    <div id = "filterOption">
      <Filter size={18} />
      <ColumnContainer>
        <select
          id = "selectFilteringReadingState"
          className="border p-1 mr-2"
          value={uiStore.selectedReadingState}
          onChange={e => uiStore.setSelectedReadingState(e.target.value)}
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

        <button onClick={resetFilterValues}>Reset</button>
      </ColumnContainer>
    </div>
  );
});
export default FilterOption