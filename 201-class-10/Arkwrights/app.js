// assign form element to a variable
const form = document.querySelector("#form");

// initialise array to try to store input data as objects
foodArray = [];

// initialise variables outside of any functions for scope
let cuisine = "Chinese";
let dish = "Chow mein";
let weight = 500;

// create class to match inputs
class WorldFood {
	constructor(cuisine, dish, weight) {
		this.cuisine = cuisine;
		this.dish = dish;
		this.weight = weight;
	}
}

// create new instance of WorldFood class
var newFood = new WorldFood(cuisine, dish, weight);

// add event listener for form, using variable containing it
form.addEventListener("submit", () => {
	console.log("handler working");
	// prevent page reloading
	event.preventDefault();
	// assign form inputs to variables
	cuisine = event.target.cuisine.value;
	dish = event.target.dish.value;
	weight = event.target.weight.value;
	console.log(cuisine, dish, weight);
	// // create new instance of WorldFood class
	// var newFood = new WorldFood(cuisine, dish, weight);

	// create row, create cells and add data
	var row = document.createElement("tr");
	var cuisineCell = document.createElement("td");
	cuisineCell.innerText = newFood.cuisine;
	var dishCell = document.createElement("td");
	dishCell.innerText = newFood.dish;
	var weightCell = document.createElement("td");
	weightCell.innerText = newFood.weight;

	// combine cells and then append to table body
	// var allCells = cuisineCell.outerHTML + dishCell.outerHTML + weightCell.outerHTML;
	row.appendChild(cuisineCell);
	row.appendChild(dishCell);
	row.appendChild(weightCell);
	var tbody = document.querySelector("tbody");
	tbody.appendChild(row);
});
