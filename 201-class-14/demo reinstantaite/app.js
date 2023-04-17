console.log("app.js firing");
// this app is for basic constructor creation - working for all pages
const platyList = document.querySelector("#platyList");
const platyForm = document.querySelector("#platyForm");
const allPlats = [];

// constructor for new platypuses
function Platypus(name) {
	this.name = name;
	this.render = function () {
		const listItem = document.createElement("li");
		listItem.textContent = this.name;
		platyList.appendChild(listItem);
	};
}

//form for the user to create new objects
function handleFormSubmit(event) {
	event.preventDefault();
	const newPlat = new Platypus(event.target.newPlat.value);
	allPlats.push(newPlat);
	platyForm.reset();
	newPlat.render();
	localStorage.setItem("allPlats", JSON.stringify(allPlats));
}
