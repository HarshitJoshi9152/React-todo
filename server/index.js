const http = require("http");
const {getNotes, writeNote} = require("./notes.js")


const server = http.createServer((req, res) => {
	switch (req.url) {
		case "/api/getNotes": {
			let notes = getNotes();
			notes = (notes === "") ? "no notes here !" : notes;
			res.end(notes);
			break;
		}
		
		case "/api/addNote": {
			(req.method !== "POST" && console.log("must be a POST request"));
			let data = "";
			req.on("data", (chunk) => {
				data += chunk;
			})
			req.on("end", () => {
				let pD = JSON.parse(data);
				writeNote(pD);
				res.end(data);
			})
			break;
		}

		default:
			break;
	}
});

server.listen(2020);
