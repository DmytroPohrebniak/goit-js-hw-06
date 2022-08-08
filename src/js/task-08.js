const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, password } 
    } = event.currentTarget;


    if (email.value === "" || password.value === "") {
    return alert('Please fill in all the fields!') 
    }

    const newForm = { email: email.value, Password: password.value }
    console.log(newForm)
    event.currentTarget.reset()
}  



