import { types, defaultReadingState, defaultSort, NB_GENERATED_BOOKS, ENV } from "../src/config.jsx";
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

    @observable accessor selectedType = "book";
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

    @observable accessor typeSelectorOpen = false;

    @action setTypeSelectorOpen = (open) => {
        this.typeSelectorOpen = open;
    };

    @action toggleTypeSelector = () => {
        this.typeSelectorOpen = !this.typeSelectorOpen;
    };

    @observable accessor mockBooks = generateBooks(NB_GENERATED_BOOKS);

    @action
    async loadBooks() {
        const apiHelper = this.rootStore.utilStore.apiHelper;
        try {
            if (ENV === "mockTest") {
            this.setBooks(this.mockBooks);
            return;
        }
        const data = await apiHelper.getBooks();
        this.setBooks(data);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }
}