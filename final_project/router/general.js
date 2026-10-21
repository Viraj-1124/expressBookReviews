
const express = require('express');
const general = express.Router();

const books = require('./booksdb.js');
const auth = require('./auth_users.js');

// Register a new user
general.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }

    if (auth.isValid(username)) {
        return res.status(409).json({
            message: 'Username already exists'
        });
    }

    auth.users.push({ username, password });

    return res.status(201).json({
        message: 'User registered successfully'
    });
});

// Get all books
general.get('/', (req, res) => {
    return res.status(200).json(books);
});

// Get book by ISBN
general.get('/isbn/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    if (books[isbn]) {
        return res.status(200).json(books[isbn]);
    }

    return res.status(404).json({
        message: 'Book not found'
    });
});

// Get books by author
general.get('/author/:author', (req, res) => {
    const author = req.params.author.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.author.toLowerCase() === author
    );

    return res.status(200).json(result);
});

// Get books by title
general.get('/title/:title', (req, res) => {
    const title = req.params.title.toLowerCase();

    const result = Object.values(books).filter(book =>
        book.title.toLowerCase() === title
    );

    return res.status(200).json(result);
});

// Get reviews by ISBN
general.get('/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    if (books[isbn]) {
        return res.status(200).json(books[isbn].reviews);
    }

    return res.status(404).json({
        message: 'Book not found'
    });
});

module.exports.general = general;
