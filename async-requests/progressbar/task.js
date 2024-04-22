const xhr = new XMLHttpRequest();
const inputFile = document.querySelector("#file");
const progress = document.querySelector("#progress");

inputFile.addEventListener("change", function () {
  let file = this.files[0];
  if (file) {
    uploadFile(file);
  }
});

function uploadFile(file) {
  const formData = new FormData();
  formData.append("file", file);

  xhr.upload.addEventListener("progress", function (event) {
    if (event.lengthComputable) {
      const progressValue = (event.loaded / event.total).toFixed(2);
      progress.value = progressValue;
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.onloadend = function () {
    if (this.status >= 400) {
      console.log("Ошибка " + this.status);
    } else {
      console.log("Успех " + this.status);
    }
  };

  xhr.send(formData);
}
