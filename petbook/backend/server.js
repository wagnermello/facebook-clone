const express = require("express");
const cors = require("cors");
const app = express();

let allowed = ["http://localhost:3000", "another link"];

function options(req, res) {
	let tmp;
	let origin = req.header("Origin");

	if (allowed.indexOf(origin) > -1) {
		tmp = {
			origin: true,
			optionSuccessStatus: 200,
		};
	} else {
		tmp = {
			origin: "don't exist",
		};
	}
	res(null, tmp);
}
app.use(cors(options));

app.get("/", (req, res) => {
	res.send("Welcome to the server...");
});

app.get("/example", (req, res) => {
	res.send("Example...");
});

app.listen(8000, () => {
	console.log("Server is listening");
});
