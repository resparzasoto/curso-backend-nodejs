const fs = require('fs');

const http = require('http');
const server = http.createServer();

server.on('request', function(req, res) {
    fs.readFile('./big', function(err, data) {
        if (err) {
            console.log('error', err);
        }
        res.end(data);
    });
});

server.listen(3000);
