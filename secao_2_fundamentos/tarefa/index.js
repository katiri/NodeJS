// 1. Crie um novo projeto que aceite pacotes externos
// 2. Instale o inquirer@8.1.2 e o chalk@4.1.2
// 3. Utilize o inquirer para receber o nome e a idade do usuário
// 4. Apresente esta resposta com uma cor de fundo amarela e texto preto
// 5. Dica: Você pode utilizar bgYellow e black
// 6. Insira um tratamento para um possível erro do inquirer com catch

const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual o seu nome?',
    },
    {
        name: 'idade',
        message: 'Qual a sua idade?',
    },
]).then((answers) => {
    if(!answers.nome || !answers.idade){
        throw new Error('O nome e a idade são obrigatórios!');
    }

    console.log(chalk.bgYellow.black(`Seu nome é ${answers.nome} e você tem ${answers.idade} anos`));
}).catch(
    err => console.log(err)
);