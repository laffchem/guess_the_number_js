'use strict';
// Generate the number
const genNumber = () => {
  return Math.floor(Math.random() * 20 + 1);
};
// Assign number to variable
let secretNumber = genNumber();
console.log(secretNumber);

let scoreCount = 20;

// Game logic for the check button.

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (scoreCount === 1 && guess != secretNumber) {
    document.body.style.backgroundColor = '#f03e3e';
    scoreCount = 0;
    document.querySelector('.score').textContent = '0';
    document.querySelector('.message').textContent = 'You Lose! Try again!';
  } else if (guess === secretNumber && scoreCount > 0) {
    document.querySelector('.message').textContent = 'You Win!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
  } else if (guess < secretNumber && scoreCount > 0) {
    scoreCount--;
    document.querySelector('.message').textContent = 'Too low!';
    document.querySelector('.score').textContent = String(scoreCount);
  } else if (guess > secretNumber && scoreCount > 0) {
    scoreCount--;
    document.querySelector('.message').textContent = 'Too high!';
    document.querySelector('.score').textContent = String(scoreCount);
  }
});

// Logic for the again button.

document.querySelector('.again').addEventListener('click', () => {
  let highScore = document.querySelector('.highscore').textContent;
  //   Reset everything except the high score.
  if (scoreCount > highScore) {
    highScore = scoreCount;
  }
  document.body.style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';

  document.querySelector('.score').textContent = 20;
  scoreCount = 20;
  secretNumber = genNumber();
  return console.log(secretNumber), scoreCount;
});
