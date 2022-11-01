// String type
let name = "ksb";

// Number type
let number = 122;

// boolean type
let isMyNamePresent = true;
if (isMyNamePresent === true) {
    alert('Name is there')
} else {
    console.log("Please assign your name in the above variable, please")
}

//object & symbol type
let object = {
    name: "kub",
    age: 26,
    gender: "M"
};

//typeof 
typeof 22;
typeof "kub";


// 8 data types
// number
// bigint
// String
// Boolean
// null
// undefined
// Symbol

//styling using js
console.log(' %c I am some new text', 'font-size: 20px; background-color: red');

//function
function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!")
}

favoriteAnimal('Lion');

//local scope
function showMessage() {
    let message = "Hello, I'm JavaScript!";
    alert(message);
}
showMessage();

alert(message); // error thrown - out-of-scope

//logic building
function add7() {
    var number = 7;
    return number;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function capitalize(string) {
    return string1 = string.charAt(0).toUpperCase() + string.slice();
}


//splice
const fruits = ["mango", "orange", "apple", "grapes"];
fruits.splice(2,1, "strawberry", "lichi"); //['mango', 'orange', 'strawberry', 'lichi', 'grapes']

//slice
const username = ["ted","russel","andy","max","lewis","don"];
//last-1
username.slice(2,3); //["andy"]

const username1 = ['alonso', 'vettel', 'bottas', 'sainz', 'topnotch'];
username1.splice(2,2, "lewis"); //['bottas', 'sainz'] - OUT || lewis -IN

// username1['alonso', 'vettel', 'lewis', 'topnotch']


// -------------------------
//         DOM
// -------------------------
//query selector
const selector = document.querySelector('.class'); //return the first element which matches the parenthesis
const selectors = document.querySelectorAll('.class'); //returns all the elements 

//create & alter element(ID)
const div = document.createElement('#div');
div.style.color = 'red';
div.style.backgroundColor = '#000';

//editing attributes(ID)
div.setAttribute('div', 'theDiv'); //updating
div.getAttribute('div'); //returns the specified
div.removeAttribute('div'); //removes the specified

//with classes
div.classList.add('.className'); //adding a class to div

//adding HTML content
div.innerHTML = 'hello'; //render the id of the specified



// -------------------------
//         Events
// -------------------------
const click = document.querySelector('#btnClick');
click.addEventListener('click', ()=>{
    alert('Button Clicked');
});