import { sortsOptions, defaultSort } from '../../config.jsx';
import { SortAsc } from "lucide-react";

const SortOption = ({rootStore}) => {
  const uiStore = rootStore.uiStore;

  return (
    <div id = "sortOption">
      <SortAsc size={18} />
      <select
        id = "selectSortingOption"
        className="border p-1 mr-2"
        value={uiStore.selectedSort}
        onChange={e => uiStore.setSelectedSort(e.target.value)}
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