// let objPageData = {};
// // combine elements scraped from webpage into nested objects
// function getData() {
// 	console.log("getData is working");
// // get from page
// 	let elements = document.querySelectorAll("h3");
// 	let elements2 = document.querySelectorAll("h3 + p");
// 	let elements3 = document.querySelectorAll("h3 + p + div");
// // add to object, unless undefined - in case of elements3
// 	for (index = 0; index < elements.length; index++) {
// 		objPageData[elements[index].innerText] = {
// 			explanation: elements2[index].innerText,
// 		};
// 		console.log("breakpoint");
// 		if (elements3 !== undefined) {
// 			objPageData[elements[index].innerText] = {
// 				examples: elements3[index].innerText,
// 			};
// 		}
// 	}
// }

let v = Array.from(document.querySelectorAll("code"));
v.unshift("/*");
let w = v.reduce((whole, item) => {
	return whole + item.outerHTML;
});

//console.table(w);
document.body.innerHTML = w + "*/";

// let obj = {};

// let d = ["one", "two", "three"];

// obj[d[0]] = { explanation: d[1], misspellings: d[2] };
// console.table(obj);

// <p id="myText">Hello World</p>
// <button class="btn" onclick="copyContent()">Copy!</button>
