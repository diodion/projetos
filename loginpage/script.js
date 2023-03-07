const usuario = document.getElementById('usuario');
const senha = document.getElementById('senha');
const form = document.getElementById('form');
const erroElement = document.getElementById('erro');

form.addEventListener('submit', (e) => {
    let mensagens = []

    if (senha.value.length <= 7) {
        mensagens.push('Senha precisa ser maior que 7 caracteres.')
    }

    if (senha.value.length >= 20) {
        mensagens.push('Senha precisa ser menor que 20 caracteres.')
    }

    if (mensagens.length > 0) {
    e.preventDefault()
    erroElement.innerText = mensagens.join(', ');
    }
});