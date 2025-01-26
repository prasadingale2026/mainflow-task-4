const display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    const validKeys = '0123456789+-*/%.,=';
    
    if (validKeys.includes(key)) {
        event.preventDefault();
        if (key === '=' || key === 'Enter') calculate();
        else if (key === 'Backspace') deleteLastChar();
        else if (key === 'Escape') clearDisplay();
        else appendToDisplay(key);
    }
});
