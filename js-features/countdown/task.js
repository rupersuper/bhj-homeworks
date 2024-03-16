const timerElement = document.getElementById("timer");
let timeLeft = parseInt(timerElement.textContent);

function updatetimer() {
  timeLeft--;
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    timeLeft = 0;
    alert("Вы победили в конкурсе!");
  }

  timerElement.textContent = timeLeft;
}

const timerInterval = setInterval(updatetimer, 1000);
