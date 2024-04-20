const loader = document.querySelector("#loader");
const itemsContainer = document.querySelector("#items");
const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.onload = function () {
  const valute = JSON.parse(xhr.response).response.Valute;
  for (const currencyCode in valute) {
    if (valute.hasOwnProperty(currencyCode)) {
      const item = valute[currencyCode];
      //   console.log(item.CharCode);
      const code = item.CharCode;
      const value = item.Value;
      const itemValue = `<div class="item"><div class="item__code">${code}</div><div class="item__value">${value}</div><div class="item__currency">руб.</div></div>`;
      itemsContainer.innerHTML += itemValue;
    }
  }
};

xhr.send();
