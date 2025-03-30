// Formas de evidênciar erros no programa
// try catch - Ao pegar um erro dentro do try, executa o que estiver em catch

const x = 10;

try {
    x = 2; // Isso não pode ser feito pois o x é um const
}
catch (err){
    console.log(`Erro: ${err}`);
}

// Se eu não tiver o try catch o programa encerra
x = 2;