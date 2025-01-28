const display = document.getElementById('display');

function appendToDisplay(input) {
	if (display.value === 'Syntax error') display.value = '';
	display.value += input;
}

function clearDisplay() {
	display.value = '';
}

function calculate() {
	try {
		display.value = eval(display.value);
	} catch (e) {
		display.value = 'Syntax error';
	}
}
