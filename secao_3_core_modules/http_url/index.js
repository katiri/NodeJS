// Usando os Core Modules http e url juntos

const http = require('http');

const port = 3000;

const server = http.createServer((request, response) => {
    const urlInfo = require('url').parse(request.url, true);

    const name = urlInfo.query.name;

    if(!name){
        response.end(
            '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"><input type="submit" value="Enviar"></form>'
        );
    }
    else{
        response.end(
            `<h1>Seja bem vindo ${name}`
        );
    }

    response.end()
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});