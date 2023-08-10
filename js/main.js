 
/*----- constants -----*/
console.log('test')


// i used the variable const to creat a array for all my suits and faces.
const RANK = [ 
  'A','02','03','04','05','06','07','08','09','10','J','K','Q',
]

const SUITS = ['d','h','c','s']

const FACEVALUES = {'A' : 1,'J' : 11,'Q' : 12,'K' : 13,}


// /*----- state variables -----*/

//defined my variables
let winner, plAScore, plBScore, playerADeck, playerBDeck, turnNum, playerACardVal, playerBCardVal

const DECK = []

// /*----- cached elements  -----*/
const cardc06 = document.querySelector(".cardc06");
const cardd09 = document.querySelector(".cardd09");
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
  plAScore = 0;
  plBScore = 0;
  messageEl.innerText = "PLAYER A VS PLAYER B "
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
    let cardc06 = playerADeck[turnNum]
    let cardd09 = playerBDeck[turnNum]
  compareCards(cardc06.value, cardd09.value)
  render()
}
//DECK[0].face
//if playerA is === to player B that its war, other wise if player A is less than player B then increase playerB by one, otherwise if 
//player A is greater than player B than player A incease by 1
function compareCards(cardc06Val,cardc09Val) {
  if (cardc06Val === cardc09Val) {
    messageEl.innerText = "IT'S WAR"
    turnNum++}
    else if(cardc06Val < cardc09Val) {
      messageEl.innerText = ""
      plBScore++
      turnNum++}
      else if(cardc06Val > cardc09Val) {
        messageEl.innerText = ""
        plAScore++
        turnNum++}
      }
      function generateDeck() {
        SUITS.forEach(s=>{
          RANK.forEach(r=>{
            if(r <= 10) {
              DECK.push({
                face: `${s}${r}`,
                value: Number(r)}) }
              else if(RANK === 'J') {
                DECK.push({
                  face: `${s}${r}`,
                  value: 11})}
                else if(RANK === 'Q'){
               DECK.push({
                face: `${s}${r}`,
                value: 12})}
                else if (RANK === 'K'){
                  DECK.push({
                    face: `${s}${r}`,
                    value: 13})}
                else if (RANK ==='A'){
                    DECK.push({
                      face: `${s}${r}`,
                      value: 14})}})
        })
      }

      // A of diamonds
      // {
      //   face: 'dA'
      //   value: 14
      // }
      // 2 of diamonds
      // {
      //   face: 'd02'
      //   value: 2
      // }
      // 3 of diamonds
      // {
      //   face: 'd03'
      //   value: 3
      // }
      // 4 of diamonds
      //   {
      //   face: 'd04'
      //   value: 4
      // }
      // 5 of diamonds
      // {
      //   face: 'd05'
      //   value: 5
      // }

   
     
      
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


