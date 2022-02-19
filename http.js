const http = require('http');

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection !')
})

server.listen(3000);

console.log('Listening On Port 3000...')