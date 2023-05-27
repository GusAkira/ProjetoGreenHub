// Obtém o formulário e o botão de cadastro
const form = document.getElementById('cadastro-form');
const cadastrarButton = document.getElementById('cadastrar-button');

// Obtém o modal e o botão de fechar
const modal = document.getElementById('modal');
const fecharModalButton = document.getElementById('fechar-modal');

// Função para exibir o modal
function exibirModal() {
  modal.classList.add('show');
}

// Adiciona um evento de clique ao botão de cadastro
cadastrarButton.addEventListener('click', function(event) {
  event.preventDefault(); // Impede o envio do formulário
  
  exibirModal();
});

// Adiciona um evento de clique ao botão de fechar do modal
fecharModalButton.addEventListener('click', fecharModal);

