// O Event Emitter se comporta como os eventos do navegador
// Podemos ativar um código em alguns pontos da aplicação, como no inicio
// É um Core Module chamado events
// É preciso instanciar a classe EventEmitter que vem deste módulo e usar seus métodos

const EventEmitter = require('events');
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
    console.log('Durante');
});

console.log('Antes');

eventEmitter.emit('start');

console.log('Depois');

eventEmitter.on('start', () => console.log('Log: Usuário iniciou'));
eventEmitter.on('start', () => console.log('Enviando notificação...'));
eventEmitter.on('start', () => console.log('Salvando no banco de dados...'));

eventEmitter.emit('start');