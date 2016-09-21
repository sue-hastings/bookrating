var Users = '../models/User.js'
module.exports = {
    signup: function(req, res) {
        if (req.body.password !== req.body.confirmPassword) {
            return res.json(401, { err: 'Password does not match' })
        }
        Users.create(req.body).exec(function(err, user) {
            if (err) {
                return res.json(err.status, { err: err });
            }
            if (user) {
                res.json(200, { user: user, token: jwtToken.issue({ id: user.id }) });
            }
        });
    }
};
