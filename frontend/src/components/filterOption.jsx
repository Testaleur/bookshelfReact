import { types, defaultType } from '../config.jsx';
import { Filter } from "lucide-react";

const FilterOption = ({setSelectedType, selectedType}) => {
  return (
    <div id = "filterOption">
      <Filter size={18} />
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
    </div>
  );
};
export default FilterOption