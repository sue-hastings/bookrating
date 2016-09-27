var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe('UserController', function() {
    describe('#create()', function(done) {
        it('should create user and return 200', function(done) {
            var req = request.post('books');
            req.send({
                    username: "sue",
                    firstname: "susan",
                    lastname: "adelokiki",
                    email: "susan@gmail.com",
                    password: "password"
                })
                .expect(200, done);
        });
    });
});
