let single = "Wheres my bandit hat?";
let double = "Wheres my bandit hat?";
let amount = 6;
let price = 4.99;
// Addition
5 + 5;
Math.random();
let name = "Codecademy";
console.log(`Hello, ${name}`);
// Prints: Hello, Codecademy
console.log(`Billy is ${6 + 8} years old.`);
// Prints: Billy is 14 years old.

function helloWorld() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("Hello World!");
		}, 2000);
	});
}

async function msg() {
	const msg = await helloWorld();
	console.log("Message:", msg);
}

msg(); // Message: Hello World! <-- after 2 seconds;
