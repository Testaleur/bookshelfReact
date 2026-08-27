import { ChartColumn } from "lucide-react";

const StatOption = ({uiStore}) => {
  return (
    <div id = "statOption">
      <button onClick={()=>uiStore.setDisplayStats(prev => !prev)}>
        <ChartColumn size={18} />
      </button>
    </div>
  );
};
export default StatOption