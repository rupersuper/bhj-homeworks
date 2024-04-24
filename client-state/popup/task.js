const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");

closeBtn.addEventListener("click", () => setCookie("modalClose"));

if (getCookie("modalClose") === "true") {
  modal.classList.remove("modal_active");
} else {
  modal.classList.add("modal_active");
}

function setCookie(name) {
  modal.classList.remove("modal_active");
  document.cookie = name + " = " + "true";
}

function getCookie(name) {
  const item = document.cookie.split("; ");
  const cookie = item.find((p) => p.startsWith(name + "="));
  if (cookie) {
    return cookie.substr(name.length + 1);
  }
  return null;
}
