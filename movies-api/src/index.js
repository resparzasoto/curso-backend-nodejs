const express = require('express');
const app = express();

const { config } = require('./config/index');

const moviesApi = require('./api/routes/movies');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandler');

app.use(express.json());

moviesApi(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.api.port, function () {
    console.log(`Listening http://localhost:${config.api.port}`);
});
