// var User = require('../../../api/models/User.js');

// var user;

// describe('User Model', function() {
//     user = new User();
//     it('should not register if username field is empty', function(done) {
//         user.username = '';
//         user.firstname = "susan";
//         user.lastname = "susan";
//         user.email = 'susan@gmail.com';
//         user.password = 'susan';
//         user.save(function(err) {
//             expect(err).not.toBe(null);
//             done();
//         });
//     });

//     it('should not register if firstname field is empty', function(done) {
//         user.username = 'susan';
//         user.firstname = "";
//         user.lastname = "susan";
//         user.email = 'susan@gmail.com';
//         user.password = 'susan';
//         user.save(function(err) {
//             expect(err).not.toBe(null);
//             done();
//         });
//     });

//     it('should not register if lastname field is empty', function(done) {
//         user.username = 'susan';
//         user.firstname = "susan";
//         user.lastname = "";
//         user.email = 'susan@gmail.com';
//         user.password = 'susan';
//         user.save(function(err) {
//             expect(err).not.toBe(null);
//             done();
//         });
//     });

//     it('should not register if email field is empty', function(done) {
//         user.username = 'susan';
//         user.firstname = "susan";
//         user.lastname = "susan";
//         user.email = '';
//         user.password = 'susan';
//         user.save(function(err) {
//             expect(err).not.toBe(null);
//             done();
//         });
//     });

//     it('should not register if password field is empty', function(done) {
//         user.username = 'susan';
//         user.firstname = "susan";
//         user.lastname = "susan";
//         user.email = 'susan';
//         user.password = '';
//         user.save(function(err) {
//             expect(err).not.toBe(null);
//             done();
//         });
//     });

//     it('should register a user with complete credentials', function(done) {
//         user.username = '';
//         user.firstname = "susan";
//         user.lastname = "susan";
//         user.email = 'susan@gmail.com';
//         user.password = 'susan';
//         user.save(function(err) {
//             expect(err).toBe(null);
//             done();
//         });
//     });
// });
