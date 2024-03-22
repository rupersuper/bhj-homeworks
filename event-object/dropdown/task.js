const menu = document.querySelector(".dropdown__list");
const btn = document.querySelector(".dropdown__value");
const dropdownItems = document.querySelectorAll(".dropdown__link");

btn.addEventListener("click", () => {
  menu.classList.add("dropdown__list_active");
});

dropdownItems.forEach((value) => {
  value.addEventListener("click", (event) => {
    event.preventDefault();
    btn.textContent = value.textContent;
    menu.classList.toggle("dropdown__list_active");
  });
});
