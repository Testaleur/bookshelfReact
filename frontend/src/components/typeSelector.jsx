import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { types } from '../config.jsx';

const TypeSelector = ({ uiStore }) => {
  const [open, setOpen] = useState(false);

  const selectedType = types[uiStore.selectedType];
  const SelectedIcon = selectedType.icon;

  return (
    <div className="typeSelector">

      <button
        onClick={() => setOpen(!open)}
        className="typeSelectorButton"
      >
        <SelectedIcon size={18} />
        {/* <ChevronDown size={16} /> */}
      </button>

      {open && (
        <div className="typeSelectorMenu">
          {Object.entries(types).map(([key, type]) => {
            const Icon = type.icon;

            return (
              <button
                key={key}
                onClick={() => {
                  uiStore.setSelectedType(key);
                  setOpen(false);
                }}
                className="typeSelectorOption"
              >
                <Icon size={18} />
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
};

export default TypeSelector;