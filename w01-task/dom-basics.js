const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("src","https://picsum.photos/200")
image.setAttribute("alt","Nice pic")
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSec = document.createElement("section");
newSec.innerHTML = "<section><h2>CSE 121 b</h2><p>Welcome to Javascript Language</p></section>";
document.body.appendChild(newSec);
