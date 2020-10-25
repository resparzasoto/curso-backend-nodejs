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
    router.delete('/:id', deleteMovie);

    async function getMovies(req, res, next) {
        try {
            const movies = await moviesService.getMovies(req.query);

            response.success(req, res, movies, 200);
        } catch (error) {
            next(error);
        }
    }

    async function getMovie(req, res, next) {
        try {
            const movie = await moviesService.getMovie(req.params);

            response.success(req, res, movie, 200);
        } catch (error) {
            next(error);
        }
    }

    async function createMovie(req, res, next) {
        try {
            const createdMovieId = await moviesService.createMovie(req);

            response.success(req, res, createdMovieId, 201);
        } catch (error) {
            next(error);
        }
    }

    async function updateMovie(req, res, next) {
        try {
            const updatedMovieId = await moviesService.updateMovie(req.params, req);

            response.success(req, res, updatedMovieId, 200);
        } catch (error) {
            next(error);
        }
    }

    async function deleteMovie(req, res, next) {
        try {
            const deleteMovieId = await moviesService.deleteMovie(req.params);

            response.success(req, res, deleteMovieId, 200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = moviesApi;