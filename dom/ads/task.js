const rotator = document.querySelectorAll(".rotator__case");
let index = 0;

function ads() {
  rotator[index].classList.remove("rotator__case_active");
  index = (index + 1) % rotator.length;
  rotator[index].classList.add("rotator__case_active");

  const color = rotator[index].getAttribute("data-color");
  rotator[index].style.color = color;

  const speed = parseInt(rotator[index].getAttribute("data-speed"));

  setTimeout(ads, speed);
}

ads();