// Function to add two numbers
function add(number1, number2) {
    return number1 + number2;
}

// Function to subtract two numbers
function subtract(number1, number2) {
    return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
    return number1 * number2;
}

// Function to divide two numbers
function divide(number1, number2) {
    // To avoid division by zero
    if (number2 === 0) {
        return 'Error: Division by zero';
    }
    return number1 / number2;
}

// Add event listener for the Add button
document.getElementById('add').addEventListener('click', function() {
    // Get the input values and convert to floats, default to 0 if empty
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    
    // Calculate the result using the add function
    const result = add(number1, number2);
    
    // Display the result in the calculation-result span
    document.getElementById('calculation-result').textContent = result;
});

// Add event listener for the Subtract button
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Add event listener for the Multiply button
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

// Add event listener for the Divide button
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
