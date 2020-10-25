const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./api/routes/movies');
const { logErrors, errorHandler } = require('./utils/middlewares/errorHandler');

app.use(express.json());

moviesApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
