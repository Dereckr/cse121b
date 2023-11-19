/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    let sum = number1 + number2;
    return sum
}

function addNumbers(){
    let numberOne = Number(document.querySelector("#add1").value);
    let numberTwo = Number (document.querySelector("#add2").value);
    document.querySelector("#sum").value= add(numberOne, numberTwo);
}

document.querySelector("#addNumbers").addEventListener("click",addNumbers);



/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2 ;
}

const subtractNumbers = function (){
    let numberOne = Number(document.querySelector("#subtract1").value);
    let numberTwo = Number(document.querySelector("#subtract2").value);
    let subtractResult = subtract(numberOne, numberTwo);
    document.querySelector("#difference").value = subtractResult;
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
let numberOne = Number(document.querySelector("#factor1").value);
let numberTwo = Number(document.querySelector("#factor2").value);
document.querySelector("#product").value = multiply(numberOne, numberTwo);
}

document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = function (number1, number2){
    return number1/number2 ;
    
}

const divideNumbers = function() {

    let numberOne = Number(document.querySelector("#dividend").value);
    let numberTwo = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(numberOne, numberTwo);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


function Structure(num,checkbox){
if (checkbox.checked){
 let total = num * 0.85
} else {
    total = num
}
return `${total.toFixed(2)}`
}

function setStructure(){
    let numeric = Number(document.querySelector("#subtotal").value)
    let checkbox = document.querySelector("#member#");
    document.getElementById("total").innerHTML= Structure(numeric,checkbox)

}


document.querySelector("#getTotal").addEventListener("click",setStructure);





/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let firstArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = firstArray;


/* Output Odds Only Array */

const result = firstArray.filter((number)=>number%2 != 0);
document.querySelector("#odds").innerHTML = result;

/* Output Evens Only Array */
const evens = firstArray.filter((number)=>number%2 == 0);
document.querySelector("#evens").innerHTML = evens;

/* Output Sum of Org. Array */
const sum = firstArray.reduce((accumulator, currentValue)=>accumulator+currentValue);
document.querySelector("#sumOfArray").innerHTML = sum;

/* Output Multiplied by 2 Array */
const multiplied =  firstArray.map((x)=>x*2)
document.querySelector("#multiplied").innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
const sum2 = multiplied.reduce((sum, value) => sum+value);
document.querySelector('#sumOfMultiplied').innerHTML= sum2;