 
/*----- constants -----*/
console.log('test')


// i used the variable const to creat a array for all my suits and faces.
const FACES = [ 
  'A','02','03','04','05','06','07','08','09','10','J','K','Q',
]

const SUITS = ['d','h','c','s']


// /*----- state variables -----*/

//defined my variables
let winner, plAScore, plBScore, playerADeck, playerBDeck, turnNum, playerACardVal, playerBCardVal

const DECK = []

// /*----- cached elements  -----*/
const cardc06 = document.querySelector(".card c06");
const cardd09 = document.querySelector(".card d09");
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

function generateDeck() {
  SUITS.forEach(s=>{
    FACES.forEach(f=>{
      DECK.push(
        {face:s+f}
      )
    })
  })
}

function init() {
  // split the deck into two decks for Player A and B
  generateDeck()
  console.log(DECK)
  const shuffleDeck = shuffle(DECK)
  playerADeck = shuffleDeck.slice(0, 26)
  playerBDeck = shuffleDeck.slice(26)
  winner = null;
  plAScore = 0;
  plBScore = 0;
  // messageEl.innerText = "PLAYER A VS PLAYER B "

}

function render() {
  // renderBoard()
  renderScore()
  renderControls()
}

function renderScore() {
  plAScores.innerText = plAScore
  plBScores.innerText = plBScore
}
//Ternary Operator
function renderControls() {
  playAgnButton.style.visibility = winner ? "visable" : "hidden"
}
//if we get to 26 that = getWinner
function handleDeal() {
  if (turnNum === 26) getWinner()
  // plACards.style.backgroundImage = CARDIMAGES[playerADeck[turnNum]]
  // plBCards.style.backgroundImage = CARDIMAGES[playerBDeck[turnNum]]
  let playerACardVal = DECK[playerADeck[turnNum]]
  let cardd09Val = DECK[playerBDeck[turnNum]]
  compareCards(cardc06, cardc06Val)
  render()
  }
//if playerA is === to player B that its war, other wise if player A is less than player B then increase playerB by one, otherwise if 
//player A is greater than player B than player A incease by 1
  function compareCards(cardc06,cardd09Val) {
    if (cardc06Val === cardd09Val) {
      messageEl.innerText = "IT'S WAR"
      turnNum++}
    else if(cardc06Val < cardd09Val) {
      messageEl.innerText = ""
      plBScore++
      turnNum++}
      else if(cardc06Val > cardd09Val) {
        messageEl.innerText = ""
        plAScore++
        turnNum++}
  }


  
  


// if player A's score === player B's score there's no Winner, other wise if player A greater than player B than Player A win's
// other wise if player A's score is less than player B's score than player B wins
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

