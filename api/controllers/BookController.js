/**
 * BookController
 *
 * @description :: Server-side logic for managing Books
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addBook: function(req, res) {
        var bookdetails = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            pictureUrl: req.body.pictureUrl,
        };
        BookService.addBook(bookdetails, function(book) {
            res.json(book);
        });
    },
    getBooks: function(req, res) {
        BookService.getBooks(function(books) {
            res.json(books);
        });
    },
    getBook: function(req, res) {
        BookService.getBook(req.params.id, function(book) {
            res.json(book);
        });
    },
    updateBook: function(req, res) {
        var id = req.params.id;
        var bookdetails = {
            name: req.body.name,
            author: req.body.author,
            pictureUrl: req.body.pictureUrl
        };
        BookService.updateBook(id, bookdetails, function(book) {
            res.json(book);
        });
    },
    removeBook: function(req, res) {
        var id = req.params.id;
        BookService.removeBook(id, function(success) {
            res.json(success);
        });
    }
};
