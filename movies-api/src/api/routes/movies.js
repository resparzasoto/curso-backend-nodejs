const express = require('express');
const response = require('../../network/response');
const { moviesMock } = require('../../utils/mocks/movies');

function moviesApi(app) {
    const router = express.Router();

    app.use('/api/movies', router);

    router.get('/', getMovies);

    async function getMovies(req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);

            response.success(req, res, movies, 200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = moviesApi;