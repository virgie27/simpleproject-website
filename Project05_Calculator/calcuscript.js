let display = document.getElementById('display');

document.addEventListener('keydown', function(event) {
    handleKeyPress(event.key);
});

function handleKeyPress(key) {
    if (key >= '0' && key <= '9') {
        appendValue(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendValue(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        clearLastCharacter();
    } else if (key === '.') {
        appendDecimal();
    } else if (key === '%') {
        appendValue('%');
    } else if (key === 's') {
        toggleSign();
    }
}

function appendValue(value) {
    display.value += value;
}

function appendDecimal() {
    // Ensure there's only one decimal point in the current number
    let currentExpression = display.value;
    let lastNumber = currentExpression.split(/[\+\-\*\/%]/).pop();
    if (!lastNumber.includes('.')) {
        display.value += '.';
    }
}

function toggleSign() {
    let currentExpression = display.value;
    let lastNumber = currentExpression.split(/[\+\-\*\/%]/).pop();

    // Toggle the sign of the last number
    if (lastNumber !== '') {
        if (lastNumber.charAt(0) === '-') {
            display.value = currentExpression.slice(0, -lastNumber.length) + lastNumber.slice(1);
        } else {
            display.value = currentExpression.slice(0, -lastNumber.length) + '-' + lastNumber;
        }
    }
}

function clearDisplay() {
    display.value = '';
}

function clearLastCharacter() {
    let currentExpression = display.value;
    display.value = currentExpression.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}



