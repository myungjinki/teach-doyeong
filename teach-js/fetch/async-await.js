// https://yts.mx/api/v2/list_movies.json

/**
 * 우리의 목표: 위 API를 사용해 영화 데이터를 가져오기
 */

const API_URL = "https://yts.mx/api/v2/list_movies.json";

async function getMovie() {
	const response = await fetch(API_URL);
	const json = await response.json();
	console.log(json.data.movies[0]);
}

getMovie();
