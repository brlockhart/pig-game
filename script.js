'use strict';

//Assigning elements to variables
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
let playing = true;
const switchActivePlayer = function () {
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //changing background color based on player
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};
const gameReset = function () {
  playing = true;
  if (activePlayer === 1) {
    switchActivePlayer();
  }
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;
  totalScores = [0, 0];
  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player1Element.classList.remove('player--active');
  player0Element.classList.add('player--active');
};
//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//Dice roll functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //Random dice roll and dice element manipulation
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;
    //Functionality of current score
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      //switching players and resetting values with a roll of 1
      switchActivePlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    totalScores[activePlayer] = totalScores[activePlayer] + currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = totalScores[activePlayer];
    //check for a winner
    if (totalScores[activePlayer] >= 100) {
      playing = false;
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      document.querySelector('.dice').classList.add('hidden');
    } else {
      switchActivePlayer();
    }
  }
});
//reset button functionality
btnNew.addEventListener('click', gameReset);
