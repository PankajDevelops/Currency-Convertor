const button = document.getElementById("changeColorButton");
const heading = document.querySelector(".newClass h1");

let isBlue = true;

button.addEventListener("click", function () {
  if (isBlue) {
    heading.classList.remove("blue");
    heading.classList.add("red");
  } else {
    heading.classList.remove("red");
    heading.classList.add("blue");
  }
  isBlue = !isBlue;
});
