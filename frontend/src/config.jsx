// env
export const API_URL = 'http://localhost:4000/books';
export const ENV = "mockTest"; // "test" or "mockTest"
// filtering options
export const types = {
    "book" : {
        "name" : "Book",
        "librairyName" : "Ma Librairie"
    },
    "movie" : {
        "name" : "Movie",
        "librairyName" : "Ma Vidéothèque"
    },
    "series" : {
        "name" : "Series",
        "librairyName" : "Ma Sériethèque"
    },
    "video-games" : {
        "name" : "Video Games",
        "librairyName" : "Ma Jeux-vidéothèque"
    }
};
export const defaultType    = "book";
export const readingStates   = ["Want to read","Finished", "Reading"];
export const defaultReadingState  = "Finished";
export const anyReadingState = "Any state";
export const maxRatingValue = 10;
export const defaultRating = "";
export const defaultDate = "";
export const defaultComments = "";
// sorting options
export const sortsOptions = ["Title (A->Z)", "Title (Z->A)", "Author (A->Z)", "Author (Z->A)"];
export const defaultSort = "Any";
// shelves parameters
export const MAX_BOOKS_PER_SHELF = 32;
export const NB_GENERATED_BOOKS = 100;