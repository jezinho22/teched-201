const csv =
	'1,"Johns, Jez", "72, Clarendon Road" \n 2,"Johns, Lily", "18 Le Strange Close, Norwich"\n3,"Johns, Sue","18 Le "Strange" Close, Norwich"';
console.log(csv);

function parse(row) {
	let items = row.split(/"\s*,\s*"/);
	return items;
}
// function parse(row) {
// 	let insideQuote = false,
// 		entries = [],
// 		entry = [];
// 	row.split("").forEach(function (character) {
// 		if (character === '"') {
// 			insideQuote = !insideQuote;
// 		} else {
// 			if (character == "," && !insideQuote) {
// 				entries.push(entry.join(""));
// 				entry = [];
// 			} else {
// 				entry.push(character);
// 			}
// 		}
// 	});
// 	entries.push(entry.join(""));
// 	return entries;
// }

let csvLines = csv.split("\n");
console.log(csvLines[2]);
let csvArray = [];
// csvLines.forEach((row) => {
// 	csvArray.push(parse(row));
// });
// console.log(csvLines);

// console.log(parse(csvLines[0]));
// csvArray.push(parse(csvLines[0]));
// csvArray.push(parse(csvLines[1]));
// csvArray.push(parse(csvLines[2]));

for (i = 0; i < csvLines.length; i++) {
	csvArray.push(parse(csvLines[i]));
}
console.log(csvArray[2]);
