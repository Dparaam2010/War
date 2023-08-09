// 1. War Game
// 2. Create Deck of cards (must have a total of 52 cards)
// 3. Each Card must have a 'club', 'diamonds', 'hearts', 'spades'
// 4. List of Cards from 'A,2,3,4,5,6,7,8,9,10,J,K,Q'
// .  creat each players cards
// 5. Shuffle the Deck 
// 6. Split Deck into Two Decks to represent player A, player B
// 7. Each player flips a card to see whose card has the higher value
// 8. Which ever player has the higher value wins!
// 9. 
/*----- constants -----*/
//define the Deck class..
class Deck {
  constructor(CARDS) {
    this.CARDS = CARDS;
  }
}


// i used the variable const to creat a array for all my suits and values.
// to created a deck with 52 cards

const CARDS = [ 
    'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','K♣','Q♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','K♦','Q♦',
    'A♥️','2♥️','3♥️','4♥️','5♥️','6♥️','7♥️','8♥️','9♥️','10♥️','J♥️','K♥️','Q♥️',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','K♠','Q♠',
  ]

  // made each card a value
    const CARDVALUES = [{'2':2}, {'3':3}, {'4':4}, {'5':5}, {'6':6},{'7':7},{'8':8},{'9':9},{'10':10},{'J':11},{'Q':12},{'K':13},{'A':14}]
   
    const CARDIMAGES = {
       'A♣' : 'images/clubs/clubs-A.svg',//'2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','K♣','Q♣',
      // 'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','K♦','Q♦',
      // 'A♥️','2♥️','3♥️','4♥️','5♥️','6♥️','7♥️','8♥️','9♥️','10♥️','J♥️','K♥️','Q♥️',
      // 'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','K♠','Q♠',
    }
    


// /*----- state variables -----*/

//defined my variables
let winner, plAScore, plBScore, playerADeck, playerBDeck, turnNum


// /*----- cached elements  -----*/
const plACards = document.querySelector(".pacards");
const plBCards = document.querySelector(".pbcards");
const plAScores = document.querySelector(".pla-score");
const plBScores = document.querySelector(".plab-score");

const messageEl = document.querySelector("h2")

const dealButton = document.getElementById("dealButton");
const playAgnButton = document.getElementById("playAgnButton");


// /*----- event listeners -----*/

dealButton.addEventListener("click", handleDeal);
playAgnButton.addEventListener("click", init);


// /*----- functions -----*/




init();

function init() {
  // split the deck into two decks for Player A and B
  const shuffleDeck = shuffle(CARDS)
  playerADeck = shuffleDeck.slice(0, 26)
  playerBDeck = shuffleDeck.slice(26)
  winner = null;
  plAScore = 0;
  plBScore = 0;
  messageEl.innerText = "PLAYER A VS PLAYER B"
}

function render() {
  // renderBoard()
  renderScore()
  renderControls()
}

// function renderBoard() {

// }

function renderScore() {
  plAScores.innerText = plAScore
  plBScores.innerText = plBScore
}

function renderControls() {
  playAgnButton.style.visibility = winner ? "visable" : "hidden"
}

function handleDeal() {
  if (turnNum === 26) getWinner()
  plACards.style.backgroundImage = CARDIMAGES[playerADeck[turnNum]]
  plBCards.style.backgroundImage = CARDIMAGES[playerBDeck[turnNum]]
  let playerACardVal = CARDVALUES[playerADeck[turnNum]]
  let playerBCardVal = CARDVALUES[playerBDeck[turnNum]]
  compareCards(playerACardVal, playerBCardVal)
  render()
  }

  function compareCards(playerACardVal,playerBCardVal) {
    if (playerACardVal === playerBCardVal) {
      messageEl.innerText = "IT'S WAR"
      turnNum++}
    else if(playerACardVal < playerBCardVal) {
      messageEl.innerText = ""
      plBScore++
      turnNum++}
      else if(playerACardVal > playerBCardVal) {
        messageEl.innerText = ""
        plAScore++
        turnNum++}
  }


  
  



function getWinner() {
  if (plAScore === plBScore){
    messageEl.innerText = "NO WINNER-I'TS A TIE"
  }
  else if(plAScore > plBScore) {
    messageEl.innerText = "PLAYER A WINS"
  }
  else if(plAScore < plBScore) {
    messageEl.innerText = "PLAYER B WINS"
  }
}








// this function will shuffle the deck

function shuffle(arr) {
    const newArray = [...arr]
    const length = newArray.length
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random())
      const randomItem = newArray.splice(randomPosition, 1)
      newArray.push(...randomItem)
    }
    return newArray
  }

