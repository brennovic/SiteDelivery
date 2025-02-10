// Recuperar os itens do carrinho salvos no localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSummary = document.getElementById("cartSummary");
const finalTotal = document.getElementById("finalTotal");

// Função para renderizar os itens na página
function renderCart() {
  if (cart.length === 0) {
    cartSummary.innerHTML = "<p>Seu carrinho está vazio! 🛒</p>";
    finalTotal.textContent = "0.00";
    return;
  }

  let total = 0;
  cartSummary.innerHTML = cart
    .map((item) => {
      total += item.price * item.quantity;
      return `
            <div class="cart-item">
                <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-img">
                <div class="cart-item-info">
                    <span>${item.quantity}x ${item.name}</span>
                    <span class="cart-item-price">R$ ${(
                      item.price * item.quantity
                    ).toFixed(2)}</span>
                </div>
            </div>
        `;
    })
    .join("");

  finalTotal.textContent = total.toFixed(2);
}

// Chamar a função ao carregar a página
document.addEventListener("DOMContentLoaded", renderCart);

// Simulação de pedido confirmado
function finalizarPedido() {
  alert("Pedido confirmado! 🛵💨");
  localStorage.removeItem("cart"); // Limpa o carrinho após finalizar
  window.location.href = "index.html"; // Voltar para a página inicial ou outra de sua escolha
}
// Pegando o formulário do cartão
const formCartao = document.getElementById("formCartao");

formCartao.addEventListener("submit", function (e) {
    e.preventDefault();

    const numeroCartao = document.getElementById("numeroCartao").value;
    const nomeCartao = document.getElementById("nomeCartao").value;
    const validadeCartao = document.getElementById("validadeCartao").value;
    const cvvCartao = document.getElementById("cvvCartao").value;

    const cartaoInfo = {
        numeroCartao,
        nomeCartao,
        validadeCartao,
        cvvCartao,
    };

    // Salva os dados do cartão no localStorage
    localStorage.setItem("cartao", JSON.stringify(cartaoInfo));

    alert("Cartão salvo com sucesso! 💳✅");
    formCartao.reset();
});
