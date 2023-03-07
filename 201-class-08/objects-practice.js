// Lesson object practice from V's code
// const eveningClass = {
// 	paisley: {
// 		first_name: "Paisley",
// 		last_name: "Simpson",
// 		age: 23,
// 		home: "Wramplingham",
// 		fav_colour: "orange",
// 	},
// 	george: {
// 		first_name: "George",
// 		last_name: "Green",
// 		age: 30,
// 		home: "London",
// 		fav_colour: "green",
// 	},
// 	carla: {
// 		first_name: "Carla",
// 		last_name: "Lyman",
// 		age: 23,
// 		home: "Lynchburg, Virginia",
// 		fav_colour: "purple",
// 	},
// 	jane: {
// 		first_name: "Jane",
// 		last_name: "Grove",
// 		age: 23,
// 		home: "Liverpool",
// 		fav_colour: "teal",
// 	},
// 	vee: {
// 		first_name: "Priyatham",
// 		last_name: "Varma",
// 		age: 29,
// 		home: "Norwich",
// 		fav_colour: "blue",
// 	},
// 	jez: {
// 		first_name: "Jeremy",
// 		last_name: "Johns",
// 		age: 55,
// 		home: "Norwich",
// 		fav_colour: "black",
// 	},
// 	introduceMe: function (name) {
// 		console.log(
// 			`Please may I introduce ${this[name].first_name} ${this[name].last_name}, who is ${this[name].age} and lives in ${this[name].home}`
// 		);
// 	},
// };

// console.log(eveningClass.carla.home);
// console.log(eveningClass.jane.last_name);

// eveningClass.introduceMe("paisley");
// eveningClass.introduceMe("jane");
// eveningClass.introduceMe("george");
// eveningClass.introduceMe("carla");
// eveningClass.introduceMe("vee");
// eveningClass.introduceMe("jez");

// // refactored - it seems that with 'this' used in object method introduceMe, it then won't work when
// // called by forEach, at least as an arrow function
// var eveClassKeys = Object.keys(eveningClass);

// eveClassKeys.forEach((key) =>
// 	console.log(
// 		`And now, please may I introduce ${eveningClass[key].first_name} ${eveningClass[key].last_name}, who is ${eveningClass[key].age} and lives in ${eveningClass[key].home}`
// 	)
// );

// Task 1
// var epicFailVideo = function (epicRating, hasAnimals) {
// 	this.epicRating = epicRating;
// 	this.hasAnimals = hasAnimals;
// };

// var parkourFail = new epicFailVideo(7, false);
// var corgiFail = new epicFailVideo(4, true);

// console.log(corgiFail);
// console.log(parkourFail.epicRating);
// var boris = parkourFail;
// boris.epicRating = "Nothing to see here";
// console.log(boris.epicRating);
// console.log(parkourFail.epicRating);

// Task 2
// constructor gets a capital letter
// var EpicFailVideo = function (epicRating, hasAnimals) {
// 	this.epicRating = epicRating;
// 	this.hasAnimals = hasAnimals;
// };

// the constructor prototype has a capital letter
// it adds a 'default' method for the objects created from it to use
// if they don't already have a method with that name
// EpicFailVideo.prototype.generateRandom = function (min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// var parkourFail = new EpicFailVideo(7, false);
// var corgiFail = new EpicFailVideo(4, true);

// //if you go and add a function with the same name as in the prototype,
// // that function gets called instead
// // parkourFail.generateRandom = function () {
// // 	console.log("Hiya!");
// // 	return "WTF?";
// // };

// EpicFailVideo.prototype.dailyLikes = function () {
// 	var viewers, percentage;
// 	viewers = this.generateRandom(10, 30) * this.epicRating;

// 	if (this.hasAnimals === true) {
// 		percentage = 0.75;
// 	} else {
// 		percentage = 0.4;
// 	}

// 	return Math.round(viewers * percentage);
// };

// EpicFailVideo.prototype.weeklyLikes = function () {
// 	var total = 0;
// 	for (i = 0; i < 7; i++) {
// 		total += this.dailyLikes();
// 	}
// 	return total;
// };
// console.log(corgiFail.weeklyLikes());
// console.log(parkourFail.weeklyLikes());

// My own tasks

// Curtain shop
// var Curtains = function (name, pricePerMetre, fabric) {
// 	this.name = name;
// 	this.pricePerMetre = pricePerMetre;
// 	this.fabric = fabric;
// };

// var luxCurtain = new Curtains("Luxury curtains", 8.6, "wool");
// var midCurtain = new Curtains("Mid range curtains", 6.1, "cotton");
// var valCurtain = new Curtains("Value curtains", 4.5, "cotton");
// var superValCurtain2 = new Curtains("Super value curtains", 4.0, "polyester");

// Curtains.prototype.costMetres = function (metres) {
// 	var cost = this.pricePerMetre * metres;
// 	return cost.toFixed(2);
// };
// Curtains.prototype.costMetresVAT = function (metres) {
// 	var cost = this.pricePerMetre * metres;
// 	cost += cost * 0.2;
// 	return cost.toFixed(2);
// };

// console.log(luxCurtain.costMetresVAT(7));
// console.log(luxCurtain.costMetres(7));

// My own task 2
// var CalorieCalculator = function (foodName, caloriePer100g) {
// 	this.foodName = foodName;
// 	this.caloriePer100g = caloriePer100g;
// };

// CalorieCalculator.prototype.calculatePerServing = function (servingInG) {
// 	var servingCalories = (this.caloriePer100g * servingInG) / 100;
// 	return `${servingInG}g of ${
// 		this.foodName
// 	} provides ${servingCalories.toFixed(1)} kCalories`;
// };

// var cheddarCheese = new CalorieCalculator("Cheddar cheese", 416);
// var cottageCheese = new CalorieCalculator("Cottage cheese", 105);
// var creamCheese = new CalorieCalculator("Cream cheese", 147);

// console.log(cheddarCheese.calculatePerServing(30));

// // My own task 3
// // units of alcohol in drinks : 1 unit = 10 ml of alcohol
// // so if wine is 12% and a glass is 175ml, alcohol is 175 * 0.12, and units is alcohol / 10
// // and if price is taken into account: we can, like my student son, compare
// // how much a unit of alcohol costs for different drinks ...
// // So that's volume * %alcohol/100
// // then divided by 10ml for units of alcohol
// // then price divided by units of alcohol - this is sounding quite seedy but geeky

// create object
var UnitsOfAlcohol = function (name, capacity, alcByVolume, price) {
	this.name = name;
	this.capacity = capacity;
	this.alcByVolume = alcByVolume;
	this.price = price;
	var tester = "Tester";
};

UnitsOfAlcohol.prototype.pricePerUnit = function () {
	var units = (this.capacity * this.alcByVolume) / 100 / 10;
	var pricePerUnit = this.price / units;
	return `${this.name} contains ${units.toFixed(
		2
	)} units of alcohol. If you buy a ${this.capacity} of ${
		this.name
	}, you pay £${pricePerUnit.toFixed(2)} per unit of alcohol`;
};

var aldiPinot = new UnitsOfAlcohol("Aldi pinot grigio", 750, 11.5, 3.99);
var aldiPort = new UnitsOfAlcohol("Aldi port", 750, 19, 6.69);
var aldiCider = new UnitsOfAlcohol("Aldi taurus cider", 4 * 440, 5, 2.39);
var aldiGalahad = new UnitsOfAlcohol("Aldi galahad beer", 4 * 440, 4, 2.49);
var aldi1897 = new UnitsOfAlcohol("Aldi 1897 beer", 4 * 440, 5, 3.59);
var aldiStEtienne = new UnitsOfAlcohol("Aldi St Etienne", 4 * 440, 4.8, 3.19);
var aldiWhisky = new UnitsOfAlcohol(
	"Aldi highland earl whisky",
	700,
	40,
	11.49
);

console.log(aldiPinot.pricePerUnit());
console.log(aldiPort.pricePerUnit());
console.log(aldiCider.pricePerUnit());
console.log(aldiGalahad.pricePerUnit());
console.log(aldi1897.pricePerUnit());
console.log(aldiStEtienne.pricePerUnit());
console.log(aldiWhisky.pricePerUnit());

// console.log(aldiPort.tester);

// My own task 4
// object literal
// var data = {
// 	fname: "foo",
// 	addOne: function (num) {
// 		return num + 1;
// 	},
// };

// console.log(`data.fname: ${data.fname}`);
// console.log(`data.addOne(4): ${data.addOne(4)}`);

// data.fname = "bar";
// console.log(`data.fname after bar change: ${data.fname}`);

// data.lname = "baz";
// console.log(`data.lname: ${data.lname}`);

// data.say = function () {
// 	return "this is the say function";
// };
// console.log(data.say());

// // constructor function
// var Foo = function () {
// 	console.log("welcome to your new instance object");
// 	// variable set inside con func can't be accessed except via funcs within the con func
// 	var _color = "blue";
// 	this.getColor = function () {
// 		return _color;
// 	};
// 	this.setColor = function (newColor) {
// 		_color = newColor;
// 	};
// };

// var bar = new Foo(); // "welcome to your new instance object"
// console.log(bar._color); // undefined - you can't access it from outside the object
// console.log(bar.getColor()); // "blue"
// bar.setColor("red");
// console.log(bar.getColor()); // "red"

// object literals
// this was to answer the question about what the key word "this" does differently in obj lits and func constructors
// const myObjectLiteral1 = {
// 	name: "Jez",
// 	age: 55,
// 	hello: function () {
// 		console.log("this.name " + this.name);
// 		console.log("object.name " + myObjectLiteral1.name);
// 		console.log("just name" + name);
// 	},
// };
// myObjectLiteral1.hello();
