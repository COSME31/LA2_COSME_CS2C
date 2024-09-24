// Declare variables
let a = 25;
let b = 20;
let c = 12;
let d = "15";
let e = 15;

// Calculate sum of declared variables and constant
let sum = a + b + c + parseInt(d) + e;
console.log("The sum of the declared variables and constant is: {sum}");

// Compare the values of variable d and constant e
console.log("d > e: {d > e}");
console.log("d < e: {d < e}");
console.log("d >= e: {d >= e}");
console.log("d <= e: {d <= e}");
console.log("d === e: {d === e}");

// Declare new variables to store the results of the operations
let subtractionResult = a - b - c - parseInt(d) - e;
let multiplicationResult = (a * c) / e;
let exponentResult = Math.pow(e, c);
let reassignmentResult = c;

// Display the results
console.log("Subtraction result: {subtractionResult}");
console.log("Multiplication result: {multiplicationResult}");
console.log("Exponent result: {exponentResult}");
console.log("Reassignment result: {reassignmentResult}");