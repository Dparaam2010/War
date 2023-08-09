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
    
    


// /*----- state variables -----*/

//defined my variables
let winner, plAScore, plBScore; playerADeck, playerBDeck;








// /*----- cached elements  -----*/
const plACards = document.querySelector(".pacards");
const plBCards = document.querySelector(".pbcards");
const plAScores = document.querySelector(".pla-score");
const plBScores = document.querySelector(".plab-score");


// /*----- event listeners -----*/



// /*----- functions -----*/




initialize();

function playGame() {

}






// split the deck into two decks for Player A and B
function initialize() {
  const shuffleDeck = shuffle(CARDS)
  playerADeck = shuffleDeck.slice(0, 26)
  playerBDeck = shuffleDeck.slice(26)

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

