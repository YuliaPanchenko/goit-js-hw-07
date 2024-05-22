const inputElem = document.querySelector("#name-input");
console.log(inputElem);

const spanElem = document.querySelector("#name-output");
inputElem.addEventListener("input", onInputChange);
function onInputChange() {
  const value = inputElem.value.trim();
  if (value === "") {
    spanElem.textContent = "Anonymous";
  } else {
    spanElem.textContent = value;
  }
}
