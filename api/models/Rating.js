module.exports = {
    attributes: {
        user: {
            model: 'user'
        },
        book: {
            model: 'book'
        },
        ratingType: {
          type: 'string',
          enum: ['upvote', 'downvote']
        }
    }
};
