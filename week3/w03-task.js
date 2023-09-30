/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
  }
  
  // Function declaration for the "addNumbers" function
  function addNumbers() {
    // Get the values of the HTML form controls
    const add1 = parseFloat(document.getElementById("add1").value);
    const add2 = parseFloat(document.getElementById("add2").value);
  
    // Call the "add" function with the obtained values and assign the result to "sum"
    const sum = add(add1, add2);
  
    // Assign the "sum" value to an HTML form element with ID "sum"
    document.getElementById("sum").textContent = sum;
  }
  
  // Add a "click" event listener to the HTML button with ID "addNumbers"
  document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

// Function expression for the "subtract" function
const subtract = function(number1, number2) {
    return number1 - number2;
  };
  
  // Function expression for the "subtractNumbers" function
  const subtractNumbers = function() {
    // Get the values of the HTML form controls
    const subtract1 = parseFloat(document.getElementById("subtract1").value);
    const subtract2 = parseFloat(document.getElementById("subtract2").value);
  
    // Call the "subtract" function with the obtained values
    const difference = subtract(subtract1, subtract2);
  
    // Display the result in an HTML element with ID "difference"
    document.getElementById("difference").textContent = `Difference: ${difference}`;
  };
  
  // Add a "click" event listener to the HTML button with ID "subtractNumbers"
  document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

// Arrow function for the "multiply" function
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for the "multiplyNumbers" function
const multiplyNumbers = () => {
  // Get the values of the HTML form controls
  const factor1 = parseFloat(document.getElementById("factor1").value);
  const factor2 = parseFloat(document.getElementById("factor2").value);

  // Call the "multiply" function with the obtained values
  const product = multiply(factor1, factor2);

  // Display the result in an HTML element with ID "product"
  document.getElementById("product").textContent = `Product: ${product}`;
};

// Add a "click" event listener to the HTML button with ID "multiplyNumbers"
document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

// Function declaration for the "divide" function
function divide(dividend, divisor) {
    return dividend / divisor;
  }
  
  // Function expression for the "divideNumbers" function
  const divideNumbers = function() {
    // Get the values of the HTML form controls
    const dividend = parseFloat(document.getElementById("dividend").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
  
    // Call the "divide" function with the obtained values
    const quotient = divide(dividend, divisor);
  
    // Display the result in an HTML element with ID "quotient"
    document.getElementById("quotient").textContent = `Quotient: ${quotient}`;
  };
  
  // Add a "click" event listener to the HTML button with ID "divideNumbers"
  document.getElementById("divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
