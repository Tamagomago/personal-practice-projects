// Temperature Converter

const valueTextBox = document.getElementById('value');
const toFahrenheitRadio = document.getElementById('to-fahrenheit');
const toCelsiusRadio = document.getElementById('to-celsius');
const resultText = document.getElementById('result');

function convert() {
	const value = valueTextBox.value.trim();

	if (value === '') {
		resultText.textContent = 'Please enter a temperature value first.';
		return;
	}

	const numericValue = Number(value);

	if (toFahrenheitRadio.checked) {
		resultText.textContent =
			((numericValue * 9) / 5 + 32).toFixed(1) + ' °F';
	} else if (toCelsiusRadio.checked) {
		resultText.textContent =
			(((numericValue - 32) * 5) / 9).toFixed(1) + ' °C';
	} else {
		resultText.textContent = 'Please select an option first.';
	}
}
