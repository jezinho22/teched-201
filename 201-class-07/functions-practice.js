// 5 functions

// 5 function expressions
// program to find the square of a number
// function is declared inside the variable
let x = function (num) {
	return num * num;
};
console.log(x(4));

// can be used as variable value for other variables
let y = x(3);
console.log(y);

// func exp 1
// well that's weird - if you print the function as is, you get a print out of the function
let f = function () {
	return "What a banana";
};
console.log(f());
// but if you print it with a parameter (that is not even required) you get the function outcome
console.log(f(3));

// func exp task 2
let xCubed = function (number) {
	return number ^ 3;
};
console.log(xCubed(12));

// func exp task 3
// calculate VAT
let addVAT = function (billAmount) {
	let plusVat = billAmount * 0.2 + billAmount;
	// return `£${plusVat.toFixed(2)}`;
	return plusVat;
};
console.log(addVAT(28.5));

// func expression task 4
// calculate a tip
let calcTip = function (billAmount) {
	let plusTip = billAmount + billAmount * 0.15;
	return `Bill plus VAT plus tip is £${plusTip.toFixed(2)}`;
};
console.log(calcTip(addVAT(28.5)));

// func expression task 5
// calculate the total of ASCII codes for characters in a name
let nameValue = function (name) {
	let totalASCII = 0;
	for (i = 0; i < name.length; i++) {
		totalASCII += name.charCodeAt(i);
		// console.log(name.charCodeAt(i));
	}

	return totalASCII;
};
console.log(nameValue("Jez"));

// 5 arrow functions
let myFunction = (x) => x * x;
console.log(myFunction(9));

let my2Function = (name) => `Hey there, ${name}`;
console.log(my2Function("Jez"));

let my3Function = (bill) => `Bill with tip comes to £${bill + bill * 0.2}`;
console.log(my3Function(10.0));

let my4Function = (age) => `Your age (${age}) in dog years is ${age / 7}`;
console.log(my4Function(55));

let my5Function = (inches) => `Your distance ()`;
