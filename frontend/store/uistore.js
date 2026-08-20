import { types, defaultType, defaultReadingState, defaultSort, NB_GENERATED_BOOKS,
    API_URL, ENV
 } from "../src/config.jsx";
import { generateBooks } from "../mock/mockBooks";
import { observable, action } from "mobx";

export default class UiStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable accessor books = [];
    @action setBooks(books) {
        this.books = books;
    }

    @observable accessor selectedBook = null;
    @action setSelectedBook(book) {
        this.selectedBook = book;
    }

    @observable accessor selectedType = defaultType;
    @action setSelectedType(newType) {
        this.selectedType = newType;
    }

    @observable accessor selectedReadingState = defaultReadingState;
    @action setSelectedReadingState(newReadingState) {
        this.selectedReadingState = newReadingState;
    }   

    @observable accessor selectedSort = defaultSort;
    @action setSelectedSort(newSort) {
        this.selectedSort = newSort;
    }

    @observable accessor displayStats = false;
    @action setDisplayStats(newDisplayStats) {
        this.displayStats = newDisplayStats;
    }

    @observable accessor mockBooks = generateBooks(NB_GENERATED_BOOKS);

    @action
    async loadBooks() {
        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            if (ENV === "mockTest") {
                this.setBooks(this.mockBooks);
            } else {
                this.setBooks(data);
            }
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }
}