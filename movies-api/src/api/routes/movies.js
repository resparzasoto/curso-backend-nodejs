const express = require('express');
const response = require('../../network/response');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();

    app.use('/api/movies', router);

    const moviesService = new MoviesService();

    router.get('/', getMovies);
    router.get('/:id', getMovie);
    router.post('/', createMovie);
    router.put('/:id', updateMovie);

    async function getMovies(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });

            response.success(req, res, movies, 200);
        } catch (error) {
            next(error);
        }
    }

    async function getMovie(req, res, next) {
        const { id } = req.params;
        try {
            const movie = await moviesService.getMovie(id);

            response.success(req, res, movie, 200);
        } catch (error) {
            next(error);
        }
    }

    async function createMovie(req, res, next) {
        const { body: movie } = req;
        try {
            const createdMovie = await moviesService.createMovie(movie);

            response.success(req, res, createdMovie, 201);
        } catch (error) {
            next(error);
        }
    }

    async function updateMovie(req, res, next) {
        const { body: movie } = req;
        const { id } = req.params;
        try {
            const updatedMovie = await moviesService.updateMovie(id, movie);

            response.success(req, res, updatedMovie, 200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = moviesApi;