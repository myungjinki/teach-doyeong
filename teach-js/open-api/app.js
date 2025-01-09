const div = document.querySelector("div");

async function fetchMovies() {
	const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year");
	const json = await response.json();
	div.textContent = json.data.movies[0].title;
}

fetchMovies();
