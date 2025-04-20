// This file contains the JavaScript code for the petrol calculator

// Function to calculate the total cost of petrol
function calculateTotalCost() {
    // Get the value of the cost of petrol per liter from the input field
    const costPerLiter = parseFloat(document.getElementById('costPerLiter').value);
    
    // Get the value of the number of liters purchased from the input field
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);
    
    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost in the paragraph tag
    document.getElementById('totalCost').innerText = `Total Cost: $${totalCost.toFixed(2)}`;
}

// Add event listener to the calculate button
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost);