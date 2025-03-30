// Como funcionam as execuções de métodos de forma síncrona
const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi');

// Esse console só é executado após a criação do arquivo
console.log('Fim');