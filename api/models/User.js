var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        username: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            email: true,
            required: true,
            unique: true
        },
        encryptedPassword: {
            type: String
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
            })
        })
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
        })
    }
};
