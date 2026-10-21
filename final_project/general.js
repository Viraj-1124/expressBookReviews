
const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Retrieve all books
const getAllBooks = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving all books:", error.response?.data || error.message);
    }
};

// Retrieve a book using ISBN
const getBookByISBN = async (isbn) => {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log("Book by ISBN:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving book by ISBN:", error.response?.data || error.message);
    }
};

// Retrieve books by author
const getBooksByAuthor = async (author) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/author/${encodeURIComponent(author)}`
        );
        console.log("Books by Author:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving books by author:", error.response?.data || error.message);
    }
};

// Retrieve books by title
const getBooksByTitle = async (title) => {
    try {
        const response = await axios.get(
            `${BASE_URL}/title/${encodeURIComponent(title)}`
        );
        console.log("Books by Title:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving books by title:", error.response?.data || error.message);
    }
};

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
