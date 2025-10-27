import Card from '../utils/card.jsx';
import RowContainer from '../utils/rowContainer.jsx';
import ColumnContainer from '../utils/columnContainer.jsx';
import DisplayData from '../utils/displayData.jsx';
import {types, defaultReadingState} from '../../config.jsx';
import { X } from "lucide-react";
import { useState, useEffect } from 'react';

const Stats = ({ setDisplayStats, data }) => {
  const [numberOfItems, setNumberOfItems] = useState({});
  const [numberOfFinishedItems, setNumberOfFinishedItems] = useState({});
  const [numberOfWantToReadItems, setNumberOfWantToReadItems] = useState({});

  useEffect(() => {
    const counts = {};
    const countsFinished = {};
    const countsWantToRead = {};

    types.forEach((type) => {
      counts[type] = 0;
      countsFinished[type] = 0;
      countsWantToRead[type] = 0;
    });

    data.forEach((item) => {
      const itemType = item.type;
      const itemState = item.readingState;
      if (types.includes(itemType)) {
        counts[itemType] += 1;

        if(itemState == defaultReadingState){
          countsFinished[itemType] += 1;
        } else {
          countsWantToRead[itemType] += 1;
        }
      }
    });

    setNumberOfItems(counts);
    setNumberOfFinishedItems(countsFinished);
    setNumberOfWantToReadItems(countsWantToRead);
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
              value={numberOfItems[type]}
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
              title={`Finished ${type}${type.endsWith('s')?"":"s"}`}
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
              title={`${type}${type.endsWith('s')?"":"s"} in wish-list`}
              value={numberOfWantToReadItems[type]}
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
