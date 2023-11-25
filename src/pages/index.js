import { products } from "../data/product.js";

console.log(products);

// Получаем ширину экрана
document.addEventListener("DOMContentLoaded", (size) => {
  updateWidthDisplay();
  window.addEventListener("resize", () => {
    updateWidthDisplay();
  });
});

function updateWidthDisplay() {
  // Размеры
  console.log(window.innerWidth);
}

const OrderBtn = document.querySelector("#OrderBtn");
OrderBtn.addEventListener("click", () => {
  console.log(updateWidthDisplay());
});

var div = document.createElement("div");
div.innerHTML = `
    <div class="product-cart">
    <div class="product-cart__block">
      <button id="selectCard-1" class="checkbox_active"></button>
      <img src="./src/img/product1.png" />
    </div>
    <div class="product-discription">
      <h4>Футболка UZcotton мужская</h4>
      <div class="product-discription__spec">
        <p>Цвет: белый</p>
        <p>Размер: 56</p>
      </div>
      <div class="product-discription__org">
        <p>Коледино WB</p>
        <div class="product-discription__org-icon">
          <p>OOO Вайлдберриз</p>
          <img src="./src/img/info.svg" />
        </div>
      </div>
    </div>
    
    <div class="product-quantity">
      <div class="product-quantity__control">
        <div class="product-quantity__control-min">−</div>
        <div class="product-quantity__control-num">1</div>
        <div class="product-quantity__control-max">+</div>
      </div>
      <p>Осталось 2 шт.</p>
      <div class="product-quantity__btn">
        <button><img src="./src/img/heart.svg" /></button>
        <button><img src="./src/img/bin.svg" /></button>
      </div>
    </div>
    
    <div class="product-price">
      <div class="product-price__actual-price">
        <p class="price-texe-h3">
          522
          <span>сом</span>
        </p>
      </div>
      <button class="product-price__full-price">
        <span id="full-price">1051 сом</span>
        <div class="tooltip">
          <div>
            <span>Скидка 55%</span>
            <p>- 300 сом</p>
          </div>
          <div>
            <span>Скидка покупателя 10%</span>
            <p>- 30 сом</p>
          </div>
        </div>
      </button>
    </div>
    </div>
`;
document.getElementById("posts").appendChild(div);
