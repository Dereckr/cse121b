// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log("Area1:", area);
// radius = 4;
// area = radius * radius * PI;
// console.log("Area2:", area);

const PI = 3.14;
let area = 0;
let radius= 0;


function circleArea(radius) {
let area = radius * radius * PI;
return area;
}

area = circleArea(3);
console.log("Area:3", area);

area = circleArea(4);
console.log("Area2:", area);

