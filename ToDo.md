# BASE
	- Créer les différentes pages (acceuil, lobby (créer), lobby (rejoindre) jeu et classement) HTML
	- Les reliés correctement (Si clique sur tel bouton -> tel page, etc...)
	- CSS pour donner un minimum de gueule au début (plus tard je fais une master classe, est-ce que c'est bon pour vous ?)
	- 
	
# Cartes + phase de jeu UX
	- Créer le deck (la pioche, liste des cartes)
	- Créer la pile de carte
	- Créer la main des joueurs
	- Faire en sorte de pouvoir transférer de la pioche à la main puis de la main à la pile
	- Faire en sorte de pouvoir poser uniquement si la dernière carte posé et celle choisit par le joueur sont compatible
	- Grisé les cartes qui sont pas posables
	- Bouton de fin de tour (et temps?)
	- Grisé les cartes de la main du joueur quand pas son tour
	- Bouton UNO et Contre UNO

# Lobby + Acceuil UX
	- Bouton pour commencer une partie, 2 boutons : Créer et rejoindre
		Si Créer:
			- Choix du pseudo
			- Choix d'un avatar (créer des avatar)
			- Bouton valider
				- Vu des joueurs dans le lobby, leur pseudo et leur avatar
				- Bouton pour copier le lien et/ou le code d'invitation
				- Bouton lancer la partie
		Si rejoindre:
			- Entrez code d'invitation
			- Bouton valider
				- Choix du pseudo
				- Choix d'un avatar (créer des avatar) Avatar = relou, faire génération automatique
				- Bouton valider
					- Vu des joueurs dans le lobby, leur pseudo et leur avatar
					- Bouton pour copier le lien et/ou le code d'invitation
					- Bouton lancer la partie


					Du plus gros au plus petit ou l'inverse
					Se renseigner sur les sockets (socket.io)