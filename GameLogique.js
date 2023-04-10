function openForm() {
	document.getElementById("popupForm").style.display = "block";
  }

function closeForm() {
	document.getElementById("popupForm").style.display = "none";
  }

function openFormu() {
  document.getElementById("popupFormu").style.display = "block";
  }
  
function closeFormu() {
  document.getElementById("popupFormu").style.display = "none";
  }

  console.clear();

  const DECK = [
  "0r", "0y", "0b", "0g", 
  "1r", "1r", "1y", "1y", "1b", "1b", "1g", "1g", 
  "2r", "2r", "2y", "2y", "2b", "2b", "2g", "2g",  
  "3r", "3r", "3y", "3y", "3b", "3b", "3g", "3g", 
  "4r", "4r", "4y", "4y", "4b", "4b", "4g", "4g", 
  "5r", "5r", "5y", "5y", "5b", "5b", "5g", "5g", 
  "6r", "6r", "6y", "6y", "6b", "6b", "6g", "6g", 
  "7r", "7r", "7y", "7y", "7b", "7b", "7g", "7g", 
  "8r", "8r", "8y", "8y", "8b", "8b", "8g", "8g", 
  "9r", "9r", "9y", "9y", "9b", "9b", "9g", "9g", 
  "+2r", "+2r", "+2y", "+2y", "+2b", "+2b", "+2g", "+2g", 
  "sr", "sr", "sy", "sy", "sb", "sb", "sg", "sg", 
  "rr", "rr", "ry", "ry", "rb", "rb", "rg", "rg", 
  "w", "w", "w", "w",
  "+4", "+4", "+4", "+4" 
  ];
  
  let availableCards = DECK;
  let drawPileCards = [];
  let discardPileCards = [];
  
  function createHand(handSize = 7) {
    let hand = [];
    for (let i = 0; i < handSize; i++) {if (window.CP.shouldStopExecution(0)) break;
      let cardIndex = Math.floor(Math.random() * availableCards.length);
      let card = availableCards.splice(cardIndex, 1)[0];
      hand.push(card);
    }window.CP.exitedLoop(0);
    return hand;
  }

const players = [
  { name: "Alice", score: 10 },
  { name: "Bob", score: 5 },
  { name: "Charlie", score: 15 },
  { name: "David", score: 8 },
];


function sortPlayersByScoreDesc(players) {
  return players.sort((a, b) => b.score - a.score);
}

function showRankingPopup() {
  const sortedPlayers = sortPlayersByScoreDesc(players);

  const popupContent = document.createElement("div");
  popupContent.innerHTML = "<h2>Classement</h2>";
  const rankingList = document.createElement("ul");
  sortedPlayers.forEach((player, index) => {
    const li = document.createElement("li");
    li.textContent = `${index+1}. ${player.name} (${player.score} points)`;
    rankingList.appendChild(li);
  });
  popupContent.appendChild(rankingList);

  
  const popup = window.open("", "rankingPopup", "width=400,height=400");
  popup.document.body.appendChild(popupContent);
}

function showEndGame() {
  const endGame = document.getElementById("end-game");
  const scoreSpan = document.getElementById("score");
  const score = 42; 
  scoreSpan.textContent = score;
  endGame.style.display = "block";

const showRankingBtn = document.getElementById("show-ranking-btn");
showRankingBtn.addEventListener("click", showRankingPopup);
}


function LoadUnoGame(){
  window.location.href = "Jeu.html";
}

window.addEventListener("load", function() {
  for (let i = 0; i < 10; i++) {
    let playerMain = document.getElementsByClassName("player_hand")[0];
    let carte = new Card();
    let randomCol =  GetRandomCardColor();
    carte.AddInto(playerMain,randomCol,2.2);
  }
});

function GetRandomCardColor(){
  var colors = ["red", "green", "blue", "yellow"];
  var randomIndex = RandomValue(0, colors.length - 1);
  return colors[randomIndex];
}
function RandomValue(min, max ){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Card {
  AddInto(parent, color,decalage) {
    let codeToAdd = "";
    let elements = parent.querySelectorAll(".card");
    let count = elements.length;
    codeToAdd = `<div class="card" id="` + count +`" onclick="MoveCardToPile(this)">
    <div class="bckg"></div>
    </div>`;
    parent.innerHTML += codeToAdd;
    let MaCarte = document.getElementById("" + count);
    MaCarte.style.color = color;
    MaCarte.style.position = "absolute";
    MaCarte.style.left = `${decalage * count}em`;
    let MaCarteBckg = MaCarte.querySelector(".bckg");
    MaCarteBckg.style.backgroundColor = color;
  }

  
}

function GetCardFromPioche() {
  const pioche = document.getElementById("card turned top-card");
  let playerMain = document.getElementsByClassName("player_hand")[0];
  let carte = new Card();
  let randomColor = GetRandomCardColor();
  carte.AddInto(playerMain, randomColor,2.2);
}


function MoveCardToPile(carte){
  const pile = document.getElementById("discard_pile");
  const rect1 = carte.getBoundingClientRect();
  const rect2 = pile.getBoundingClientRect();
  carte.style.position = "absolute";
  carte.style.left = `${0}em`;
  carte.style.transition = "transform 0.5s ease-in-out";
  carte.style.zIndex = "99"; // Met la carte d'origine sous la nouvelle carte
  carte.style.transform = `translate(${rect2.left - rect1.left}px, ${rect2.top - rect1.top}px)`;
  
  setTimeout(() => {
    const nouvelleCarte = carte.cloneNode(true);
    nouvelleCarte.style.zIndex = "100"; // Met la nouvelle carte au premier plan
    pile.appendChild(nouvelleCarte);
    nouvelleCarte.style.transition = "";
    nouvelleCarte.style.transform = "";
    carte.parentNode.removeChild(carte);
  }, 500);
  
  
}

