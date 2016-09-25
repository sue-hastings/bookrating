module.exports = {
    rate: function(data, next) {
        var toOmit = ['isDeleted'];
        var book = data.book;
        var ratingType = data.ratingType;
        var user = data.user;
        Rating.findOne({user: user, book: book}).exec(function(err, rating) {
          if(err) throw err;
          if (rating && rating.ratingType === ratingType) {
            return next(null, rating);
          }
          if (!rating) {
            Rating.create({user: user, book: book, ratingType: ratingType}, function(err, rating) {
              if(err) throw err;
              return next(null, rating);
            });
          } else {
            rating.ratingType = ratingType;
            rating.save(function(err) {
              if(err) throw err;
              return next(null, rating);
            });

          }
      });
    }

        // Book.findOne({ id: bookId }).exec(function(err, book) {
        //     if (err) {
        //       console.log('err1', err);
        //       throw err;
        //     }
        //     if (book) {
        //         Rating.create({ book: book, ratingType: ratingType }).exec(function(err, rating) {
        //             if (err) {
        //               console.log('err2', err);
        //               throw err;
        //             }
        //             console.log('rated', rating)
        //             return next(null, rating);
        //         });
        //     } else {
        //         return next();
        //     }
        // });
};
