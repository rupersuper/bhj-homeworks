const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

tabs.forEach((element, index) => {
  element.addEventListener("click", () => {
    tabs.forEach((value) => {
      value.classList.remove("tab_active");
    });
    tabContent.forEach((value) => {
      value.classList.remove("tab__content_active");
    });

    element.classList.add("tab_active");
    tabContent[index].classList.add("tab__content_active");
  });
});
