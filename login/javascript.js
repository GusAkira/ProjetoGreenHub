window.addEventListener('DOMContentLoaded', function () {
    const modalOverlay = document.querySelector('.modal-overlay');
    const esqueceuSenhaLink = document.querySelector('.link-a');
    const fecharModalButton = document.querySelector('.fechar-modal');
    const emailInput = document.querySelector('.modal-content input[type="email"]');

    esqueceuSenhaLink.addEventListener('click', function (event) {
      event.preventDefault();
      modalOverlay.style.display = 'flex';
      emailInput.focus();
    });

    fecharModalButton.addEventListener('click', function () {
      modalOverlay.style.display = 'none';
    });
  });