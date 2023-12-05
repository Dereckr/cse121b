/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
/* async displayTemples Function */
function displayTemples(temples) {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.textContent=temples.templeName;
    let img = document.createElement("img");
    img.setAttribute("src",temples.imageUrl);
    img.setAttribute("alt",temples.location);
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
};

/* async getTemples Function using fetch()*/
let getTemples = async()=>{
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        templeList.forEach(displayTemples);
    }
    }

 
/* reset Function */
function reset(){
    article.clear();
}

/* sortBy Function */
function sortBy(temples){
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch(filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            default:
            displayTemples(temples);
    } 

}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy(templeList)});