const express = require('express');
const Book = require('../models/book');
const router = express.Router();

router.get('/', async (req, res) => {
    let books = [];
    try {
        books = await Book.find().sort({ createdAt: 'desc'}).limit(10).exec();
    } catch (e) {
        books = []
        console.log(e);
    }
    res.render('index', { books: books })
})

module.exports = router;