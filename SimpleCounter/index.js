// Counter Program

const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');
const countLabel = document.getElementById('current-count');
let count = Number(countLabel.textContent);

decreaseBtn.onclick = function () {
	count--;
	countLabel.textContent = count;
};

resetBtn.onclick = function () {
	count = 0;
	countLabel.textContent = count;
};

increaseBtn.onclick = function () {
	count++;
	countLabel.textContent = count;
};
