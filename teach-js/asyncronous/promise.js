function getPromise() {
	return new Promise((resolve, reject) => {
		const data = [1, 2, 3];
		setTimeout(() => {
			resolve(data);
		}, 2000);
	});
}

getPromise().then(data => {
	console.log(data);
});

async function getAsync() {
	const data = await getPromise();
	console.log(data);
}
