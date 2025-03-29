// externo
const minimist = require('minimist');

// interno
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2));

const a = parseInt(args['a']);
const b = parseInt(args['b']);

// node index.js --a=3 --b=7
console.log(soma(a, b));