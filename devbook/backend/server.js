const express = require("express");
const cors = require("cors");
const app = express();

let allowed = ["http://localhost:3000", "other links"];

function option(req, res) {
	let tmp;
	let origin = req.header("Origin");
	if (allowed.indexOf(origin) > -1) {
		tmp = {
			origin: true,
			optionSuccessStatus: 200,
		};
	} else {
		tmp = {
			origin: "do not exist",
		};
	}
	res(null, tmp);
}

app.use(cors(option));

app.get("/", (req, res) => {
	res.send("Server is ok. This is the home page.");
});

app.get("/test", (req, res) => {
	res.send("This is the test page");
});

app.listen(8000, () => {
	console.log("Server is listening.");
});
