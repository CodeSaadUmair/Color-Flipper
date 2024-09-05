function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgb(${red},${green},${blue})`;

  document.body.style.backgroundColor = color;
}

function color(name) {
  document.body.style.backgroundColor = name;
}

/*
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const random = document.querySelector(".random");

red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});

blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

random.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
});
*/
