const fs = require('fs');

const fileStore = "notes.json";

function getNotes() {
	let data = fs.readFileSync(fileStore).toString('utf8');
	data = (data === "") ? "[]" : data;
	return data;
}

function writeNote(note) {
	let n = JSON.parse(getNotes());
	n.push(note);
	let d = JSON.stringify(n, null , 4);
	fs.writeFileSync(fileStore, d);
	return 0;
}

module.exports = {
	getNotes,
	writeNote
}
