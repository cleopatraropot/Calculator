let currentInput = '';
let previousInput = '';
let operator = null;
let resultDisplayed = false;

function updateDisplay(value) {
    const display = document.getElementById('display');
    display.innerText = value;
}

function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = '';
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay(currentInput);
}

function operate(selectedOperator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = selectedOperator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case 'add':
            result = prev + current;
            break;
        case 'subtract':
            result = prev - current;
            break;
        case 'multiply':
            result = prev * current;
            break;
        case 'divide':
            result = prev / current;
            break;
        default:
            return;
    }

    updateDisplay(result);
    currentInput = result.toString();
    previousInput = '';
    operator = null;
    resultDisplayed = true;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    resultDisplayed = false;
    updateDisplay('0');
}
