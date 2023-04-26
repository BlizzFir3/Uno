// Importer la bibliothèque socket.io-client
const io = require('socket.io-client');

// Connectez-vous au serveur via socket.io
const socket = io('http://localhost:3000');

// Envoyer un message au serveur via socket.io
socket.emit('message',
    `Hello from the client!`);

// Recevoir des messages du serveur via socket.io
socket.on('message', (data) => {
  console.log(`Received message from server: ${data}`);
});
