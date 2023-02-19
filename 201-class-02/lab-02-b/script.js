// 1️⃣  | Create a button and name it as guess
// 2️⃣  | Add an event listener and event handler to it
// 3️⃣  | Create a new variable and and a number to it/assign a value.
// 4️⃣  | when someone clicks on the button they should get a popup
// 5️⃣  | this popup should ask us a number
// 6️⃣  | the number should be guessed in six attempts

// plays a number game
function getGuess() {
	console.log("Guess is working");
	// get a random number 0 to 100
	var myNumber = Math.round(Math.random() * 100);
	console.log(myNumber);
	// a checking variable for winner, a list of list elements available
	var winner = 0;
	var guessList = document.getElementById("list3").getElementsByTagName("li");

	// get first guess
	var myGuess = prompt(
		"Can you guess my number? It's between 0 and 100. You have 6 guesses."
	);

	// loop through 5 times for 5 more guesses
	for (var guessNumber = 0; guessNumber < 5; guessNumber++) {
		// add each to the page, in a list element, using the for counter to select

		// compare guess with number, and respond
		if (myGuess == myNumber) {
			alert("Whoop, whoop! You guessed my number. It was ", myNumber);
			var winner = 1;
			break;
		} else if (myGuess > myNumber) {
			myGuess = prompt(
				`Too high. Try something lower. You have ${
					5 - guessNumber
				} guesses left`
			);
		} else {
			myGuess = prompt(
				`Too low. Try something higher. You have ${
					5 - guessNumber
				} guesses left`
			);
		}
		guessList[guessNumber].innerText = myGuess;
		console.log(guessList[guessNumber].innerText);
	}

	// if loop finishes without number being guessed ...
	if (winner == 0) {
		alert(
			"Too bad. You ran out of guesses. Click the Guess button to play again"
		);
	}
}

// 1️⃣  | create four prompts
// 2️⃣  | each prompt should ask your name, age, country and fav color respectively
// 3️⃣  | Create a LIST in your html
// 4️⃣  | This list should contain four list items with name, age, country and fav color
// 5️⃣  | the values you enter in your prompt should be rendered in the frontend and the
//        text color should be the fav color you entered

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
	document.getElementById("heading").innerText = myName;
	(listItems[0].innerText = "Welcome: "), myName;
	listItems[1].innerText = `I see you are ${myAge} years old`;
	listItems[2].innerText = `And that you come from ${myCountry}`;
	listItems[3].innerText = `For your amusement, the font colour has been changed to ${myColour}, your favourite colour!`;

	// change font colour to match user's response
	document.getElementById("list1").style.color = myColour;
}

// 1️⃣  | Paste your yesterdays code into your replit or vscode
// 2️⃣  | Create a click event handler and listener
// 3️⃣  | Now, when the click event happens we need to get four prompts --> education, favorite programming language, future dream role , holiday destination
// 4️⃣  | Now, when someone enters the favorite language of their own choice they needs to get an alert saying hey you have selected the favorite language....
// 5️⃣  | After all the prompts are done render that to the frontend.

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
function guessMyBirthMonth() {
	// list of possible answers - tbh you could just reduce guess to lower case, and avoid the list
	var answer = ["January", "JANUARY", "january", "Jan", "jan", "JAN"];
	// var to track winning, and to take guesses
	var guessedRight = 0;
	var monthGuess = "";
	var guesses = 0;

	// loop the guessing until guessed or had 6 guesses
	while (guessedRight == 0 && guesses < 6) {
		monthGuess = prompt(
			`Can you guess what month I was born in? You have ${
				6 - guesses
			} guesses.`
		);

		// check answer against list of possibles - loop through possibles
		for (i = 0; i < answer.length; i++) {
			if (monthGuess.trim() == answer[i]) {
				guessedRight = 1;
				alert(
					"You got it! I was born in January. Not only that but my birthday is also in January! Every year!"
				);
			}
		}
		guesses++;
	}
}

// 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟

// As a user, I would like to view a series of data related to the site owners interest
// so that the I can quickly view more information about them.
// 1️⃣ Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML.
// Some ideas that you can include could be top ten movies, top ten favorite places,
// or top ten places to visit. You may choose to do whatever top ten list that you wish.
// 2️⃣ Convert your work experience and education summary into an unordered list using HTML

// As a user, I would like to be guided to an answer through a series of feedback responses
// so that I can learn more about the site owner.
// 3️⃣ Add a 6th question to the guessing game that takes in a numeric input by prompting the user
// to guess a number.
// - Indicates through an alert if the guess is “too high” or “too low”.
// - It should give the user exactly four opportunities to get the correct answer.
// - After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

// As a user, I would like to guess the answer to a question that could have many possibilities
// so that I can have fun with with a guessing game.
// 4️⃣ Add a 7th question that has multiple possible correct answers that are stored in an array.
// - Give the user 6 attempts to guess the correct answer.
// - The guesses will end once the user guesses a correct answer or they run out of attempts.
// - Display all the possible correct answers to the user.
// - Consider using a loop of some sort for this question.

// As a user, I would like to know my final score so that I can know how well I did.
// 5️⃣ Keep track of the total number of correct answers. At the end tell them how many they got correct
// out of the 7 questions asked.
// 6️⃣ Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.

// - Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.
// - Add a screenshot of your score to your README.md file.

// - In addition to the user stories stated above, continue to use console.logs throughout the code to
//  track the questions that are being asked to the user, and add addtional CSS to style your HTML page.
// - Stay within scope of what was taught so far in class.
// - Do not write functions within your application.
// - Avoid the use of “helper” methods such as .includes() and .join().

// Stretch Goals
// After completing all of the requirements listed above, you may optionally challenge yourself further
// by implementing some or all of the following into your application.

// 1️⃣ Attempt to make your code more DRY by putting all of the questions, answers, and responses
// to the first five yes/no questions into arrays (or even one huge multidimensional array),
// and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
// 2️⃣ Make the number-guessing question use a random number as its correct answer.
