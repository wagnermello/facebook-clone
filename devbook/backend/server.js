const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

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
	.then(() => console.log("Database connected successfully"))
	.catch((err) => console.log("Error to conect to MongoDB.\n", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server ir running on port ${PORT}`);
});
