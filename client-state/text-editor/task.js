const textArea = document.querySelector("#editor");
const btn = document.querySelector(".btn");

textArea.value = localStorage.getItem("text");

textArea.addEventListener("change", (event) => {
  localStorage.setItem("text", event.target.value);
});

btn.addEventListener("click", () => {
  textArea.value = null;
  localStorage.clear();
});
