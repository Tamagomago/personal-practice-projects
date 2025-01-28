const gameButtons = document.querySelectorAll('.game-button');
const choiceHeaders = document.querySelectorAll('.choice-header');
const gameResult = document.getElementById('game-result');
const scoreHeaders = document.querySelectorAll('.score-header');

let playerScore = 0;
let computerScore = 0;
let playerChoice = '';

const choiceValues = Array.from(gameButtons).map((button) => button.value);

const getComputerChoice = () =>
	choiceValues[Math.floor(Math.random() * choiceValues.length)];

const choices = (playerChoice, computerChoice) => [
	`PLAYER: ${playerChoice}`,
	`COMPUTER: ${computerChoice}`,
];

const winner = (playerChoice, computerChoice) => {
	if (playerChoice === computerChoice) return 'tie';

	if (playerChoice === 'rock') {
		return computerChoice === 'scissors' ? 'Player' : 'Computer';
	}
	if (playerChoice === 'paper') {
		return computerChoice === 'rock' ? 'Player' : 'Computer';
	}
	if (playerChoice === 'scissors') {
		return computerChoice === 'paper' ? 'Player' : 'Computer';
	}

	return 'Invalid choice';
};

const displayResults = () => {
	const computerChoice = getComputerChoice();
	const [playerText, computerText] = choices(playerChoice, computerChoice);

	choiceHeaders.forEach((choiceHeader, index) => {
		choiceHeader.textContent = index === 0 ? playerText : computerText;
	});

	const gameWinner = winner(playerChoice, computerChoice);

	gameResult.textContent =
		gameWinner === 'tie' ? "It's a tie!" : `${gameWinner} wins!`;

	if (gameWinner === 'Player') {
		playerScore++;
	} else if (gameWinner === 'Computer') {
		computerScore++;
	}
	
	scoreHeaders[0].textContent = `Player Score: ${playerScore}`;
	scoreHeaders[1].textContent = `Computer Score: ${computerScore}`;
};

const getPlayerChoice = () => {
	gameButtons.forEach((button) => {
		button.addEventListener('click', (e) => {
			playerChoice = e.target.value;
			displayResults();
		});
	});
};

getPlayerChoice();
