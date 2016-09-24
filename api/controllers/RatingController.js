/**
 * RatingController
 *
 * @description :: Server-side logic for managing Ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    rate: function(req, res) {
        console.log('req', req.token)
        var data = {
            book: req.params.bookId,
            ratingType: req.body.ratingType
        };
        RatingService.rate(data, function(err, rating) {
            if (err) {
                throw err;
            }
            res.json(rating);
        });
    }
};
