const diceRolls = document.getElementById('dice-rolls');
const result = document.getElementById('result');
const diceImgContainer = document.getElementById('dice-images-container');

function rollDice() {
	diceImgContainer.innerHTML = ''; // Clear previous images;
	const diceRollsValue = validateDiceRolls();

	for (let i = 0; i < diceRollsValue; i++) {
		const diceFace = document.createElement('img');
		diceFace.src = generateRandomDiceFace();
		diceImgContainer.appendChild(diceFace);
	}
}

function generateRandomDiceFace() {
	const randomNum = Math.floor(Math.random() * 6); // Generate numbers from 1 to 6
	const imageURLs = [
		'assets/dice-six-faces-one.png',
		'assets/dice-six-faces-two.png',
		'assets/dice-six-faces-three.png',
		'assets/dice-six-faces-four.png',
		'assets/dice-six-faces-five.png',
		'assets/dice-six-faces-six.png',
	];

	return imageURLs[randomNum];
}

function validateDiceRolls() {
	if (!diceRolls.value || isNaN(Number(diceRolls.value))) {
		result.textContent = 'Please enter a valid number.';
		return;
	}

	const diceRollsValue = Number(diceRolls.value);

	if (diceRollsValue < 1 || diceRollsValue > 20) {
		result.textContent = 'Valid range is 1 - 20 only. Try again.';
		return;
	}

	if (!Number.isInteger(diceRollsValue)) {
		result.textContent = 'Please enter a whole number (no decimals).';
		return;
	}

	return diceRollsValue;
}
