const clickerCounterElement = document.getElementById("clicker__counter");
const clickerSpeedElement = document.getElementById("clicker__speed");
const clickerImage = document.getElementById("cookie");
let clickerCounter = parseInt(clickerCounterElement.textContent) + 1;

let lastClickTime = Date.now();

clickerImage.onclick = function () {
  const time = 1000 / (Date.now() - lastClickTime);
  lastClickTime = Date.now();
  clickerImage.width = clickerImage.width === 250 ? 200 : 250;
  clickerCounterElement.textContent = clickerCounter++;
  clickerSpeedElement.textContent = time.toFixed(2);
};
