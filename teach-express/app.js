const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/api/v2/list_movies.json", (req, res) => {
	res.send("Hi there!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
