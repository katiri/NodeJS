// Neste arquivo iremos usar o módulo File System, usado na manipulação de arquivos e pastas com o NodeJS

const fs = require('fs'); // File System

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if(err){
        console.log(err);
    }
    else{    
        console.log(data);
    }
});