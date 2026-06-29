let nameInput, emailInput, messageInput;

function colorTab(tab) {
    let elem = document.getElementById('selected-tab');
    if (elem != null)
        elem.id = "";

    tab.id = "selected-tab";
}

function validateInput(input) {
    console.log(input.value)
    return input.value != '';
}

function validateEmail(input) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateInput(input) && regex.test(input.value)
}

function submitForm(form) {
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert(`Mensagem enviada com sucesso!`);
}

function onFormSubmit(form) {
    let err = [];
    if (!validateInput(nameInput))    err.push('Nome inválido');
    if (!validateEmail(emailInput))   err.push('Email inválido');
    if (!validateInput(messageInput)) err.push('Mensagem inválida');

    if (err.length == 0) {
        submitForm(form);
        return;
    }

    alert(`Não foi possível enviar a mensagem: \n${err.join('\n')}`);
}

window.onload = (e) => {
    nameInput = document.getElementById('name-input');
    emailInput = document.getElementById('email-input');
    messageInput = document.getElementById('message-input');
};