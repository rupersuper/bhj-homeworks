const revealElement = document.querySelectorAll(".reveal");

function isVisible(el) {
  const { top, bottom } = el.getBoundingClientRect();

  if (bottom < 0) {
    return;
  }

  if (top > window.innerHeight) {
    return;
  }
  return true;
}

window.addEventListener("scroll", () => {
  revealElement.forEach((element) => {
    if (isVisible(element)) {
      element.classList.add("reveal_active");
    } else {
      element.classList.remove("reveal_active");
    }
  });
});