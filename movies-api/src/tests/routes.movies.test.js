const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
    const route = proxyquire('../api/routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', () => {
        it('should be respond with status 200', (done) => {
            request.get('/api/movies').expect(200, done);
        });

        it('should respond with the list of movies', (done) => {
            request.get('/api/movies').end((err, res) => {
                assert.deepStrictEqual(res.body, {
                    error: false,
                    status: 200,
                    body: moviesMock
                });

                done();
            });
        });
    });
});