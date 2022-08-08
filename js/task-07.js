const input = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

input.addEventListener('input', onSizeControl);

function onSizeControl () {
    textSize.style.fontSize = `${input.value}px`;
}