// Créer un objet WebSocket pour se connecter à l'application VB.Net
const socket = new WebSocket("ws://localhost:1234");

// Écouter les événements de la socket
socket.addEventListener('open', (event) => {
  console.log("Connecté à l'application VB.Net");
  
  // Envoyer des données à l'application VB.Net
  socket.send("Bonjour, application VB.Net !");
});

socket.addEventListener('message', (event) => {
  // Recevoir des données de l'application VB.Net
  console.log("Message reçu de l'application VB.Net : " + event.data);
});

socket.addEventListener('close', (event) => {
  console.log("Déconnecté de l'application VB.Net");
});

socket.addEventListener('error', (error) => {
  console.log("Erreur de la socket : " + error);
});
