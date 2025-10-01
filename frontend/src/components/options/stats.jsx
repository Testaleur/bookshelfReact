import Card from '../utils/card.jsx';
import RowContainer from '../utils/rowContainer.jsx';
import ColumnContainer from '../utils/columnContainer.jsx';
import DisplayData from '../utils/displayData.jsx';
import {types} from '../../config.jsx';
import { X } from "lucide-react";
import { useState, useEffect } from 'react';

const Stats = ({ setDisplayStats, data }) => {
  const [numberOfFinishedItems, setNumberOfFinishedItems] = useState({});

  useEffect(() => {
    const counts = {};
    types.forEach((type) => {
      counts[type] = 0;
    });
    data.forEach((item) => {
      const itemType = item.type;
      console.log(itemType)
      if (types.includes(itemType)) {
        counts[itemType] += 1;
      }
    });
    setNumberOfFinishedItems(counts);
  }, [data]);

  return (
    <Card id = "statsDisplayer">
      <div id = "topStatBar">
        <button id = "exitStatsButton"
          onClick={()=>setDisplayStats(false)}
        >
          <X size={20} />
        </button>
      </div>

      <ColumnContainer id = "columnOfStats">
        <RowContainer>
          <DisplayData
            key = "totalNumber" 
            title={`Number of items`}
            value={data.length}
            color = {"#555"}
            />
        </RowContainer>
        <RowContainer>
          {types.map((type) => {
            console.log(type)
            return (
              <DisplayData
              key = {type} 
              title={`Number of ${type}${type.endsWith('s')?"":"s"}`}
              value={numberOfFinishedItems[type]}
              color = {"#555"}
              />
            );
          })}
        </RowContainer>
        <RowContainer>
          {types.map((type) => {
            console.log(type)
            return (
              <DisplayData
              key = {type} 
              title={`Number of ${type}${type.endsWith('s')?"":"s"}`}
              value={numberOfFinishedItems[type]}
              color = {"#555"}
              />
            );
          })}
        </RowContainer>
        <RowContainer>
          {types.map((type) => {
            console.log(type)
            return (
              <DisplayData
              key = {type} 
              title={`Number of ${type}${type.endsWith('s')?"":"s"}`}
              value={numberOfFinishedItems[type]}
              color = {"#555"}
              />
            );
          })}
        </RowContainer>
      </ColumnContainer>

    </Card>
  );
};


export default Stats
