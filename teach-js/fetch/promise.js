const API_URL = "https://yts.mx/api/v2/list_movies.json";

fetch(API_URL)
	.then(response => {
		return response.json();
	})
	.then(json => {
		console.log(json);
	});
