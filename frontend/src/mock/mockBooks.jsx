import { faker } from "@faker-js/faker";
import {types,readingStates,maxRatingValue,defaultReadingState,defaultDate,defaultRating, defaultComments} from "../config.jsx"

export function generateBooks(count = 30) {
  let readingState = readingStates[Math.floor(Math.random() * readingStates.length)];

  return Array.from(
    { length: count }, (_, i) => {
      const readingState = readingStates[Math.floor(Math.random() * readingStates.length)];
      return {
        id: i,
        title: faker.lorem.words(2),
        author: faker.person.fullName(),
        type: types[Math.floor(Math.random() * types.length)],
        readingState : readingState,
        rating : (readingState == defaultReadingState)?Math.floor(Math.random() * maxRatingValue):defaultRating,
        date : (readingState == defaultReadingState)?faker.date.between({ from: '2017-01-01', to: Date.now() }):defaultDate,
        comments : (readingState == defaultReadingState)?faker.lorem.words(Math.floor(Math.random() * 15)):defaultComments
      }
    }
  );
}