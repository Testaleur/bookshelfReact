import Card from '../utils/card.jsx';
import { X } from "lucide-react";

const Stats = ({ setDisplayStats }) => {

  return (
    <Card id = "statsDisplayer">
      <div id = "topStatBar">
        <button id = "exitStatsButton"
          onClick={()=>setDisplayStats(false)}
        >
          <X size={20} />
        </button>
      </div>
      hey
    </Card>
  );
};


export default Stats
