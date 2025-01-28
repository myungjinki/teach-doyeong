const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
let pixels = [];

app.use(
	cors({
		origin: "*",
	})
);

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
	console.log(pixels);
	res.send(pixels);
});

app.post("/", (req, res) => {
	pixels.push(req.body);
	res.send(req.body);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
