<<<<<<< HEAD
var jwtToken = require('../services/jwToken.js');

module.exports = {
    signup: function(req, res) {
        if (req.body.password !== req.body.confirmPassword) {
           console.log(req.body.password, req.body.confirmPassword);
            return res.json(401, { err: 'Password does not match' })
=======
module.exports = {
    signup: function(req, res) {
        if (req.body.password !== req.body.confirmPassword) {
            return res.json(401, { err: 'Password does not match' });
>>>>>>> b68442e92ac6612904ce943d10313519a4926027
        }
        User.create({username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, password: req.body.password}).exec(function(err, user) {
          console.log(err, 'err');
            if (err) {
                res.json(err.status, { err: err });
                return;
            }
            if (user) {
                res.json(200, { user: user, token: jwtToken.issue({ id: user.id })});
            }
        });
    }
};
