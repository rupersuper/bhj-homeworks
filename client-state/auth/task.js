// document.addEventListener('DOMContentLoaded', function () {
const form = document.querySelector("#signin__form");
const singnInBlock = document.querySelector("#signin");
const welcomeBlock = document.querySelector("#welcome");
const userId = document.querySelector("#user_id");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвратить отправку формы

  const formData = new FormData(form); // Получить данные из формы
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  // Отправить запрос на сервер
  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formDataObject),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка HTTP: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      if (data.success === true) {
		singnInBlock.classList.remove("signin_active");
        welcomeBlock.classList.add("welcome_active");
        userId.innerHTML = data.user_id;
      } else {
        alert("Не правильный логин либо пароль");
      }

      // Обработать ответ от сервера
      console.log(data); // Здесь можно выполнить нужные действия, например, перенаправление на другую страницу
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
// });
