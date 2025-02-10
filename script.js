
const foods = {
  lanches: [
    {
      id: 1,
      name: "X-Burger Especial",
      price: 25.9,
      image:
        "https://th.bing.com/th/id/OIP.e-HdrrIN-VUzacBJePqJHgHaER?rs=1&pid=ImgDetMain",
      description: "Hambúrguer artesanal com queijo, bacon e molho especial",
      category: "lanches",
      quantity: 0,
    },
    {
      id: 2,
      name: "X-Salada",
      price: 22.9,
      image:
        "https://th.bing.com/th/id/R.90687c775b5df2d33bf7d1c26f3c74c0?rik=ojSNCnUPBLslnQ&pid=ImgRaw&r=0",
      description: "Hambúrguer com alface, tomate, queijo e maionese",
      category: "lanches",
      quantity: 0,
    },
    {
      id: 3,
      name: "Hot Dog Completo",
      price: 18.9,
      image:
        "https://th.bing.com/th/id/OIP.GrgpQaKmep4IZ7MCT0ZAqwHaE8?rs=1&pid=ImgDetMain",
      description: "Hot dog com salsicha, purê, batata palha e molhos",
      category: "lanches",
      quantity: 0,
    },
    {
      id: 4,
      name: "X-Bacon",
      price: 27.9,
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/5098e75e57e36807c173cb7490b1b0d2_XL.jpg",
      description: "Hambúrguer com muito bacon, queijo e molho especial",
      category: "lanches",
      quantity: 0,
    },
    {
      id: 5,
      name: "X-Tudo",
      price: 32.9,
      image:
        "https://i.pinimg.com/736x/11/a5/5a/11a55a964c278eec04d849c5d312bfee.jpg",
      description: "O maior hambúrguer da casa com todos os ingredientes",
      category: "lanches",
      quantity: 0,
    },
  ],
  chinesa: [
    {
      id: 6,
      name: "Yakisoba",
      price: 35.9,
      image:
        "https://th.bing.com/th/id/OIP.VGf4jCRRtJPzA00Zbt169gHaE8?rs=1&pid=ImgDetMain",
      description: "Macarrão oriental com legumes e carne",
      category: "chinesa",
      quantity: 0,
    },
    {
      id: 7,
      name: "Frango Xadrez",
      price: 38.9,
      image: "https://assets.unileversolutions.com/recipes-v2/236950.jpg",
      description: "Cubos de frango com legumes e amendoim",
      category: "chinesa",
      quantity: 0,
    },
    {
      id: 8,
      name: "Rolinho Primavera",
      price: 20.9,
      image:
        "https://th.bing.com/th/id/OIP.QMVKFVksACf0Y5HIC4We0gHaE8?rs=1&pid=ImgDetMain",
      description: "4 unidades de rolinho frito com molho agridoce",
      category: "chinesa",
      quantity: 0,
    },
    {
      id: 9,
      name: "Chop Suey",
      price: 33.9,
      image:
        "https://fthmb.tqn.com/hgpwe00m0KjquF8pYGPEe7TIklw=/960x0/filters:no_upscale()/GettyImages-502134071-583b78333df78c6f6a1e4b33.jpg",
      description: "Mix de legumes e carnes ao molho oriental",
      category: "chinesa",
      quantity: 0,
    },
    {
      id: 10,
      name: "Arroz Chop Suey",
      price: 28.9,
      image:
        "https://cooknenjoy.com/wp-content/uploads/2022/02/Yakimeshi-01-1536x1154.jpg",
      description: "Arroz frito com legumes e molho shoyu",
      category: "chinesa",
      quantity: 0,
    },
  ],
  tailandesa: [
    {
      id: 11,
      name: "Pad Thai",
      price: 42.9,
      image:
        "https://th.bing.com/th/id/R.1b2d3ad45b87530c61cc4b7f5b9e31ae?rik=hBRYhZF7RQ9BFA&pid=ImgRaw&r=0",
      description: "Macarrão de arroz frito com camarão, tofu e amendoim",
      category: "tailandesa",
      quantity: 0,
    },
    {
      id: 12,
      name: "Curry Verde",
      price: 45.9,
      image:
        "https://th.bing.com/th/id/R.a3f784b333b14546db39932a88102cd4?rik=os5fhyQFHBQOKw&pid=ImgRaw&r=0",
      description: "Curry verde tailandês com frango e legumes",
      category: "tailandesa",
      quantity: 0,
    },
    {
      id: 13,
      name: "Som Tam",
      price: 32.9,
      image:
        "https://th.bing.com/th/id/OIP.SblmdSDJ0KiqghG6sg_x4QHaHa?w=600&h=600&rs=1&pid=ImgDetMain",
      description: "Salada de papaia verde picante",
      category: "tailandesa",
      quantity: 0,
    },
    {
      id: 14,
      name: "Tom Yum",
      price: 38.9,
      image:
        "https://th.bing.com/th/id/R.c83de4b6dc7cc5557c1c7b0f093b1f0b?rik=WWe1cj04xKWIWw&pid=ImgRaw&r=0",
      description: "Sopa picante com camarão e cogumelos",
      category: "tailandesa",
      quantity: 0,
    },
    {
      id: 15,
      name: "Massaman Curry",
      price: 47.9,
      image:
        "https://cdn.copymethat.com/media/orig_massaman_curry_easy_recipe_202209101544448512671uita0.jpg",
      description: "Curry suave com batatas, carne e amendoim",
      category: "tailandesa",
      quantity: 0,
    },
  ],
  italiana: [
    {
      id: 16,
      name: "Pizza Margherita",
      price: 49.9,
      image:
        "https://th.bing.com/th/id/OIP.SgB8sYIxkxJj-p3Vs8MaCgHaE8?rs=1&pid=ImgDetMain",
      description: "Pizza com molho de tomate, mussarela e manjericão",
      category: "italiana",
      quantity: 0,
    },
    {
      id: 17,
      name: "Lasanha à Bolonhesa",
      price: 52.9,
      image: "https://img.cybercook.com.br/receitas/876/lasanha-bolonhesa.jpeg",
      description: "Lasanha com molho bolonhesa e queijo gratinado",
      category: "italiana",
      quantity: 0,
    },
    {
      id: 18,
      name: "Espaguete Carbonara",
      price: 45.9,
      image: "https://piasdeli.de/wp-content/uploads/2014/03/Carbonara6.jpg",
      description: "Massa com molho cremoso, bacon e parmesão",
      category: "italiana",
      quantity: 0,
    },
    {
      id: 19,
      name: "Ravioli 4 Queijos",
      price: 54.9,
      image:
        "https://beautifuleatsandthings.com/wp-content/uploads/2019/09/Four-Cheese-Spinach-Mushroom-Ravioli4-985x1024.jpg",
      description: "Massa recheada com blend de queijos especiais",
      category: "italiana",
      quantity: 0,
    },
    {
      id: 20,
      name: "Risoto de Funghi",
      price: 58.9,
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/4bc3f192da2c9adad851bf0f518952d3_XL.jpg",
      description: "Arroz arbóreo com cogumelos e parmesão",
      category: "italiana",
      quantity: 0,
    },
  ],
  brasileira: [
    {
      id: 21,
      name: "Feijoada Completa",
      price: 48.9,
      image:
        "https://th.bing.com/th/id/OIP.gItUQEgja1FnSZzAgl2JAwHaE7?rs=1&pid=ImgDetMain",
      description: "Feijoada com arroz, couve e farofa",
      category: "brasileira",
      quantity: 0,
    },
    {
      id: 22,
      name: "Moqueca de Peixe",
      price: 62.9,
      image:
        "https://th.bing.com/th/id/R.0cddcd6ea434f7735783ab09ac1b5c05?rik=IcJGngL2s2KldA&pid=ImgRaw&r=0",
      description: "Peixe com leite de coco, dendê e pirão",
      category: "brasileira",
      quantity: 0,
    },
    {
      id: 23,
      name: "Picanha na Chapa",
      price: 72.9,
      image:
        "https://th.bing.com/th/id/R.a5c06bf1021f59164a758fd564bc484d?rik=EZLM%2f%2fTESEbqZA&pid=ImgRaw&r=0",
      description: "Picanha grelhada com arroz, feijão e vinagrete",
      category: "brasileira",
      quantity: 0,
    },
    {
      id: 24,
      name: "Acarajé",
      price: 35.9,
      image:
        "https://www.thespruceeats.com/thmb/7vfKvdEKQmFnotOTddjDVsfbrPQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-brazilian-black-eyed-pea-shrimp-fritters-3028859-f7183508846f43838ca7b713d3b887c0.jpg",
      description: "Bolinho de feijão fradinho com camarão e vatapá",
      category: "brasileira",
      quantity: 0,
    },
    {
      id: 25,
      name: "Baião de Dois",
      price: 42.9,
      image:
        "https://th.bing.com/th/id/R.c15a27052436f43159094bbb0b66a9f6?rik=qCDVZmQ7Mr0meg&riu=http%3a%2f%2fwww.praiasdenatal.com.br%2fwp-content%2fuploads%2f2014%2f08%2fBai%c3%a3o-de-dois.jpg%3f5b4da2&ehk=VBaXumY8qXrM70HPVI6vO9f58Zg9EViEgoSvmIPYyW0%3d&risl=&pid=ImgRaw&r=0",
      description: "Arroz com feijão de corda, queijo e carne seca",
      category: "brasileira",
      quantity: 0,
    },
  ],
};

//carrinho

let cart = [];

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

function updateCartTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function addToCart(food) {
  const existingItem = cart.find((item) => item.id === food.id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...food, quantity: 1 });
  }

  updateCartCount();
  updateCartTotal();
  renderCartItems();
  showNotification(`${food.name} adicionado ao carrinho!`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartTotal();
  renderCartItems();
}

function updateItemQuantity(index, change) {
  const item = cart[index];
  const newQuantity = item.quantity + change;

  if (newQuantity > 0) {
    item.quantity = newQuantity;
  } else {
    cart.splice(index, 1);
  }

  updateCartCount();
  updateCartTotal();
  renderCartItems();
}

function renderCartItems() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <span>${item.name}</span>
                <span class="cart-item-price">R$ ${(
                  item.price * item.quantity
                ).toFixed(2)}</span>
            </div>
            <div class="cart-item-quantity">
                <button onclick="updateItemQuantity(${index}, -1)" class="quantity-btn">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateItemQuantity(${index}, 1)" class="quantity-btn">+</button>
                <button onclick="removeFromCart(${index})" class="remove-btn">×</button>
            </div>
        </div>
    `
    )
    .join("");
}





const modal = document.getElementById("cartModal");
const cartBtn = document.getElementById("cartBtn");
const closeBtn = document.querySelector(".close");
const checkoutBtn = document.getElementById("checkoutBtn");

cartBtn.onclick = () => (modal.style.display = "block");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

checkoutBtn.onclick = () => {
  if (cart.length === 0) {
    showNotification("Seu carrinho está vazio!");
    return;
  }

  showNotification("Pedido realizado com sucesso!");
  cart = [];
  updateCartCount();
  updateCartTotal();
  renderCartItems();
  modal.style.display = "none";
};

// Search functionality
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const allFoods = Object.values(foods).flat();
  const filteredFoods = allFoods.filter(
    (food) =>
      food.name.toLowerCase().includes(searchTerm) ||
      food.description.toLowerCase().includes(searchTerm)
  );
  renderFoodGrid(filteredFoods);
});

// Render food grid

// Render food grid
function renderFoodGrid(foodsToRender = null) {
  const foodGrid = document.getElementById("foodGrid");
  foodGrid.innerHTML = "";

  if (foodsToRender) {
    // Render search results
    foodGrid.innerHTML = foodsToRender
      .map((food) => createFoodCard(food))
      .join("");
  } else {
    // Render foods by category
    for (const [category, categoryFoods] of Object.entries(foods)) {
      const categorySection = document.createElement("div");
      categorySection.className = "category-section";

      const categoryTitle = document.createElement("h2");
      categoryTitle.className = "category-title";
      categoryTitle.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

      const foodRow = document.createElement("div");
      foodRow.className = "food-row";
      foodRow.innerHTML = categoryFoods
        .map((food) => createFoodCard(food))
        .join("");

      categorySection.appendChild(categoryTitle);
      categorySection.appendChild(foodRow);
      foodGrid.appendChild(categorySection);
    }
  }
}

function createFoodCard(food) {
  return `
        <div class="food-card">
            <img src="${food.image}" alt="${food.name}">
            <div class="food-card-content">
                <h3>${food.name}</h3>
                <p>${food.description}</p>
                <div class="food-card-footer">
                    <span class="price">R$ ${food.price.toFixed(2)}</span>
                    <button onclick="addToCart(${JSON.stringify(food).replace(
                      /"/g,
                      "&quot;"
                    )})" class="primary-btn">
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderFoodGrid();
});

document.getElementById("checkoutBtn").addEventListener("click", function() {
  if (cart.length === 0) {
    showNotification("Seu carrinho está vazio!");
    return;
  }

  // Salvar o carrinho no localStorage antes de redirecionar
  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirecionar para a página de compras
  window.location.href = "Compras.html";
});

document.getElementById("formLocalizacao").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página

  let endereco = document.getElementById("endereco").value;
  let cidade = document.getElementById("cidade").value;
  let cep = document.getElementById("cep").value;

  if (endereco && cidade && cep) {
      alert(`Localização salva!\nEndereço: ${endereco}\nCidade: ${cidade}\nCEP: ${cep}`);
  } else {
      alert("Por favor, preencha todos os campos.");
  }
});

