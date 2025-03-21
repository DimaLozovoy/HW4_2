document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const image = document.getElementById("image");

  const sizeChange = _.debounce(() => {
    image.style.width = `${slider.value}%`;
    if (slider.value < 40) {
      image.src = "image/meanOfJustice.jpg";
    } else if (slider.value > 40 && slider.value < 60) {
      image.src = "image/niceKnife.jpg";
    } else {
      image.src = "image/standingHereIRealize.jpg";
    }
  }, 300); // Тута міняємо картинки

  slider.addEventListener("input", () => {
    sizeChange();
    console.log(slider.value);
  }); // Тута міняємо розміри

  const box = document.getElementById("box");
  const area = document.getElementById("boxArea");

  const moveBox = _.debounce((X, Y) => {
    if (document.elementFromPoint(X, Y) == area) {
      box.style.left = X - 50 + "px";
      box.style.top = Y - 550 + "px";
    }
  }, 100); // Рухаємо квадратик за курсором
  document.addEventListener("mousemove", (event) => {
    moveBox(event.clientX, event.clientY);
  }); // Ну і кординати курсора
});
