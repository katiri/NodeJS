// Módulos são scripts e/ou códigos reaproveitáveis, o equivalente a bibliotecas do Python

// Módulos internos, são aqueles que nós mesmos criamos e utilizamos na nossa aplicação
// É necessário exportar os módulos e e importar onde vamos utilizar
// Instrução module.exports para exportar módulos
// Função require para importar

const moduloInterno = require('./modulo_interno');

console.log(moduloInterno.soma(3, 45));

const soma = moduloInterno.soma;

console.log(soma(2, 3));
console.log(soma(5, -10));
