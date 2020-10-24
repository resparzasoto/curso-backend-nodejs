const express = require('express');
const app = express();

const { config } = require('./config/index');
const errors = require('./network/error');

const moviesApi = require('./api/routes/movies');

app.use(express.json());

moviesApi(app);

app.use(errors);

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
