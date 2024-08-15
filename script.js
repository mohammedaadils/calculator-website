// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Append value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Perform the calculation
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Square the current number
function squareNumber() {
    let currentValue = document.getElementById('display').value;
    if (currentValue) {
        let squaredValue = Math.pow(parseFloat(currentValue), 2);
        document.getElementById('display').value = squaredValue;
    }
}
