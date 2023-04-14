"use strict";
console.log("script firing");

let settings = {
	darkMode: false,
	comment: "",
};

let mode = document.querySelectorAll(".mode");
let details = document.querySelectorAll("details");
let comment = document.querySelector("#comment");

function enterTheDarkness() {
	let body = document.querySelector("body");
	let welcome = document.querySelector("#welcome");
	let button = document.querySelector("#darkButton");
	body.classList.remove("light");
	welcome.classList.remove("light");
	body.classList.add("dark");
	welcome.classList.add("dark");
	button.setAttribute("checked", "checked");
	settings.darkMode = true;
    saveSettings();
}

function enterTheLight() {
	let body = document.querySelector("body");
	let welcome = document.querySelector("#welcome");
	let button = document.querySelector("#lightButton");
	body.classList.remove("dark");
	welcome.classList.remove("dark");
	body.classList.add("light");
	welcome.classList.add("light");
	button.setAttribute("checked", "checked");
	settings.darkMode = false;
    saveSettings();
}

function loadSettings(){
    let savedSettings = localStorage.getItem('settings');
    if(savedSettings){
        console.log(savedSettings);
        settings = JSON.parse(savedSettings);
        console.log(settings);
}

function saveSettings(){
    let stringified = JSON.stringify(settings);
    localStorage.setItem('settings',stringified);
}

function pageLoad(){
    let savedSettings = localStorage.getItem('settings')
    if(!savedSettings){
        return; // same as break
    }
    loadSettings();
    if(settings.darkMode){
        enterTheDarkness();
    }else{
        enterTheLight();
    }
    comment.value = settings.comment;
}

comment.addEventListener('input',function(){
    //input event fires when input changes
    settings.comment = comment.value;
    saveSettings();
})
for (let i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function () {
		if (this.value === "dark") {
			enterTheDarkness();
		}
		if (this.value === "light") {
			enterTheLight();
		}
	});
}

// localStorage.clear()