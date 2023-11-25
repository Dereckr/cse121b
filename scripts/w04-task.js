/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {

    name : "Dereck Romero Moscoso",
    photo: "../images/photo.jpeg",
    favoriteFoods:["Mondongo", "Fricase", "Sushi", "Valdiviano", "Tonkatsu", "Frijol Tropeiro", "Acai", "Lasagna", "Tempura"],
    hobbies:["play wally", "play soccer", "board games", "sudoku", "watch movies"],
    placesLived:[]
};




/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "La Paz, Bolivia", 
        length:"28 years"
    }
    );
myProfile.placesLived.push(
    {
        place: "Maceio, Brasil", length:"2 years"});
myProfile.placesLived.push({place: "Fukushima, Japan", length:"4 years"});


/* DOM Manipulation - Output */

/* Name */
const profileName = document.querySelector("#name");
profileName.textContent = myProfile.name;
/* Photo with attributes */
const photo=document.querySelector("#photo")
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {let li=document.createElement("li");
li.textContent=food;
document.querySelector("#favorite-foods").appendChild(li); 
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby=>{let li=document.createElement("li");
li.textContent=hobby;
document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived=>{
let dt = document.createElement("dt");
dt.textContent=placesLived.place;
document.querySelector("#places-lived").appendChild(dt);

let dd = document.createElement("dd");
dd.textContent=placesLived.length;
document.querySelector("#places-lived").appendChild(dd);
});

