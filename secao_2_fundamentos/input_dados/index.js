// Solicitando entrada de dados do usuário com o módulo readline

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual a sua linguagem de preferida?\n', (language) => {
    console.log(`A minha linguagem preferida é: ${language}`);
    readline.close();
});
