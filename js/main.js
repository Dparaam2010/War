/*----- constants -----*/
const CARDS = [ 
    'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','K♣','Q♣',
    'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','K♦','Q♦',
    'A♥️','2♥️','3♥️','4♥️','5♥️','6♥️','7♥️','8♥️','9♥️','10♥️','J♥️','K♥️','Q♥️',
    'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','K♠','Q♠',
]


// /*----- state variables -----*/



// /*----- cached elements  -----*/



// /*----- event listeners -----*/


// /*----- functions -----*/
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

