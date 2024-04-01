const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
const colorText = document.querySelectorAll(".book__control_color > a");
const colorBackground = document.querySelectorAll(
  ".book__control_background > a"
);

fontSize.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    // const { size, textColor, bgColor } = event.target.dataset;

    fontSize.forEach((element) => {
      element.classList.remove("font-size_active");
    });

    element.classList.add("font-size_active");

    if (element.getAttribute("data-size") === "small") {
      book.classList.add("book_fs-small");
      book.classList.remove("book_fs-big");
    } else if (element.getAttribute("data-size") === "big") {
      book.classList.add("book_fs-big");
      book.classList.remove("book_fs-small");
    } else {
      book.classList.remove("book_fs-small");
      book.classList.remove("book_fs-big");
    }
  });
});

colorText.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    colorText.forEach((element) => {
      element.classList.remove("color_active");
    });

    element.classList.add("color_active");

    if (element.getAttribute("data-text-color") === "gray") {
      book.classList.add("book_color-gray");
      book.classList.remove("book_color-whitesmoke");
    } else if (element.getAttribute("data-text-color") === "whitesmoke") {
      book.classList.add("book_color-whitesmoke");
      book.classList.remove("book_color-gray");
    } else {
      book.classList.add("book_color-black");
      book.classList.remove("book_color-whitesmoke");
      book.classList.remove("book_color-gray");
    }
  });
});

colorBackground.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    colorBackground.forEach((element) => {
      element.classList.remove("color_active");
    });

    element.classList.add("color_active");

    if (element.getAttribute("data-bg-color") === "gray") {
      book.classList.add("book_bg-gray");
      book.classList.remove("book_bg-black");
    } else if (element.getAttribute("data-bg-color") === "black") {
      book.classList.add("book_bg-black");
      book.classList.remove("book_bg-gray");
    } else {
      book.classList.remove("book_bg-black");
      book.classList.remove("book_bg-gray");
    }
  });
});
