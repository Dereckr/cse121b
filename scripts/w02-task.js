/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Dereck Romero";
let currentYear = "2023";
let profilePicture = "images/photo.jpeg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageELement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageELement.setAttribute("src", profilePicture);
imageELement.setAttribute("alt", `Profile image Of ${fullName}`)




/* Step 5 - Array */
let favoriteFood = ["Mondongo", "Fricase", "Sushi", "Valdiviano", "Tonkatsu", "Frijol Tropeiro", "Acai", "Lasagna", "Tempura"];
foodElement.textContent = favoriteFood;
let secondFood = "Hamburger"
favoriteFood.push(secondFood);
foodElement.innerHTML +=`<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML +=`<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML +=`<br>${favoriteFood}`;








