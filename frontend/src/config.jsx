import {
  BookOpen,
  Film,
  Tv,
  Gamepad2,
  TvMinimalIcon
} from "lucide-react";

// env
export const API_URL = 'http://localhost:4000/books';
export const ENV = "mockTest"; // "test" or "mockTest"
// filtering options
export const types = {
    "book" : {
        "name" : "Livre",
        "pluralName" : "Livres",
        "gender" : "un",
        "librairyName" : "Ma Librairie",
        "icon" : BookOpen
    },
    "movie" : {
        "name" : "Film",
        "pluralName" : "Films",
        "gender" : "un",
        "librairyName" : "Ma Vidéothèque",
        "icon" : Film
    },
    "series" : {
        "name" : "Série",
        "pluralName" : "Séries",
        "gender" : "une",
        "librairyName" : "Ma Sériethèque",
        "icon" : Tv
    },
    "video-game" : {
        "name" : "Jeu-vidéo",
        "pluralName" : "Jeux-vidéo",
        "gender" : "un",
        "librairyName" : "Ma Jeux-Vidéothèque",
        "icon" : Gamepad2
    },
};
export const readingStates   = ["Want to read","Finished", "Reading"];
export const defaultReadingState  = "Any state";
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
export const MIN_NUMBER_OF_SHELVES = 5;