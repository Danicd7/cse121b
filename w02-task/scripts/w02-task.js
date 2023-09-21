

/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

// Declare and instantiate a variable to hold your name. 
const fullName = "Daniel Candido Caetano Da Silva";

// Declare and instantiate a variable to hold the current year.
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path (location) 
// and file name of the image that you placed in the images folder as a string
const profilePicture = "images/index.mypictureNew.jpg";


/* Step 3 - Element Variables */

// Use the document.getElementById() method to get the HTML element with the id of name
// and store it in a const variable named "nameElement".
let nameElement = document.getElementById("name");

// Use the document.getElementById() method to get the HTML element with the id of food 
// and store it in a const variable named "foodElement".
const foodElement = document.getElementById("food");

// Use the document.querySelector() method to get the element with the id of "year" 
// and store it in a variable named "yearElement".
const yearElement = document.querySelector("#year");



/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value.
// Surround the fullName value with <strong> tags
nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Use the textContent property to set the value of the element to the value of the variable currentYear.
yearElement.textContent = currentYear;


// Use the setAttribute method to set the alt property of the image element 
// and set its value to equal 'Profile image of [Insert Name Variable]'
// where the name variable comes from Step 2. Always use a template literal to create the string.
//Use any viable method to get the profile image element stored into a variable named "imageElement".
// Use the setAttribute method to set the src property of the image element 
// and set its value to the file path variable set in Step 2.
/* imageElement.setAttribute('src', profilePicture);*/
let img_ = document.getElementsByTagName('img');
let imageElement = img_[0].setAttribute('src', profilePicture);
img_[0].setAttribute('alt', `${profilePicture}`);
img_[0].setAttribute('title', `${profilePicture}`);



/* Step 5 - Array */

//Declare an array variable to hold your favorite foods
let favoriteFoods = ["Pizza", "Sushi", "peanut", "Burgers", "pasta"];

// Modify the HTML element with the id of food to display your favorite foods array. 
// Remember that you set a variable named foodElement in Step 3 to reference the element with the id of food.
let foodsAsString = favoriteFoods.join(", ");
foodElement.innerHTML = `My favorite foods: ${foodsAsString}`;

// Add a new favorite food item to the array
let anotherFavoriteFood = "Tacos";
favoriteFoods.push(anotherFavoriteFood);

// Display the modified array with line breaks in an HTML element
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the first element from the array
favoriteFoods.shift();

// Display the modified array after removing the first element
foodElement.innerHTML += `<br>${favoriteFoods}`;

// Remove the last element from the array
favoriteFoods.pop();

// Display the final modified array after removing the last element
foodElement.innerHTML += `<br>${favoriteFoods}`;

