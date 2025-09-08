import { sortsOptions, defaultSort } from '../config.jsx';
import { SortAsc } from "lucide-react";

const SortOption = ({setSelectedSort, selectedSort}) => {
  return (
    <div id = "sortOption">
      <SortAsc size={18} />
      <select
        id = "selectSortingOption"
        className="border p-1 mr-2"
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)}
        >
        {sortsOptions.map(t => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
        <option key={defaultSort} value={defaultSort}>
          {defaultSort}
        </option>
      </select>
    </div>
  );
};
export default SortOption