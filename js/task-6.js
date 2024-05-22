function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const inputElement = controls.firstElementChild;
const btnCreateElem = inputElement.nextElementSibling;
// const btnCreateElem = document.querySelector("button[data-create]");
// const btnDestroyElem = document.querySelector("button[data-destroy]");
const btnDestroyElem = controls.lastElementChild;
const boxesContainer = document.querySelector("#boxes");

btnCreateElem.addEventListener("click", (el) => {
  const value = inputElement.value;
  if (value >= 1 && value <= 100) {
    createBoxes(value);
    inputElement.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});

btnDestroyElem.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
