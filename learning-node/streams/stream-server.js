const fs = require('fs');

const http = require('http');
const server = http.createServer();

server.on('request', function(req, res) {
    const src = fs.createReadStream('./big');
    src.pipe(res);
});

server.listen(3000);
