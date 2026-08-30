import { useRef, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { types } from "../config.jsx";

const TypeSelector = observer(({ rootStore }) => {
  const selectorRef = useRef(null);
  
  const uiStore = rootStore.uiStore;
  const selectedType = types[uiStore.selectedType];
  const SelectedIcon = selectedType.icon;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target)
      ) {
        uiStore.setTypeSelectorOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [uiStore]);

  return (
    <div ref={selectorRef} className="typeSelector">
      <button
        onClick={() => uiStore.toggleTypeSelector()}
        className="typeSelectorButton"
      >
        <SelectedIcon size={18} />
      </button>

      {uiStore.typeSelectorOpen && (
        <div className="typeSelectorMenu">
          {Object.entries(types).filter(([key, type]) => key !== uiStore.selectedType).map(([key, type]) => {
            const Icon = type.icon;

            return (
              <button
                key={key}
                onClick={() => {
                  uiStore.setSelectedType(key);
                  uiStore.setTypeSelectorOpen(false);
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
});

export default TypeSelector;