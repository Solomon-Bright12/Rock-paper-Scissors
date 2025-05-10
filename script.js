const sections = document.querySelectorAll(".container");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("fade-in");
      });
    });
    sections.forEach(section => observer.observe(section));

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });

    const choices = ['rock', 'paper', 'scissors'];
    const userChoiceDiv = document.querySelector('.yourChoice');
    const computerChoiceDiv = document.querySelector('.computerChoice p');
    const resultDiv = document.querySelector('.result');
    const choiceButtons = document.querySelectorAll('.choice');
    const resetButton = document.querySelector('.reset-btn');

    function getRandomChoice() {
      return choices[Math.floor(Math.random() * choices.length)];
    }

    function determineWinner(user, computer) {
      if (user === computer) return "It's a tie!";
      const win = (user === 'rock' && computer === 'scissors') ||
                  (user === 'scissors' && computer === 'paper') ||
                  (user === 'paper' && computer === 'rock');
      if (win) {
        launchConfetti();
        return '🎉 You Win 🎉!';
      }
      return 'Computer Wins!';
    }

    choiceButtons.forEach(button => {
      button.addEventListener('click', () => {
        const userChoice = button.dataset.choice;
        userChoiceDiv.innerText = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        computerChoiceDiv.innerText = 'Processing...';
        resultDiv.innerText = '';

        setTimeout(() => {
          const computerChoice = getRandomChoice();
          computerChoiceDiv.innerText = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
          resultDiv.innerText = determineWinner(userChoice, computerChoice);
        }, 500);
      });
    });

    resetButton.addEventListener('click', () => {
      userChoiceDiv.innerText = '';
      computerChoiceDiv.innerText = 'Booting...';
      resultDiv.innerText = '';
    });

    function showTutorial() {
      alert("Click Rock, Paper, or Scissors. The computer picks one too. Whoever wins gets bragging rights. Click Reset to play again.");
    }

    function showDetail() {
      alert("Built with love by Team Beginners to practice coding and teamwork. Enjoy!");
    }

    function launchConfetti() {
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00ff99', '#ffcc00', '#ff66cc', '#66ccff']
      });
    }
