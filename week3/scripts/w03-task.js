/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function declaration for the "addNumbers" function
  function addNumbers() {
    // Get the values of the HTML form controls
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);
  
    // Call the "add" function with the obtained values and assign the result to "sum"
    let sum = add(add1, add2);
  
    // Assign the "sum" value to an HTML form element with ID "sum"
    document.querySelector("#sum").value = sum; 
  }
  
  // Add a "click" event listener to the HTML button with ID "addNumbers"
  document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

// Function expression for the "subtract" function
let subtract = function(number1, number2) {
    return number1 - number2;
  }
  
  // Function expression for the "subtractNumbers" function
  let subtractNumbers = function() {
    // Get the values of the HTML form controls
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
  
    // Call the "subtract" function with the obtained values
    let difference = subtract(subtract1, subtract2);
  
    // Display the result in an HTML element with ID "difference"
    document.querySelector("#difference").value = difference;
  }
  // Add a "click" event listener to the HTML button with ID "subtractNumbers"
  document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

// Arrow function for the "multiply" function
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for the "multiplyNumbers" function
const multiplyNumbers = () => {
  // Get the values of the HTML form controls
  const factor1 = Number(document.querySelector("#factor1").value);
  const factor2 = Number(document.querySelector("#factor2").value);

  // Call the "multiply" function with the obtained values
  const product = multiply(factor1, factor2);

  // Display the result in an HTML element with ID "product"
  document.querySelector("#product").value = product;
}

// Add a "click" event listener to the HTML button with ID "multiplyNumbers"
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

// Function declaration for the "divide" function
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Function expression for the "divideNumbers" function
  const divideNumbers = function() {
    // Get the values of the HTML form controls
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);
  
    // Call the "divide" function with the obtained values
    const quotient = divide(dividend, divisor);
  
    // Display the result in an HTML element with ID "quotient"
    document.querySelector("#quotient").value = quotient;
  }
  
  // Add a "click" event listener to the HTML button with ID "divideNumbers"
  document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */

// Declare and instantiate a variable to store the current date
let currentDate = new Date();

// Declare a variable to hold the current year
let currentYear = currentDate.getFullYear();

// Assign the current year to an HTML form element with ID "year"
document.querySelector("#year").value = currentYear;
/* Output Source Array */

// Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray = Array.from({ length: 13 }, (_, i) => i + 1);

// Assign the value of the array variable to the HTML element with ID "array"
document.querySelector("#array").textContent = numbersArray.join(", ");

/* Output Odds Only Array */

// Use the filter() array method to find all odd numbers and assign the result to the HTML element with ID "odds"
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
document.querySelector("#odds").textContent = oddNumbers.join(", ");

/* Output Evens Only Array */

// Use the filter() array method to find all even numbers and assign the result to the HTML element with ID "evens"
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.querySelector("#evens").textContent = evenNumbers.join(", ");


/* Output Sum of Org. Array */
// Use the reduce() array method to sum the array elements and assign the result to the HTML element with ID "sumOfArray"
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector("#sumOfArray").textContent = sum;

/* Output Multiplied by 2 Array */
// Use the map() array method to multiply each element in the array by 2 and assign the result to the HTML element with ID "multiplied"
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").textContent = multipliedArray.join(", ");

/* Output Sum of Multiplied by 2 Array */

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with ID "sumOfMultiplied"
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;