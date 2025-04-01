// O Core Module é usado para criar servidores HTTP com o Node e rodar arquivos HTML, fazer requisições etc

const http = require('http');

const port = 3000
const server = http.createServer((request, response) => {
    response.write('Oi mundo!');
    response.end()
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});