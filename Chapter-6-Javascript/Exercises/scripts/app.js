// Get references to the input fields, button, and total cost paragraph
const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostParagraph = document.getElementById('totalCost');

// Function to calculate the total cost
function calculateTotalCost() {
    // Get the values from the input fields
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);

    // Check if the inputs are valid numbers
    if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
        totalCostParagraph.textContent = 'Please enter valid numbers.';
        return;
    }

    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;

    // Display the total cost in the paragraph
    totalCostParagraph.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
}

// Add an event listener to the button
calculateButton.addEventListener('click', calculateTotalCost);