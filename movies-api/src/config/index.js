require('dotenv').config();

const config = {
    api: {
        env: process.env.NODE_ENV,
        dev: process.env.NODE_ENV === 'development',
        port: process.env.PORT,
    },
};

module.exports = { config };