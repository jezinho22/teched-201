var myForm = document.querySelector("form");
console.log(myForm);
myForm.addEventListener("submit", () => {
	event.preventDefault();
	console.log("hiya");

	console.log(event.target.name.value);
	console.log(event.target.password.value);
	console.log(event.target.email.value);
});
