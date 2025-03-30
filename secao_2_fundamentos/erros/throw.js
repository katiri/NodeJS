// Formas de evidênciar erros no programa
// throw - Esse método interrompe o programa

const x = '10';

// Checar se x é um número
if(!Number.isInteger(x)){
    throw new Error('X não é um número inteiro');
}

console.log('Continuando o código');