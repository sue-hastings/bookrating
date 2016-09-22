module.exports = {
  rate: function(data, next) {
    var toOmit = ['isDeleted'];
    var userId = req.token.id;
    var bookId = data.bookId;
    var ratingType = data.ratingType;
    Rating.findOne({user: userId, book: bookId}).exec(function(err, rating) {
      if(err) throw err
      if (rating && rating.ratingType === ratingType) {
        return next(rating);
      }

      if (!rating) {
        Rating.create({user: userId, book: bookId, ratingType: ratingType}, function(err, rating) {
          if(err) throw err;

          return next(rating);
        });
      } else {
        rating.ratingType = ratingType;
        rating.save(function(err) {
          if(err) throw err;
          return next(rating);
        });

      }
    });
  }
};
