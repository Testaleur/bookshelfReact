// env
export const API_URL = 'http://localhost:4000/books';
export const ENV = "mockTest"; // "test" or "mockTest"
// filtering options
export const types          = ["Book", "Movie", "Series"];
export const defaultType    = "Any";
export const readingStates   = ["Want to read","Finished", "Reading"];
export const defaultReadingState  = "Finished";
export const anyReadingState = "Any";
// sorting options
export const sortsOptions = ["Title (A->Z)", "Title (Z->A)", "Author (A->Z)", "Author (Z->A)"];
export const defaultSort = "Any";
// shelves parameters
export const MAX_BOOKS_PER_SHELF = 32;
export const NB_GENERATED_BOOKS = 100;