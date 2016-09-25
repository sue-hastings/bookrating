var jwt = require('jsonwebtoken'),
    tokenSecret = 'appsecret';

module.exports.issue = function(payload) {
    return jwt.sign(
        payload,
        tokenSecret, {
            expiresIn: 2000
        }
    );
};

module.exports.verify = function(token, next) {
    return jwt.verify(
        token,
        tokenSecret, {},
        function(err, decodedtoken) {
            if (err) {
                throw err;
            }
            return next(null, decodedtoken);
        }
    );
};
