const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Utiliser Helmet pour sécuriser les entêtes HTTP
app.use(helmet());

// Utiliser bodyParser pour analyser le corps des requêtes HTTP
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Définir le chemin vers les fichiers statiques
app.use(express.static(__dirname + '/public'));

// Définir la route principale
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/views/index.html');
});

// Créer une route pour la requête POST du jeu Uno
app.post('/play', (req, res) => {
	// Analyser les données de la requête
	const { card, player } = req.body;

	// Valider les données pour éviter les injections de commandes
	if (!card || !player || typeof card !== 'string' || typeof player !== 'string') {
		res.status(400).send('Requête invalide');
		return;
	}
	// Effectuer l'action de jeu
	// ...

	// Envoyer la réponse
	res.send('Action effectuée avec succès');
});

// Démarrer le serveur
http.listen(3000, () => {
	console.log('Serveur démarré sur le port 3000');
});

//Gére les connexion et déconnexion des utilisateurs, socket.io
io.on('connection', (socket) => {
	console.log('a user connected');
  
	socket.on('disconnect', () => {
	  console.log('user disconnected');
	});
  });

  //Envoie un message à tous les clients connectés
  io.emit('message', 'Hello from the server!');

  //Recevoir des messages depuis le client
  io.on('message', (data) => {
	console.log(`Received message from client: ${data}`);
  });
  
  function createUnoDeck() {
	const colors = ['red', 'green', 'blue', 'yellow'];
	const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'draw-two', 'skip', 'reverse'];
	const wilds = ['wild', 'wild-draw-four'];
	
	let deck = [];
	
	// Create cards for each color and value
	for (let color of colors) {
	  for (let value of values) {
		deck.push({ color, value });
		if (value !== '0') {
		  deck.push({ color, value });
		}
	  }
	}
	
	// Create wild cards
	for (let wild of wilds) {
	  for (let i = 0; i < 4; i++) {
		deck.push({ color: 'wild', value: wild });
	  }
	}
	
	// Shuffle the deck
	for (let i = deck.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  [deck[i], deck[j]] = [deck[j], deck[i]];
	}
	
	return deck;
  }
  