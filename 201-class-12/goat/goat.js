"use strict";
console.log("script linked");

let goatContainer = document.querySelector("section");
let resultButton = document.querySelector("section + div");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");

let clicks = 0;
let maxClicksAllowed = 9;

const state = {
	allGoatsArray: [],
};

function Goat(name, src) {
	this.name = name;
	this.src = src;
	this.views = 0;
	this.clicks = 0;
}

let cruising = new Goat("Cruising Goat", "cruisin-goat");
let float = new Goat("Float Your Goat", "float-your-goat");
let hand = new Goat("Goat out of Hand", "goat-out-of-hand");
let kissing = new Goat("Kissing Goat", "kissing-goat");
let sassy = new Goat("Sassy Goat", "sassy-goat");
let smiling = new Goat("Smiling Goat", "smiling-goat");
let sweater = new Goat("Sweater Goat", "sweater-goat");

state.allGoatsArray.push(
	cruising,
	float,
	hand,
	kissing,
	sassy,
	smiling,
	sweater
);

// random number to help pick random goats
function getRandomNumber() {
	return Math.floor(Math.random() * state.allGoatsArray.length);
}

function renderGoats() {
	//initialise
	let goat1;
	let goat2;
	//ensure two fidderent random nos
	while (goat1 === goat2) {
		goat1 = getRandomNumber();
		goat2 = getRandomNumber();
	}
	image1.src = state.allGoatsArray[goat1].src;
	image2.src = state.allGoatsArray[goat2].src;

	image1.alt = state.allGoatsArray[goat1].name;
	image2.alt = state.allGoatsArray[goat2].name;

	state.allGoatsArray[goat1].views++;
	state.allGoatsArray[goat2].views++;

	console.log(state.allGoatsArray[goat1].views);
}

function handleGoatClick(event) {
	if (event.target === goatContainer) {
		alert("Please click on an image");
	}
	clicks++;
	// work out which goat was clicked
	let clickedGoat = event.target.alt;
	for (let i = 0; i < state.allGoatsArray.length; i++) {
		if (clickedGoat === state.allGoatsArray[i].name) {
			state.allGoatsArray[i].clicks++;
			break;
		}
	}
}

renderGoats();
goatContainer.addEventListener("click", handleGoatClick);
