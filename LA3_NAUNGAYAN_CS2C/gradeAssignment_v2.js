// Ask the user for their score so we can figure out their grade
let score = prompt("Enter your score:");

// Convert the score to a number
score = Number(score);

// Determine the grade based on the score
let grade;
if (score >= 97) {
  grade = "1.00";
} else if (score >= 94) {
  grade = "1.25";
} else if (score >= 91) {
  grade = "1.50";
} else if (score >= 88) {
  grade = "1.75";
} else if (score >= 85) {
  grade = "2.00";
} else if (score >= 82) {
  grade = "2.25";
} else if (score >= 79) {
  grade = "2.50";
} else if (score >= 76) {
  grade = "2.75";
} else if (score === 75) {
  grade = "3.00";
} else if (score >= 72) {
  grade = "4.00";
} else {
  grade = "5.00";
}

// Now we'll figure out some nice words to go with the grade based on how well they did
let remarks;
if (score >= 90) {
  remarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  remarks = "AVERAGE PASS";
} else if (score >= 75) {
  remarks = "LOW PASS";
} else {
  remarks = "FAILED, Needs Improvement";
}

// Show the user their grade and remarks
console.log(`Your equivalent Grade is “${grade}” ${remarks}`);