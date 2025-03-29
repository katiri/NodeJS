// Imprimindo algo
console.log('Algo');

// Imprimindo mais de uma variável
const a = 10;
const b = 'Texto';
const c = [1, 2];
console.log(a, b, c);

// Interpolar valores
console.log('Texto %s', b);
console.log('a = %s, b = %s e c = %s', a, b, c);
console.log(`a = ${a}, b = ${b} e c = ${c}`);

// Conta quantas vezes algo foi impresso
console.count(`Valor de a: ${a}, Contagem`);
console.count(`Valor de a: ${a}, Contagem`);
console.count(`Valor de a: ${a}, Contagem`);
console.count(`Valor de a: ${a}, Contagem`);

// Limpar o console
setTimeout(() => {
    console.clear();
}, 2000);