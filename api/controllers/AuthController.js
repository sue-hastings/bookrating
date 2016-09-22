module.exports = {
    login: function(req, res) {
        var email = req.param('email');
        var passw
        if (!email || !password) {
            return res.json(401, { err: 'email and password required' });
        }
        User.findOne({ email: email }, function(err, user) {
            if (!user) {
                return res.json(401, { err: 'invalid email or password' });
            }
            User.comparePassword(password, user, function(err, valid) {
                if (err) {
                    return res.json(403, { err: 'forbidden' });
                }
                if (!valid) {
                    return res.json(403, { err: 'invalid email or password' });
                } else {
                    res.json({
                        user: user,
                        token: jwToken.issue({ id: user.id })
                    });
                }
            });
        });
    },
    logout: function(req, res) {
      request.logout();
      response.json(200,true);
    }
};
