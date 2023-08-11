 
/*----- constants -----*/
console.log('test')


// i used the variable const to creat a array for all my suits and faces.
const RANK = [ 
  'A','02','03','04','05','06','07','08','09','10','J','K','Q',
]

const SUITS = ['diamonds','hearts','clubs','spades']

// /*----- state variables -----*/

//defined my variables
let winner, plAScore, plBScore, playerADeck, playerBDeck, turnNum, pACard, pBCard

const DECK = []

// /*----- cached elements  -----*/
const playeracard = document.querySelector(".playeracard");
const playerbcard = document.querySelector(".playerbcard");
const plAScores = document.getElementById("pla-score");
const plBScores = document.getElementById("plab-score");

const messageEl = document.querySelector("h2")

const dealButton = document.getElementById("dealButton");
const playAgnButton = document.getElementById("playAgnButton");


// /*----- event listeners -----*/

dealButton.addEventListener("click", handleDeal);
playAgnButton.addEventListener("click", init);


// /*----- functions -----*/

init();


function init() {
  if (DECK.length !== 52) {
    generateDeck()

  }
  // split the deck into two decks for Player A and B
  console.log(DECK)
  const shuffleDeck = shuffle(DECK)
  playerADeck = shuffleDeck.slice(0, 26)
  playerBDeck = shuffleDeck.slice(26)
  winner = null;
  turnNum = 0;
  plAScore = 0;
  plBScore = 0;
}
  
  function render() {
    renderBoard()
    renderScore()
  }

  function renderBoard() {
  
    playeracard.style.backgroundImage = `url(css/card-library/images/${pACard.suit}/${pACard.suit}-${pACard.rank}.svg)`
    playerbcard.style.backgroundImage = `url(css/card-library/images/${pBCard.suit}/${pBCard.suit}-${pBCard.rank}.svg)`
  }
  
  function renderScore() {
    plAScores.innerText = plAScore
    plBScores.innerText = plBScore
  }
  
  //if we get to 26 that = getWinner
  function handleDeal() {
    if (turnNum === 26) {
      getWinner()
    }
     pACard = playerADeck[turnNum]
     pBCard = playerBDeck[turnNum]
  compareCards(pACard.value, pBCard.value)
  render()
}

//if playerA is === to player B than it is war, other wise if player A is less than player B then increase playerB by one, otherwise if 
//player A is greater than player B than player A incease by 1
function compareCards(pACard,pBCard) {
  if (pACard === pBCard) {
    messageEl.innerText = "IT'S WAR"
    turnNum++}
    else if(pACard < pBCard) {
      messageEl.innerText = ""
      plBScore++
      turnNum++}
      else if(pACard > pBCard) {
        messageEl.innerText = ""
        plAScore++
        turnNum++}
      }
      function generateDeck() {
        SUITS.forEach(s=>{
          RANK.forEach(r=>{
            if(r <= 10) {
              DECK.push({
                suit: `${s}`,
                rank: `r${r}`,
                value: Number(r)}) }
              else if(r === 'J') {
                DECK.push({
                  suit: `${s}`,
                  rank: `${r}`,
                  value: 11})}
                else if(r === 'Q'){
               DECK.push({
                suit: `${s}`,
                rank: `${r}`,
                value: 12})}
                else if (r === 'K'){
                  DECK.push({
                    suit: `${s}`,
                    rank: `${r}`,
                    value: 13})}
                else if (r ==='A'){
                    DECK.push({
                      suit: `${s}`,
                      rank: `${r}`,
                      value: 14})}})
        })
      }
 
// if player A's score === player B's score there's no Winner, other wise if player A greater than player B than Player A win's
// other wise if player A's score is less than player B's score than player B wins
function getWinner() {
  if (plAScore === plBScore){
    messageEl.innerText = "NO WINNER-I'TS A TIE"
    winner = "T"
  }
  else if(plAScore > plBScore) {
    messageEl.innerText = "PLAYER A WINS"
    winner = "A"
  }
  else if(plAScore < plBScore) {
    messageEl.innerText = "PLAYER B WINS"
    winner = "B"
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


