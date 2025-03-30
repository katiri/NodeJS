// Como funcionam as execuções de métodos de forma assíncrona

const fs = require('fs');

console.log('Início');

fs.writeFile('arquivo_async.txt', 'oi', function (err){
    setTimeout(function (){
        console.log('Arquivo criado!');
    }, 1000);
});

// Esse console é executando mesmo que o arquivo ainda não tenha sido criado
console.log('Fim');