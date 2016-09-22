/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        title: {
            type: 'string'
        },
        author: {
            model: 'user'
        },
        description: {
          type: 'string',
          defaultsTo: ''
        },
        pictureUrl: {
            type: 'string'
        },
        ratings: {
          collection: 'rating',
          via: 'book'
        },
        isDeleted: {
            type: 'boolean',
            defaultsTo: false
        }
    },

    upvotes: function(){
      var upvotes = _.filter(this.ratings, function(rating) {
        return rating.ratingType === 'upvote';
      });
      return upvotes;
    },

    downvotes: function(){
      var downvotes = _.filter(this.ratings, function(rating) {
        return rating.ratingType === 'downvote';
      });
      return downvotes;
    }
};
