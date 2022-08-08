
const bodyColor = document.querySelector('body');
const colorCode = document.querySelector('.color');
const buttonChange = document.querySelector('.change-color');

buttonChange.addEventListener('click', onBgColorChange);

function onBgColorChange() {
  let color = getRandomHexColor();
  colorCode.textContent = color;
  bodyColor.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}