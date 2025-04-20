const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const DELTA = 20;

const canvas = document.querySelector("canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext("2d");
let myColor;

function handleMouseDown(event) {
	let { offsetX, offsetY } = event;
	offsetX -= offsetX % DELTA;
	offsetY -= offsetY % DELTA;
	ctx.fillStyle = myColor;
	ctx.fillRect(offsetX, offsetY, DELTA, DELTA);
	// 서버로 픽셀 정보 전송
	postPixel(offsetX, offsetY, myColor);
}

ctx.strokeStyle = "rgba(255, 0, 0, 1)";

for (let i = 0; i <= CANVAS_WIDTH; i += DELTA) {
	ctx.beginPath();
	ctx.moveTo(i, 0);
	ctx.lineTo(i, CANVAS_HEIGHT);
	ctx.stroke();
}

for (let i = 0; i <= CANVAS_HEIGHT; i += DELTA) {
	ctx.beginPath();
	ctx.moveTo(0, i);
	ctx.lineTo(CANVAS_WIDTH, i);
	ctx.stroke();
}

canvas.addEventListener("mousedown", handleMouseDown);

// https://lospec.com/palette-list/r-place
const palette = [
	{ className: ".color_FFFFFF", color: "#FFFFFF" },
	{ className: ".color_E4E4E4", color: "#E4E4E4" },
	{ className: ".color_888888", color: "#888888" },
	{ className: ".color_222222", color: "#222222" },
	{ className: ".color_FFA7D1", color: "#FFA7D1" },
	{ className: ".color_E50000", color: "#E50000" },
	{ className: ".color_E59500", color: "#E59500" },
	{ className: ".color_A06A42", color: "#A06A42" },
	{ className: ".color_E5D900", color: "#E5D900" },
	{ className: ".color_94E044", color: "#94E044" },
	{ className: ".color_02BE01", color: "#02BE01" },
	{ className: ".color_00D3DD", color: "#00D3DD" },
	{ className: ".color_0083C7", color: "#0083C7" },
	{ className: ".color_0000EA", color: "#0000EA" },
	{ className: ".color_CF6EE4", color: "#CF6EE4" },
	{ className: ".color_820080", color: "#820080" },
];

palette.forEach(({ className, color }) => {
	const element = document.querySelector(className);
	element.addEventListener("click", () => {
		myColor = color;
	});
});

async function getPixels() {
	const response = await fetch("http://54.226.164.53:3001/");
	const data = await response.json();
	return data;
}

async function postPixel(x, y, color) {
	pixel = {
		x,
		y,
		color,
	};
	const response = await fetch("http://54.226.164.53:3001/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(pixel),
	});
	const data = await response.json();
	console.log(data);
}

function drawPixel(x, y, color) {
	ctx.fillStyle = color;
	x -= x % DELTA;
	y -= y % DELTA;
	ctx.fillRect(x, y, DELTA, DELTA);
}

async function init() {
	const data = await getPixels();
	data.forEach(pixel => drawPixel(pixel.x, pixel.y, pixel.color));
}

init();

setInterval(init, 500);
