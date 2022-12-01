'use strict';
// Generate the number
const genNumber = () => {
  return Math.trunc(Math.random() * 20 + 1);
};
// Assign number to variable
let secretNumber = genNumber();
console.log(secretNumber);

let scoreCount = 20;

const displayMessage = message => {
  return (document.querySelector('.message').textContent = message);
};

const changeBackground = color => {
  return (document.body.style.backgroundColor = color);
};
// Restart the game
const restartGame = () => {
  return (
    changeBackground('#222'),
    displayMessage('Start guessing...'),
    (document.querySelector('.guess').value = ''),
    (document.querySelector('.score').textContent = 20),
    (scoreCount = 20)
  );
};
// Game logic for the check button.

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No number!');
  } else if (scoreCount === 1 && guess != secretNumber) {
    changeBackground('#f03e3e');
    scoreCount = 0;
    document.querySelector('.score').textContent = '0';
    displayMessage('You Lose! Try again!');
  } else if (guess === secretNumber && scoreCount > 0) {
    displayMessage('You Win!');
    changeBackground('#60b347');
    document.querySelector('.highscore').textContent =
      document.querySelector('.score').textContent;
  } else if (guess < secretNumber && scoreCount > 0) {
    scoreCount--;
    displayMessage('Too low!');
    document.querySelector('.score').textContent = String(scoreCount);
  } else if (guess > secretNumber && scoreCount > 0) {
    scoreCount--;
    displayMessage('Too high!');
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
  restartGame();
  secretNumber = genNumber();
  return console.log(secretNumber), scoreCount;
});
