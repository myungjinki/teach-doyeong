const result = document.querySelector(".result");
const form = document.querySelector("form");
const num1 = document.querySelector(".num-1");
const num2 = document.querySelector(".num-2");
const opSum = document.querySelector(".op-sum");
const opEq = document.querySelector(".op-eq");
const reset = document.querySelector(".reset");
const erase = document.querySelector(".erase");

reset.addEventListener("click", e => {
	result.textContent = "0";
});

erase.addEventListener("click", e => {
	result.textContent = result.textContent.slice(1, result.textContent.length);
});

form.addEventListener("submit", e => {
	e.preventDefault();
});

num1.addEventListener("click", e => {
	result.textContent += "1";
});
num2.addEventListener("click", e => {
	result.textContent += "2";
});
opSum.addEventListener("click", e => {
	result.textContent += "+";
});
opEq.addEventListener("click", e => {
	result.textContent = eval("console.log('hi')");
});
