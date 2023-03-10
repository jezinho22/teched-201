// assign form element to a variable
const form = document.querySelector("#form");

// initialise array to try to store input data as objects
foodArray = [];

// create class to match inputs
class WorldFood {
	constructor(cuisine, foodItem, weight) {
		this.cuisine = cuisine;
		this.foodItem = foodItem;
		this.weight = weight;
	}
}

// initialise variables outside of any functions for scope
let cuisine;
let foodItem;
let weight = 0;

// add event listener for form, using variable containing it
form.addEventListener("submit", () => {
	console.log("handler working");
	// prevent page reloading
	event.preventDefault();

	// assign form inputs to variables
	cuisine = event.target.cuisine.value;
	foodItem = event.target.foodItem.value;
	weight = event.target.weight.value;
	console.log(cuisine, foodItem, weight);

	// create new instance of WorldFood class
	var newFood = new WorldFood(cuisine, foodItem, weight);

	// create row, create cells and add data
	var row = document.createElement("tr");
	var cuisineCell = document.createElement("td");
	cuisineCell.innerText = newFood.cuisine;
	var foodItemCell = document.createElement("td");
	foodItemCell.innerText = newFood.foodItem;
	var weightCell = document.createElement("td");
	weightCell.innerText = newFood.weight + "g";

	// combine cells and then append to table body
	// var allCells = cuisineCell.outerHTML + foodItemCell.outerHTML + weightCell.outerHTML;
	row.appendChild(cuisineCell);
	row.appendChild(foodItemCell);
	row.appendChild(weightCell);
	var tbody = document.querySelector("tbody");
	tbody.appendChild(row);
});
