class Clown {
	constructor(name, nose_colour, hair_colour, location, laugh) {
		this.name = name;
		this.nose_colour = nose_colour;
		this.hair_colour = hair_colour;
		this.location = location;
		this.laugh = laugh;
	}
	clownNoise() {
		return "Parp, parp! Clown coming!";
	}
}
let krusty = new Clown(
	"Krusty the Clown",
	"red",
	"blue",
	"The Simpsons",
	"Huh huh huh huh!"
);
// let clownArray = [];
// clownArray.push({ name: krusty.name, details: krusty });
// console.log(clownArray[0].details);
// function addClown(name, object) {
// 	let newObj = { name: newClown };
// 	clownArray.push(newObj);
// }
// addClown(newClown.name, newClown);
// this also may work:   objClowns.push({name:newClown.name, details:newClown});
// actually none of it works because you can't push to an object

let tumble = new Clown("Mr Tumble", "red", "brown", "CBeebies", "silent");

const ronald = new Clown(
	"Ronald McDonald",
	"red",
	"red",
	"McDonalds",
	"silent"
);

const pennywise = new Clown(
	"Pennywise",
	"red",
	"orange",
	"Derry, Maine",
	"ha ha ha ha ha ha ha"
);

const bob = new Clown(
	"Sideshow Bob",
	"skin-colour",
	"red",
	"The Simpsons",
	"huh, huh, huh, huh, HAH, HAH, HAH"
);

console.log(krusty.clownNoise());
console.log(krusty);
console.log(tumble);
console.log(ronald);
console.log(pennywise);
console.log(bob);
