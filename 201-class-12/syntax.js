console.log("Hello world!");
// prints: Hello world!

let str = "This is a string";
str = "This is also a string";

let amount = 21;
amount = 2.99;

let myWord = true;
let lies = false;

let nothingAtAll = null;
let notANumber = NaN;

let noValueGiven;
// noValueGiven = undefined;

// Addition
20 + 5;
// Subtraction
20 - 5;
// Multiplication
5 * 5;
// Division
25 / 5;
// Modulo - gives a remainder
24 % 5; // = 4

let str = "Hello world!";
console.log(str.length);
// Prints: 9

Math.random();
//returns a random number between 0 and 1

Math.floor(3.8);
//returns 3 ie rounds down to integer
Math.floor(Math.random() * 10);
//returns an integer of 0 to 9

// A comment that javascript won't read

/* A multiline comment that 
javascript won't read */

const oneTimeOnly = "Don't re-assign me!";
oneTimeOnly = "What if I try?";
// TypeError: Assignment to constant variable

let iAmEasy = "I live to be re-assigned";
iAmEasy = "I'll be whatever you want me to be";
iAmEasy = "Yeah, baby";

let noValueGiven;
// noValueGiven = undefined

let number = 20;
number = number + 1;
// number = 21
number += 1;
// number = 22
number -= 1;
// number = 21

// string concatenate
let variable = "Joining";
let anotherVariable = 3;
let displayText =
	variable + " some words to " + anotherVariable + " other words.";
console.log(displayText);
// prints: "Joining some words to 3 other words."

// string interpolate using template literal
let displayDifferentText = `${variable} some words to ${anotherVariable} other words.`;

1 > 3; // false
3 > 1; // true
250 >= 250; // true
1 === 1; // true
1 === 2; // false
1 === "1"; // false
1 == "1"; // true

if (1 + 1 === 3) {
    // this happens
} else if (1 + 1 === 2) {
    // this happens instead
} else {
    // for everything else, there's mastercard
}

// switch statement
let mysteryName = "Jez"
switch (mysteryName){
    case 'Sam': 
        // this happens
        break;
    case 'Lily':
        // or this happens
        break;
    default:
        // for everything else, there's mastercard
        break;
}

// ternary operator for compact conditionals
let thumbs;
let something = 1;
something > 0 ? (thumbs = up) : (thumbs = down);
// thumbs up if something is better than nothing
condition ? (action if true) : (action if false)

//  define myFunction
function myFunction () {
    return "Jez"
}
// call or execute or invoke myFunction
myFunction()

function parameterFunction (parameter, argument){
    return "Is there really a difference between " + parameter + " and " + argument "?"
}
// call or execute or invoke parameterFunction
parameterFunction('lies', 'fiction');

function add (a, b){
    return a + b
}
// call or execute or invoke add
myFunction(3, 5)
// returns 8

let lies = false
    lies != true

// The parameter is name
function sayHello(name) {
    return `Hello, ${name}!`;
  }
  
  // function without parameter
function sayHello() {
    return `Hello, World!`;
  }

// Anonymous function
const rocketToMars = function () {
    return "BOOM!";
  };
// call or execute or invoke rocketToMars
rocketToMars();
// you can write an anonymous function without assigning 
// it to a variable - you do it inside another function
// and then you've made a callback function

// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
  };
  console.log(sum(2, 5)); // Prints: 7
  
  // Arrow function with no arguments
  const printHello = () => {
    console.log("hello");
  };
  printHello(); // Prints: hello
  
  // Arrow functions with a single argument
  const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms.`);
  };
  checkWeight(25); // Prints: Baggage weight : 25 kilograms.
  
  // Concise arrow functions
  const multiply = (a, b) => a * b;
  console.log(multiply(2, 30)); // Prints: 60