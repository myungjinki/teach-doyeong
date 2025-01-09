const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
	const data = [
		{
			x: 1,
			y: 1,
			color: "red",
		},
		{
			x: 25,
			y: 25,
			color: "blue",
		},
	];
	res.send(data);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
