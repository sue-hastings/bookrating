var bcrypt = require('bcrypt');

module.exports = {

    schema: true,

    attributes: {
        username: {
            type: 'string',
            required: true
        },
        firstname: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: 'true',
            unique: true, // Yes unique one
            required: true,
        },
        encryptedPassword: {
            type: 'string'
        },
        // We don't wan't to send back encrypted password either
        toJSON: function() {
            var obj = this.toObject();
            delete obj.encryptedPassword;
            return obj;
        }
    },
    // Here we encrypt password before creating a User
    beforeCreate: function(values, next) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(values.password, salt, function(err, hash) {
                if (err) return next(err);
                values.encryptedPassword = hash;
                next();
            });
        });
    },

    comparePassword: function(password, user, cb) {
        bcrypt.compare(password, user.encryptedPassword, function(err, match) {

            if (err) cb(err);
            if (match) {
                cb(null, true);
            } else {
                cb(err);
            }
        });
    }
};
