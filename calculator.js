// -------------------------
// 1. Arithmetic functions
// -------------------------
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// -------------------------
// 2. Grab HTML elements
// -------------------------
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const resultDisplay = document.getElementById('calculation-result');

const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

// -------------------------
// 3. Event listeners
// -------------------------

addBtn.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = add(number1, number2);
    resultDisplay.textContent = result;
});

subtractBtn.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = subtract(number1, number2);
    resultDisplay.textContent = result;
});

multiplyBtn.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = multiply(number1, number2);
    resultDisplay.textContent = result;
});

divideBtn.addEventListener('click', function() {
    const number1 = parseFloat(number1Input.value) || 0;
    const number2 = parseFloat(number2Input.value) || 0;
    const result = divide(number1, number2);
    resultDisplay.textContent = result;
});
