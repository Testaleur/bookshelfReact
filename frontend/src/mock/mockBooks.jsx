import { faker } from "@faker-js/faker";

export function generateBooks(count = 30) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
  }));
}
