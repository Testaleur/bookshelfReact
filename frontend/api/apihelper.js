import { API_URL, ENV } from "../src/config.jsx";

export default class ApiHelper {
    constructor() {
        this.addBook = this.addBook.bind(this);
    }

    async addBook(title, author, type, readingState) {
        if (
            !title.trim() ||
            !author.trim() ||
            !readingState.trim()
        ) {
            return null;
        }

        const newBook = {
            title,
            author,
            type,
            readingState
        };

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    }


    async getBooks() {
        const response = await fetch(API_URL);

        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
    }
}