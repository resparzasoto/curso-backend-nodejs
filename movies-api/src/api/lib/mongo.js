const { MongoClient } = require('mongodb');
const { config } = require('../../config');

const USER = encodeURIComponent(config.mongo.user);
const PASSWORD = encodeURIComponent(config.mongo.password);
const DB = encodeURIComponent(config.mongo.db);

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.mongo.host}/${DB}?retryWrites=true&majority`;

class MongoLib {
    constructor() {
        this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
        this.db = DB;
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        return reject(err);
                    }

                    console.log('Connected successfully to Mongo');
                    return resolve(this.client.db(this.db));
                });
            });
        }

        return MongoLib.connection;
    }
}

module.exports = MongoLib;