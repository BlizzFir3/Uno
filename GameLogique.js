let socket;

function initSocket() {
  // Remplacez "localhost:3000" par l'adresse IP ou le nom de domaine de votre serveur WebSocket
  socket = new WebSocket("ws://localhost:3000");

  socket.onopen = () => {
    console.log("Connexion WebSocket établie !");
  };

  socket.onmessage = (event) => {
    console.log("Message reçu :", event.data);
    // Ajoutez le traitement de message en fonction de votre application
  };

  socket.onerror = (error) => {
    console.error("Erreur WebSocket :", error);
  };

  socket.onclose = (event) => {
    console.log("Connexion WebSocket fermée :", event.code, event.reason);
  };
}

function sendMessage(message) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(message);
  } else {
    console.error("Connexion WebSocket non ouverte !");
  }
}