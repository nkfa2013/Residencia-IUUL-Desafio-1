const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Criação do objeto da mensagem
    const contato = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        msg: document.getElementById('msg').value,
        data: new Date().toLocaleString() // Adiciona a data da mensagem
    };

    // Recupera as mensagens armazenadas anteriormente
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(contato); // Adiciona nova mensagem ao array

    // Armazena o array atualizado no localStorage
    localStorage.setItem('contatos', JSON.stringify(contatos));

    alert('Mensagem enviada!');
    formulario.reset(); // Reseta o formulário após o envio
});