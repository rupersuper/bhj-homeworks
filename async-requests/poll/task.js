const xhr = new XMLHttpRequest();
const poolTitle = document.querySelector(".poll__title");
const poolAnswers = document.querySelector(".poll__answers");

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");

xhr.onload = function () {
  if (this.status === 200) {
    const pool = JSON.parse(this.response);
    const {
      data: { answers, title },
    } = pool;

    answers.forEach((answer) => {
      poolTitle.innerHTML = title;
      const poolAnswer = `<button class="poll__answer">${answer}</button>`;
      poolAnswers.innerHTML += poolAnswer;
    });

    document.querySelectorAll(".poll__answer").forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Спасибо, ваш голос засчитан!");
        location.reload();
      });
    });
  } else {
    console.log("Ошибка " + this.status);
  }
};

xhr.send();
