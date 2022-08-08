const textInput = document.querySelector('#validation-input');
const textLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', onRemoveInputFocus);

function onRemoveInputFocus(event) {
    if (event.currentTarget.value.length === Number(textLength)) {
        textInput.classList.remove("invalid");
        textInput.classList.add("valid");
        
    } else {
        textInput.classList.remove("valid");
        textInput.classList.add("invalid");
        
    }
}
