var url = 'http://localhost:1337/';
var request = require('supertest')(url);

describe('Book', function() {
    it('adds a new book', function() {
            var req = request.post('books');
            req.send({
                data: {
                    title: "Lord of the Rings",
                    author: "Tom Hen",
                    description: "All about Rings",
                    pictureUrl: "ringsurl",
                }
            })
            req.end(function(err, res) {
                if (err) {
                    throw err;
                }
                console.log(res.text);
                done();
            })
        }),
        it('updates an existing book', function() {
            var req = request.post('books/:id');
            req.send({
                find: {
                    title: "Lord of the Rings"
                },
                data: {
                    title: "Lord of the Rings 2"
                }
            })
            req.end(function(err, res) {
                if (err) {
                    throw err;
                }
                console.log(res.text);
                done();
            })
        })
})
