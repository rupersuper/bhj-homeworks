const form = document.querySelector("#signin__form");
const singnInBlock = document.querySelector("#signin");
const welcomeBlock = document.querySelector("#welcome");
const userId = document.querySelector("#user_id");

if (localStorage.getItem("user_id")) {
  singnInBlock.classList.remove("signin_active");
  welcomeBlock.classList.add("welcome_active");
  userId.innerHTML = localStorage.getItem("user_id");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

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
        localStorage.setItem("user_id", data.user_id);
      } else {
        alert("Не правильный логин либо пароль");
        form.reset();
      }
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
});
