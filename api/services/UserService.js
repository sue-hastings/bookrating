module.exports = {
    createUser: function(userinfo, next) {
        var toOmit = ['isDeleted'];
        User.create(userinfo).exec(function(err, user) {
            if (err) throw err;
            user = _.omit(user, toOmit);
            next(user);
        });
    },
    getUsers: function(next) {
        var toOmit = ['isDeleted'];
        User.find({ isDeleted: false }).exec(function(err, user) {
            if (err) throw err;
            users = _.map(users, function(user) {
                return _.omit(user, toOmit);
            });
            next(users);
        });
    },
    getUser: function(id, next) {
        var toOmit = ['isDeleted'];
        User.findOne({ id: id, isDeleted: false }).exec(function(err, user) {
            if (err) throw err;
            user = _.omit(user, toOmit);
            next(user);
        });
    },
    updateUser: function(id, userinfo, next) {
        var toOmit = ['isDeleted'];
        User.update({ id: id, isDeleted: false }, userinfo).exec(function(err, user) {
            if (err) throw err;
            user = _.omit(user, toOmit);
            next(user);
        });
    },
    removeUser: function(id, next) {
        User.update({ id: id }, { isDeleted: true }).exec(function(err, user) {
            if (err) throw err;
            next({});
        });
    }
};
