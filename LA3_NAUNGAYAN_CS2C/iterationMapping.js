// Prompt the user for the maximum number of iterations
let maxLimit = prompt("Enter the Limit of the Double Loop:");

// Convert the input to a number so we can use it in our loops
maxLimit = Number(maxLimit);

// Initialize counters
let i = 0;
let j = 0;

// Iterate through the loops
for (i = 0; i < maxLimit; i++) {
  for (j = 0; j < maxLimit; j++) {
// Calculate the added value
    let addedValue = i + j;

// Log the iteration points and added value
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}