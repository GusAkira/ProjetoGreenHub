// Função para abrir uma modal
function openModal(modalId) {
  $(modalId).css("display", "block");
}

// Função para fechar uma modal
function closeModal(modalId) {
  $(modalId).css("display", "none");
}

// Evento de clique no botão de subtrair quantidade
$(".subtract").click(function () {
  var quantityElement = $(this).siblings(".quantity");
  var quantity = parseInt(quantityElement.text());

  if (quantity > 0) {
    quantityElement.text(quantity - 1);
  }
});

// Evento de clique no botão de adicionar quantidade
$(".add").click(function () {
  var quantityElement = $(this).siblings(".quantity");
  var quantity = parseInt(quantityElement.text());

  quantityElement.text(quantity + 1);
});

// Evento de clique no link "Finalizar Pedido"

$("a[href='#modal-confirmar-pedido']").click(function () {
  var itemsList = $("#modal-confirmar-pedido .items-list");
  var totalValue = 0;

  itemsList.empty();

  $(".quantity").each(function (index) {
    var quantity = parseInt($(this).text());

    if (quantity > 0) {
      var product = $(this).closest(".product").find("h2").text(); // Obter o nome do produto do elemento h2
      var priceText = $(this).closest(".product").find("p").text();
      var price = parseFloat(priceText.split(":")[1].trim().replace("R$", "").replace(",", "."));

      var listItem = "<li>" + product + " - Quantidade: " + quantity + " - Valor: R$" + (quantity * price).toFixed(2).replace(".", ",") + "</li>";

      itemsList.append(listItem);
      totalValue += quantity * price;
    }
  });

  $("#total-valor").text(totalValue.toFixed(2).replace(".", ","));
  openModal("#modal-confirmar-pedido");
});


// Evento de clique no link "Cartão de Crédito"
$("a[href='#modal-cartao-credito']").click(function () {
  closeModal("#modal-confirmar-pedido");
  openModal("#modal-cartao-credito");
});

// Evento de envio do formulário de cartão de crédito
$(".credit-card-form").submit(function (e) {
  e.preventDefault();
  closeModal("#modal-cartao-credito");
  openModal("#modal-pagamento-sucesso");
});

// Evento de clique no botão "Voltar" da modal "Cartão de Crédito"
$("#btn-voltar-confirmar-pedido").click(function () {
  closeModal("#modal-cartao-credito");
  openModal("#modal-confirmar-pedido");
});

// Evento de clique no botão de fechar a modal
$(".close").click(function () {
  closeModal(".modal");
});
