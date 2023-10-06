/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */

// Declare a new object literal variable named myProfile.
let myProfile = {};

myProfile.name = "Daniel Caetano"; 
myProfile.photo = "images/index.mypictureNew.jpg"; 
myProfile.favoriteFoods = ["pasta", "tako", "Burgers"]; 
myProfile.hobbies = ["Music", "Dancing", "Sports"]; 
myProfile.placesLived = []; // Initialize an empty array

// Add items to the placesLived array.
myProfile.placesLived.push({ place: "Lisbon", length: "3 years" });
myProfile.placesLived.push({ place: "Badajoz", length: "11 years" });


/* DOM Manipulation - Output */

/* Name */
// Assign the value of the name property to the HTML element with an ID of "name".
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of "photo".
document.getElementById("photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of "photo".
document.getElementById("photo").alt = myProfile.name;


/* Favorite Foods List*/
// Loop through favoriteFoods and create <li> elements for each favorite food.
const favoriteFoodsList = document.getElementById("favorite-foods");
myProfile.favoriteFoods.forEach((food) => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});


/* Hobbies List */
// Loop through hobbies and create <li> elements for each hobby.
const hobbiesList = document.getElementById("hobbies");
myProfile.hobbies.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

/* Places Lived DataList */
// Loop through placesLived and create <dt> and <dd> elements for each place.
const placesLivedList = document.getElementById("places-lived");
myProfile.placesLived.forEach((place) => {
  const dt = document.createElement("dt");
  dt.textContent = place.place;
  const dd = document.createElement("dd");
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});










