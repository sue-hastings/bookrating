/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: String
    },
    author: {
      type: String
    },
    pictureUrl: {
      type: String
    },
    isDeleted: {
      type: Boolean,
      defaultsTo: false
    }
  }
};

