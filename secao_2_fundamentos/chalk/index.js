// Chalk é um modulo externo que melhora a visualização de coisas no terminal

const chalk = require('chalk');

const nota = 9;

console.log(chalk.yellow("Vamos analisar sua nota"));

if(nota >= 7){
    console.log(chalk.green.bold("Parabéns você está aprovado!"));
}
else{
    console.log(chalk.bgRed.black("Você precisa de recuperação!"));
}