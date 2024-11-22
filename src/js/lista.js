// document.addEventListener('DOMContentLoaded', listar);

function listar() {
    const contatosContainer = document.getElementById('lista');
    contatosContainer.innerHTML = ''; // Limpa a lista antes de listar

    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];

    contatos.forEach((contato, indice) => {
        const linhaMensagem = document.createElement('TR');
        linhaMensagem.classList.add('mensagem');

        linhaMensagem.innerHTML = `
                                <td>${contato.nome}</td>
                                <td>${contato.email}</td>
                                <td>${contato.msg}</td>
                                <td>${contato.data}</td>
                                <td class="td-apagar"><button class="btn" data-index="${indice}" onclick="apagarMensagem()" style="max-width: fit-content;" id="apagar" alt="Apagar"><img class="icon" src="./src/imagens/icone-lixeira.png"></button></td>                
                `;

        contatosContainer.appendChild(linhaMensagem);
    });
}


function apagarMensagem(indice) {
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.splice(indice, 1); // Remove a mensagem do array
    localStorage.setItem('contatos', JSON.stringify(contatos)); // Atualiza o localStorage
    listar(); // Recarrega a lista
}

// Captura a remoção da mensagem
// document.getElementById('lista').addEventListener('click', function (event) {
//     if (event.target.classList.contains('btn')) {
//         const indice = event.target.getAttribute('data-index');
//         apagarMensagem(indice);
//         alert("teste") 
//     }
// });

// Remover todas as mensagens
document.getElementById('apagar-todas').onclick = function () {
    localStorage.removeItem('contatos'); // Remove todas as mensagens do localStorage
    listar(); // Atualiza a lista
};