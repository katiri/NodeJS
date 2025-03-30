// Usando o módulo externo inquirer para melhorar o input de dados durante a execução do programa

const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?',
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?',
    },
]).then((answers) => {
    console.log(answers);
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2;

    console.log(`A média das notas é ${media}`);
}).catch(err => console.log(err));