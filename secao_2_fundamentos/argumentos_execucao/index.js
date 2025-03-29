// O Node permite o envio de argumentos via linha de comando ao executar um arquivo

// Os argumentos ficam em um array chamado process.argv que pode passar por um loop para recuperarmos os valores

console.log(process.argv);

// Os argumentos enviados aparecem da 3 posição em diante, as duas primeiras mostram o arquivo node.exe e o arquivo sendo executado

console.log(process.argv[2]);

const args = process.argv.slice(2);
console.log(args);
console.log(args[0]);