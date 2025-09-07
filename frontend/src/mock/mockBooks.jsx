import { faker } from "@faker-js/faker";
import {types} from "../App.jsx"

export function generateBooks(count = 30) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: faker.lorem.words(2),
    author: faker.person.fullName(),
    type: types[Math.floor(Math.random() * types.length)],
  }));
}
