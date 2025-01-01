const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
const DELTA = 20;

const canvas = document.querySelector("canvas");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

const ctx = canvas.getContext("2d");

function handleMouseDown(event) {
	let { offsetX, offsetY } = event;
	offsetX -= offsetX % DELTA;
	offsetY -= offsetY % DELTA;
	ctx.fillRect(offsetX, offsetY, DELTA, DELTA);
}

ctx.strokeStyle = "rgba(255, 0, 0, 1)";

for (let x = 0; x < CANVAS_WIDTH / DELTA; x++) {
	ctx.beginPath();
	ctx.moveTo(0, x * DELTA);
	ctx.lineTo(CANVAS_WIDTH, x * DELTA);
	ctx.stroke();
}

for (let y = 0; y < CANVAS_HEIGHT / DELTA; y++) {
	ctx.beginPath();
	ctx.moveTo(y * DELTA, 0);
	ctx.lineTo(y * DELTA, CANVAS_HEIGHT);
	ctx.stroke();
}

canvas.addEventListener("mousedown", handleMouseDown);

/**
 * 궁금한점
 *
 * 1. 픽셀 간의 위치가 확실하게 지정이 되는가?
 * 2. 그렇다면 라인 색깔은 어떻게 할까?
 */

/**
 * 추가할 점
 *
 * 1. 색깔 추가하기
 * 2. 배포하기
 * 3. 서버
 */
