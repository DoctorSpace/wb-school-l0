import { numberWithSpaces } from "../script/numberWithSpaces.js";

export function setCartProductDesctop(product) {
  if (product.inStock) {
    let quantityRemains =
      product.quantityRemains != 0 && product.quantityRemains < 10
        ? `<p>Осталось ${product.quantityRemains} шт.</p>`
        : ``;

    let actualPriceForOne = product.quantity * product.price;
    let fullPriceForsOne = product.quantity * product.fullPrice;

    let specification = product.specification;

    let activProduct = document.createElement(`activProduct-${product.id}`);
    activProduct.innerHTML = `
      <div class="product-cart">
      <div class="product-cart__block">
        <button id="selectCard-${product.id}" class="${
          product.isSelected ? "checkbox_active" : "checkbox_inactive"
        }"></button>
        <img src="./src/img/${product.img}.png" />
      </div>
      <div class="product-discription">
        <h4 class="title-h4">${product.title}</h4>
        ${
          product?.specification
            ? `<div class="product-discription__spec">
          ${
            product.specification?.color
              ? `<p class="text-p" id="spec">Цвет: ${product.specification.color}</p>`
              : ""
          }
          ${
            product.specification?.size
              ? `<p class="text-p">Размер: ${product.specification.size}</p>`
              : ""
          } </div>`
            : ""
        }
        <div class="product-discription__org">
          <p class="text-p-gray">${product.warehouse}</p>
          <div class="product-discription__org-icon">
            <p class="text-p-gray">${product.organization}</p>
            <div class="product-discription__orgnInfo">
              <img src="./src/img/info.svg" />
              <dialog class="dialog-orgnInfo">
                  <h5>${product.orgnInfo.name}</h5>
                  <span>${product.orgnInfo.ogrn}</span>
                  <span>${product.orgnInfo.adress}</span>
              </dialog>
            </div>
          </div>
        </div>
      </div>
      
      <div class="product-quantity">
        <div class="product-quantity__control">
          <div id="control-min-${product.id}" class="product-quantity__control-min ${product.quantity >= product.quantityRemains ? 'product-quantity__control-min_activ':''}">−</div>
          <div id="control-num-${product.id}" class="product-quantity__control-num">${product.quantity}</div>
          <div id="control-max-${product.id}" class="product-quantity__control-max ${product.quantity < product.avalibleOnFastWarehouse ? 'product-quantity__control-max_activ':''}">+</div>
        </div>
        ${quantityRemains}
        <div class="product-quantity__btn">
          <button id="heart-${product.id}" class="${
      product.isFavorit
        ? "product-quantity__btn-heart-activ"
        : "product-quantity__btn-heart"
    }"></button>
          <button id="bin-${product.id}" class="product-quantity__btn-bin"></button>
        </div>
      </div>
      
      <div class="product-price">
        <div class="product-price__actual-price">
          <p id="actualPrice-${product.id}" class="${product.id==2? 'title-h4-bold' : 'title-h3'}">${numberWithSpaces(
            actualPriceForOne
          )}</p>
          <span class="text-span">сом</span>
        </div>
        <button class="product-price__full-price">
          <span id="fullPrice-${product.id}">${numberWithSpaces(fullPriceForsOne)} сом</span>
          
          <dialog class="dialog-price">
          <div class="dialog-price__sale">
            <p>Скидка ${product.discountSpec.sale}%</p>
            <span>- ${product.discountSpec.saleCount} сом</span>
          </div>
          <div class="dialog-price__saleCustomer">
            <p>Скидка покупателя ${product.discountSpec.saleCustomer}%</p>
            <span>- ${product.discountSpec.saleCustomerCount} сом</span>
          </div>
        </dialog>
        </button>
      </div>
      </div>
  `;
    document.getElementById("activCarts").appendChild(activProduct);
  } else {
    let specification = product.specification;

    let inactiveProduct = document.createElement(
      `inactiveProduct-${product.id}`
    );
    inactiveProduct.innerHTML = `
    <div class="product-cart product-cart-disassembled">
    <div class="product-cart__block">
      <img src="./src/img/${product.img}.png" />
    </div>

    <div class="product-discription">
      <h4 class="title-h4-gray">${product.title}</h4>
      ${
        product?.specification
          ? `<div class="product-discription__spec">
        ${
          product.specification?.color
            ? `<p  class="text-p-gray" id="spec">Цвет: ${product.specification.color}</p>`
            : ""
        }
        ${
          product.specification?.size
            ? `<p  class="text-p-gray">Размер: ${product.specification.size}</p>`
            : ""
        } </div>`
          : ""
      }
    </div>

    <div class="product-quantity">
      <div class="product-quantity__btn">
      <button id="heart-${product.id}" class="${
      product.isFavorit
        ? "product-quantity__btn-heart-activ"
        : "product-quantity__btn-heart"
    }"></button>
          <button id="bin-${product.id}" class="product-quantity__btn-bin"></button>
      </div>
    </div>

    <div class="product-price"></div>
  </div>`;

    document.getElementById("inactiveCarts").appendChild(inactiveProduct);
  }
}
