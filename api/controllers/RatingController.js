/**
 * RatingController
 *
 * @description :: Server-side logic for managing Ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    rate: function(req, res) {
        var data = {
            book: req.param.bookId,
            ratingType: req.body.ratingType
        };
        console.log("rating controller before action")
        RatingService.rate(data, function(err, rating) {
            if (err) {
              console.log(err, 'rating error')
            }
            res.json(rating);
        });
    }
};
