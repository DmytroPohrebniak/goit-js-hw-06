function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
const inputEl = document.querySelector('#controls>input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxEl = document.querySelector("#boxes");

btnCreateEl.addEventListener("click", create);
btnDestroyEl.addEventListener("click", destroy);

function createBoxes(value) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < value; i += 1) {
    const size = 30 + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `margin-top: 10px; margin-left: auto; margin-right: auto; width: ${size}px; height: ${size}px; 
      background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  boxEl.appendChild(fragment);
}

function create() {
  const value = inputEl.value;
  createBoxes(value);
}

function destroy() {
  boxEl.textContent = "";
}