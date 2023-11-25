// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// console.log("Area1:", area);
// radius = 4;
// area = radius * radius * PI;
// console.log("Area2:", area);

// const PI = 3.14;
// let area = 0;
// let radius= 0;


// function circleArea(radius) {
// let area = radius * radius * PI;
// return area;
// }

// area = circleArea(3);
// console.log("Area:3", area);

// area = circleArea(4);
// console.log("Area2:", area);

// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }


// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];

// for (let i=0;i<studentReport.length; i++){

//     let value = studentReport[i]
//     if (value <30){
//     console.log(value)
// }}

// let i = 0;
// while (i<studentReport.length){
//     if (studentReport[i]< 30){
//         console.log(studentReport[i]);
//     }
//     i++; 
// }

// studentReport.forEach(function(item){
//     if (item <LIMIT){console.log(item);}
// })

// for(const i in studentReport){
//     if (studentReport[i]<LIMIT){
//         console.log(studentReport[i]);
//     }
// }

function calculate(a, b, callback) {
    callback(a + b);
    return result;
  }

  function displayResult(result) {
    console.log('The result is: ' + result);
  }

  calculate(2, 3,displayResult);