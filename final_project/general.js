
const axios = require("axios");

const getAllBooks = () => {
    return axios.get("http://localhost:5000/")
        .then(response => {
            console.log("All Books:", response.data);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });
};

const getBookByISBN = (isbn) => {
    return axios.get(`http://localhost:5000/isbn/${isbn}`)
        .then(response => {
            console.log("Book by ISBN:", response.data);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });
};

const getBooksByAuthor = (author) => {
    return axios.get(`http://localhost:5000/author/${encodeURIComponent(author)}`)
        .then(response => {
            console.log("Books by Author:", response.data);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });
};

const getBooksByTitle = (title) => {
    return axios.get(`http://localhost:5000/title/${encodeURIComponent(title)}`)
        .then(response => {
            console.log("Books by Title:", response.data);
        })
        .catch(error => {
            console.log("Error:", error.message);
        });
};

// Export functions
module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
