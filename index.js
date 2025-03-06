// TODO: this file! :)
document.addEventListener('DOMContentLoaded', () => {
    const numberInput = document.getElementById('number');
    const addButton = document.querySelector('button');
    const numberBankOutput = document.querySelector('#numberBank output');
    const oddsOutput = document.querySelector('#odds output');
    const evensOutput = document.querySelector('#evens output');
    const sortOneButton = document.getElementById('sortOne');
    const sortAllButton = document.getElementById('sortAll');

    let numbers = []; // Array to store numbers

    // Add number to the bank
    addButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        const number = parseInt(numberInput.value, 10);
        if (!isNaN(number)) {
            numbers.push(number); // Add to the array
            updateNumberBank();
            numberInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a valid number.');
        }
    });

    // Update the Number Bank display
    function updateNumberBank() {
        numberBankOutput.textContent = numbers.join(', ');
    }

    // Sort 1 number (add the first unsorted number to Odds or Evens)
    sortOneButton.addEventListener('click', () => {
        if (numbers.length > 0) {
            const number = numbers.shift(); // Remove the first number
            sortNumber(number);
            updateNumberBank();
        } else {
            alert('No numbers left to sort.');
        }
    });

    // Sort all numbers
    sortAllButton.addEventListener('click', () => {
        while (numbers.length > 0) {
            const number = numbers.shift(); // Remove the first number
            sortNumber(number);
        }
        updateNumberBank();
    });

    // Sort a single number into Odds or Evens
    function sortNumber(number) {
        if (number % 2 === 0) {
            evensOutput.textContent += (evensOutput.textContent ? ', ' : '') + number;
        } else {
            oddsOutput.textContent += (oddsOutput.textContent ? ', ' : '') + number;
        }
    }
});
git 