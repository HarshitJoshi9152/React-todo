const fs = require('fs');

const fileStore = "notes.json";

function getNotes() {
	let data = fs.readFileSync(fileStore).toString('utf8');
	data = (data === "") ? "[]" : data;
	return data;
}

function writeNote(note) {
	let n = JSON.parse(getNotes());
	note.id = Date.now();
	n.push(note);
	let d = JSON.stringify(n, null , 4);
	fs.writeFileSync(fileStore, d);
	return 0;
}

function removeNote(id) {
	let n = JSON.parse(getNotes());
	n = n.filter(note => note.id !== id);
	let d = JSON.stringify(n, null , 4);
	fs.writeFileSync(fileStore, d);
	return 0;
}

module.exports = {
	getNotes,
	writeNote,
	removeNote
}


// how do i verify if the request data is correct ?