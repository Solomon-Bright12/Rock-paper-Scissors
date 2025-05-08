// Choices array
const choices = ['rock', 'paper', 'scissors'];

// Elements
const userChoiceDiv = document.querySelector('.yourChoice');
const computerChoiceDiv = document.querySelector('.computerChoice p');
const resultDiv = document.querySelector('.result');
const resetButton = document.querySelector('button');
const choiceButtons = document.querySelectorAll('.choices button');

// Function to get a random choice for computer
function getRandomChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// Function to determine winner
function determineWinner(user, computer) {
  if (user === computer) return 'It\'s a tie!';
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You Win!';
  } else {
    return 'Computer Wins!';
  }
}

// Add event listeners to buttons
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const userChoice = button.className; // 'rock', 'paper', or 'scissors'
    userChoiceDiv.innerText = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);

    // Show processing message
    computerChoiceDiv.innerText = 'processing...';

    // Random delay to simulate processing
    setTimeout(() => {
      const computerChoice = getRandomChoice();
      computerChoiceDiv.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

      // Determine and show result
      const resultText = determineWinner(userChoice, computerChoice);
      resultDiv.innerText = resultText;
    }, 500);
  });
});

// Reset game button
resetButton.addEventListener('click', () => {
  document.querySelector('.yourChoice').innerText = '';
  document.querySelector('.computerChoice p').innerText = 'processing...';
  document.querySelector('.result').innerText = 'Show result here';
});