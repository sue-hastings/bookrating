var bcrypt = require('bcrypt');

module.exports = {
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
            type: 'string',
            email: true,
            required: true,
            unique: true
        },
        encryptedPassword: {
            type: 'string'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.encryptedPassword;
            return obj;
        }
    },
    beforeCreate: function(values, next) {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                throw err;
            }
            bcrypt.hash(values.password, salt, function(err, hash) {
                if (err) {
                    return next(err);
                }
                values.encryptedPassword = hash;
                next();
            });
        });
    },
    comparePassword: function(password, user, cb) {
        bcrypt.comparePassword(password, user.encryptedPassword, function(err, match) {
            if (err) {
                cb(err);
            }
            if (match) {
                cb(null, tree);
            } else {
                cb(err);
            }
        });
    }
};
