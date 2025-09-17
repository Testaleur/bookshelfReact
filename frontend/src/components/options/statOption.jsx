import { ChartColumn } from "lucide-react";

const StatOption = ({setDisplayStats}) => {
  return (
    <div id = "statOption">
      <button onClick={()=>setDisplayStats(prev => !prev)}>
        <ChartColumn size={18} />
      </button>
    </div>
  );
};
export default StatOption