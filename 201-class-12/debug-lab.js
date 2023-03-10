"use strict";
var a = 1; // number
var b = "george dave"; // string
var c = true; // boolean
var d = {}; // object
var e = ["Jez", "Jane", "Carla", "Paisley", "George"]; // array
var f = ""; // undefined
var g = 2;
// var a = 1; // number
// var b = "george dave"; // string
// var c = true; // boolean
// var d = {}; // object
// var e = ["Jez", "Jane", "Carla", "Paisley", "George"]; // array
// var f = ""; // undefined
// var g = 2;
// you cannot initialise variables more than once

// Assign a key value to the object
d.first = "First avenger"; // commas instead of semicolons
d.second = "First avenger";
d.third3 = "third avenger"; // comma after final one means it looks like the function is a continuation of this,
// so does not get defined
/*

    -This function is for adding two numbers
    @param1:number
    @param2:number

*/
function add(x, y) {
	//maybe a and b have already been declared - nope that's not it
	//
	a = a; // should be = unless it is a conditional
	b = b; // should be = unless it is a conditional

	return x + y; // there is no d given as an argument, and the d defined earlier is an object
	// also to add you need + not *
}

// Call the function
console.log(add("1", 2)); // 1,2 might come from a form
// add expects number datatypes
// it will work but it will return 12

// event handlers

function clickHandler() {
	let z = 1; // the variable has not been initialised: so z is undefined
}

console.log(d.third4); // d.third4 has not been defined
