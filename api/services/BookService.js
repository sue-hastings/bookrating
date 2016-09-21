module.exports = {
  getBooks: function(next) {
    var toOmit = ['isDeleted'];
    Book.find({isDeleted: false}).exec(function(err, books) {
      if(err) throw err;

      books = _.map(books, function(book) {
        return _.omit(book, toOmit);
      });
      next(books);
    });
  },
  getBook: function(id, next) {
    var toOmit = ['isDeleted'];
    Book.findOne({id: id, isDeleted: false}).exec(function(err, book) {
      if(err) throw err;
      book = _.omit(book, toOmit);
      next(book);
    });
  },

  addBook: function(bookdetails, next) {
    var toOmit = ['isDeleted'];
    Book.create(bookdetails).exec(function(err, book) {
      if(err) throw err;
      book = _.omit(book, toOmit);
      next(book);
    });
  },
  updateBook: function(id, bookdetails, next) {
    var toOmit = ['isDeleted'];
    Book.update({id: id, isDeleted: false}, bookdetails).exec(function(err, book) {
      if(err) throw err;
      book = _.omit(book, toOmit);
      next(book);
    });
  },
  removeBook: function(id, next) {
    Book.update({id: id}, {isDeleted: true}).exec(function(err, book) {
      if(err) throw err;
      next({});
    });
  }
}