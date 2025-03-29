// Módulos externos são módulos criados por outras pessoas e que podem ser instalados na sua aplicação por meio do npm (Equivalente ao pip do python)

// É preciso rodar um npm init
// Será criado um arquivo chamado package.json que vai mapear e organizar os módulos instalados e suas versões

// Para instalar um módulo: npm install <nome_do_modulo>
// Será criada uma pasta node_modules onde os módulos ficam instalados

// Testando módulo minimist (npm install minimist)

const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args)

const nome = args['nome'];
const cargo = args['cargo'];

console.log(nome, cargo);
console.log(`Meu nome é ${nome}, e sou ${cargo}`);
