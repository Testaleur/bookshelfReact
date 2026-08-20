import { defaultSort, defaultType, anyReadingState } from './config.jsx';

export function filterBooks(data, selectedType, selectedReadingState) {
  return data.filter(e => {
    const typeMatch =
      selectedType === defaultType || 
      e.type === selectedType;

    const readMatch =
      selectedReadingState === anyReadingState ||
      e.readingState == selectedReadingState;

    return typeMatch && readMatch;
  });
}

export function sortBooks(data, selectedSort) {
  const books = [...data];
  switch (selectedSort) {
    case "Title (A->Z)":
      return books.sort((a, b) => a.title.localeCompare(b.title));

    case "Title (Z->A)":
      return books.sort((a, b) => b.title.localeCompare(a.title));

    case "Author (A->Z)":
      return books.sort((a, b) => a.author.localeCompare(b.author));

    case "Author (Z->A)":
      return books.sort((a, b) => b.author.localeCompare(a.author));

    case defaultSort:
    default:
      return books;
  }
}

export function prepareData(data, selectedSort, selectedType, selectedReadingState){
  return sortBooks(filterBooks(data, selectedType, selectedReadingState), selectedSort);
}