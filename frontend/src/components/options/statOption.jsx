import { ChartColumn } from "lucide-react";

const StatOption = ({rootStore}) => {
  const uiStore = rootStore.uiStore;

  return (
    <div id = "statOption">
      <button onClick={()=>uiStore.setDisplayStats(prev => !prev)}>
        <ChartColumn size={18} />
      </button>
    </div>
  );
};
export default StatOption