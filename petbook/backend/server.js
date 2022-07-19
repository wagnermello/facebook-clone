const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const { readdirSync } = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
	.connect(process.env.DATABASE_URL, {
		useNewUrlParser: true,
	})
	.then(() => console.log("Database connect successfuly."))
	.catch((err) => console.log("Error to connect to MongoDB.\n", err));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is listening in the port ${PORT}`);
});
