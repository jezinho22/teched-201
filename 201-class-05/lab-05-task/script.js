console.log("Script loading");
function getInfo() {
	// debug
	console.log("Button working");

	// prompt user for info
	var myName = prompt("What is your name?");
	var myAge = prompt("What is your age?");
	var myCountry = prompt("What country would you say you are from?");
	var myColour = prompt("What is your favourite colour?");

	// get list elements from DOM - as a list/array
	var listItems = document.getElementById("list1").getElementsByTagName("li");

	// insert messages into lit elements
	document.getElementById("header").innerText = myName;
	listItems[0].innerText = `Welcome, ${myName}. I have named this page in your honour`;
	listItems[1].innerText = `I see you are ${myAge} years old`;
	listItems[2].innerText = `And that you come from ${myCountry}`;
	listItems[3].innerText = `For your amusement, the font colour has been changed to ${myColour}, your favourite colour!`;

	// change font colour to match user's response
	document.getElementById("list1").style.color = myColour;
}
// gets 4 more pieces of info
function getExtraInfo() {
	// debug
	console.log("Button working");

	// prompt user for info
	var myEducation = prompt("What is your highest education qualification?");
	var myLanguage = prompt(
		"What is your LEAST favourite programming language?"
	);
	var myJob = prompt("What is your dream job?");
	var myHoliday = prompt("What is your dream holiday destination?");

	// check user info for specific input on language & create message
	if (
		myLanguage == "Javascript" ||
		myLanguage == "JS" ||
		myLanguage == "js" ||
		myLanguage == "javascript"
	) {
		var languageMessage = `Is that you, V? Come on, everyone loves ${myLanguage}`;
	} else {
		var languageMessage = `Oh yeah, everyone hates ${myLanguage}!`;
	}

	// get list elements from DOM - as a list/array
	var listItems = document.getElementById("list2").getElementsByTagName("li");

	// insert messages into lit elements
	listItems[0].innerText = `Well done on achieving ${myEducation}`;
	listItems[1].innerText = languageMessage;
	listItems[2].innerText = `Keep working hard, and I am sure that one day you can be a ${myJob}`;
	listItems[3].innerText = `Hey, that's my favourite too. Come on let's go to ${myHoliday}`;
}
