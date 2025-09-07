import Card from "./card.jsx";
import { types, defaultType } from '../config.jsx';
import { Filter, SortAsc, Check } from "lucide-react";
import RowContainer from "./rowContainer.jsx";

const OptionPanel = ({setSelectedType, selectedType}) => {
  return (
    <Card id="filterOption">
      <RowContainer>

        <div>
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

        <button>
          <SortAsc size={18} />
        </button>

        <button>
          <Check size={18} />
        </button>

      </RowContainer>
    </Card>
  );
};

export default OptionPanel;
