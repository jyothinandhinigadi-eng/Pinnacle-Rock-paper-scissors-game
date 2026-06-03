const choices = document.querySelectorAll(".choice");
const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const winnerText = document.getElementById("winner");

const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");

const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const playGame = (userChoice) => {
    const computerChoice = computerPlay();

    userChoiceText.textContent = `Your Choice: ${userChoice}`;
    computerChoiceText.textContent = `Computer Choice: ${computerChoice}`;

    if (userChoice === computerChoice) {
        winnerText.textContent = "It's a Draw!";
    }
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        winnerText.textContent = "You Win!";
        userScore++;
    }
    else {
        winnerText.textContent = "Computer Wins!";
        computerScore++;
    }

    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
};

choices.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.getAttribute("data-choice");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    userChoiceText.textContent = "Your Choice:";
    computerChoiceText.textContent = "Computer Choice:";
    winnerText.textContent = "Choose an option!";
});
