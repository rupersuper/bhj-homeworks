const xhr = new XMLHttpRequest();
const fileElem = document.getElementById("file");
const progress = document.querySelector("#progress");

fileElem.addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    uploadFile(file);
  }
});

function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  xhr.upload.addEventListener("progress", function (e) {
    if (e.lengthComputable) {
      const progressValue = (e.loaded / e.total).toFixed(2);
      progress.value = progressValue;
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.onloadend = function () {
    if (xhr.status >= 400) {
      console.log("Ошибка " + this.status);
    } else {
      console.log("Успех " + this.status);
    }
  };

  xhr.send(formData);
}
