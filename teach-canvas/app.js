const canvas = document.querySelector("canvas");
canvas.width = 800;
canvas.height = 800;

const ctx = canvas.getContext("2d");
ctx.lineWidth = 2;

canvas.addEventListener("mousemove", handleMove);
canvas.addEventListener("mousedown", handleStartPainting);
