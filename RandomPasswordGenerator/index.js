const passwordLength = document.getElementById('password-length');
const includeLowercase = document.getElementById('include-lowercase');
const includeUppercase = document.getElementById('include-uppercase');
const includeSymbols = document.getElementById('include-symbols');
const includeNumbers = document.getElementById('include-numbers');
const results = document.getElementById('results-text');

const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = "!@#$%^&*()-_=+[]{}|;:',.<>?/";

function generatePassword() {
	results.innerHTML = ''; // Clear previous texts
	if (!validatePasswordLength()) {
		results.textContent = 'Invalid password length';
		return;
	}
	const passwordLengthValue = Number(passwordLength.value);
	let password = '';
	const allowedChars = fetchAllowedChars();
	if (allowedChars === '') {
		results.textContent = 'Select at least one password config';
		return;
	}
	for (let i = 0; i < passwordLengthValue; i++) {
		password += generateRandomChar(allowedChars);
	}
	results.textContent = 'Password: ' + password;
}

function validatePasswordLength() {
	return !(isNaN(passwordLength.value) || passwordLength.value === '');
}

function fetchAllowedChars() {
	let allowedChars = '';
	allowedChars += includeLowercase.checked ? lowercaseLetters : '';
	allowedChars += includeUppercase.checked ? uppercaseLetters : '';
	allowedChars += includeSymbols.checked ? symbols : '';
	allowedChars += includeNumbers.checked ? numbers : '';
	return allowedChars;
}

function generateRandomChar(allowedChars) {
	return allowedChars[Math.floor(Math.random() * allowedChars.length)];
}
