// Como retornar HTML com em um servidor gerado pelo Core Module http

const http = require('http');

const port = 3000

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end('<h1>Olá Mundo!</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});