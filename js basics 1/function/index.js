const form = document.getElementById('calc-form');
const sumElement = document.getElementById('sum');
const diffElement = document.getElementById('diff');
const prodElement = document.getElementById('prod');
const qouElement = document.getElementById('qou');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);

    const sum = firstNumber + secondNumber;
    const diff = firstNumber - secondNumber;
    const prod = firstNumber * secondNumber;
    const qou = secondNumber !== 0 ? firstNumber / secondNumber : 'undefined';

    sumElement.textContent = sum;
    diffElement.textContent = diff;
    prodElement.textContent = prod;
    qouElement.textContent = qou;
});

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    sumElement.textContent = '';
    diffElement.textContent = '';
    prodElement.textContent = '';
    qouElement.textContent = '';
});