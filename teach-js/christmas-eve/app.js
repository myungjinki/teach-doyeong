const span = document.querySelector("span");
let christMasEveTime = new Date("2024-12-24:00:00:00+0900");
let today = new Date();
let second = Math.floor(new Date(christMasEveTime - today) / 1000);

function increment() {
  second--;
  const day = Math.floor(second / 86400);
  const hour = Math.floor((second % 86400) / 3600);
  const minute = Math.floor(((second % 86400) % 3600) / 60);
  span.textContent = `${day}d ${hour}h ${minute}m ${second % 60}s`;
}

setInterval(increment, 1000);
