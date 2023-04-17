// get all the platypus from local storage and render to this page
if (localStorage.allPlats) {
	const platypusStored = JSON.parse(localStorage.getItem("allPlats"));
	// loop through the array to render it
	for (let i = 0; i < platypusStored.length; i++) {
		let newPlat = new Platypus(platypusStored[i].name);
		allPlats.push(newPlat);
		newPlat.render();
	}
}

platyForm.addEventListener("submit", handleFormSubmit);
