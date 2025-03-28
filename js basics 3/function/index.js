
const form = document.getElementById('form-3');
const numInput = document.getElementById('num');
const resultContainer = document.querySelector('.result-container');
const dNumbers = document.getElementById('dNumbers');
const dSum = document.getElementById('dSum');
const dHighest = document.getElementById('dHighest');
const dLowest = document.getElementById('dLowest');

let numbers = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num = parseFloat(numInput.value);

    if (!isNaN(num)) {
        numbers.push(num);

        updateResultContainer();
    }

    numInput.value = '';
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    numbers = [];

    if(numbers.length === 0) {
        numInput.value = '';
    }

    updateResultContainer();
});

function updateResultContainer() {
    dNumbers.textContent = numbers.join('\n');

    if (numbers.length > 0) {
        dSum.textContent = numbers.reduce((a, b) => a + b, 0);
        dHighest.textContent = Math.max(...numbers);
        dLowest.textContent = Math.min(...numbers);
    } else {
        dSum.textContent = '';
        dHighest.textContent = '';
        dLowest.textContent = '';
    }
}