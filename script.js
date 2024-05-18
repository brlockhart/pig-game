'use strict';

//Assigning elements to variables
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('btn--new');
const btnHold = document.querySelector('btn--hold');
let currentScore = 0;
//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

//Dice roll functionality
btnRoll.addEventListener('click', function () {
  //Random dice roll and dice element manipulation
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;
  //Functionality of current score
  if (dice !== 1) {
    currentScore = currentScore + dice;
    currentScore0.textContent = currentScore;
  } else {
  }
});
