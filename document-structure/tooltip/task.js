const hasTooltip = document.querySelectorAll(".has-tooltip");
const tooltip = document.createElement("div");
tooltip.className = "tooltip";

hasTooltip.forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    el.after(tooltip);
    if (tooltip.textContent === el.title) {
      tooltip.classList.toggle("tooltip_active");
    } else {
      tooltip.textContent = el.title;
      tooltip.classList.add("tooltip_active");
    }
  });
});
