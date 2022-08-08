let counterValue = 0;

const value = document.querySelector('#value');
const buttonMinus = document.querySelector(`[data-action="decrement"]`);
const buttonPlus = document.querySelector(`[data-action="increment"]`);



buttonPlus.addEventListener('click', onClickPlus);
buttonMinus.addEventListener('click', onClickMinus);


function onClickPlus() {
    counterValue += 1;
    value.textContent = counterValue;
};

function onClickMinus() {
    counterValue -= 1;
    value.textContent = counterValue;
};

