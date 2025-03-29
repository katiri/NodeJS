// Core Modules são módulos que já vem com o Node, sem necessidade de serem criados ou instalados

// Exemplo com o Core Module path
const path = require('path');

const extension = path.extname('arquivo.php');

console.log(extension);
