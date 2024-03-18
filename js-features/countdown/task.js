const timerElement = document.getElementById("timer");
let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
  let hours = Math.floor(timeLeft / 3600);
  let minutes = Math.floor((timeLeft % 3600) / 60);
  let seconds = timeLeft % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  hours = hours < 10 ? "0" + hours : hours;

  if (timeLeft < 0) {
    clearInterval(timerInterval);
    // alert("Вы победили в конкурсе!");
    window.location.href =
      "https://github.com/rupersuper/bhj-homeworks/archive/refs/heads/master.zip";
  }

  timerElement.textContent = `${hours}:${minutes}:${seconds}`;
  timeLeft--;
}

const timerInterval = setInterval(updateTimer, 1000);
