import { products } from "../data/product.js";
import { sum } from "../script/sum.js";
import { setCartProductDesctop } from "../script/productCart.js";

// Получаем ширину экрана
document.addEventListener("DOMContentLoaded", (size) => {
  updateWidthDisplay();
  window.addEventListener("resize", () => {
    updateWidthDisplay();
  });
});

function updateWidthDisplay() {
  // вывод Размеров
  //   console.log(window.innerWidth);
}

let actualPrice1 = document.getElementById("actualPrice1");

// Добавление карточек (Desctop)
products.forEach((item) => {
  setCartProductDesctop(item);
});

// ----------------------


const heart1 = document.getElementById("heart-1");
heart1.addEventListener("click", (em) => {

  if (products[0].isFavorit == true){
    products[0].isFavorit = false;
    heart1.classList.remove("product-quantity__btn-heart-activ");
    heart1.classList.add("product-quantity__btn-heart");
  }else{
    products[0].isFavorit = true;
    heart1.classList.remove("product-quantity__btn-heart");
    heart1.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart2 = document.getElementById("heart-2");
heart2.addEventListener("click", (em) => {

  if (products[1].isFavorit == true){
    products[1].isFavorit = false;
    heart2.classList.remove("product-quantity__btn-heart-activ");
    heart2.classList.add("product-quantity__btn-heart");
  }else{
    products[1].isFavorit = true;
    heart2.classList.remove("product-quantity__btn-heart");
    heart2.classList.add("product-quantity__btn-heart-activ");
  }
});


const heart3 = document.getElementById("heart-3");
heart3.addEventListener("click", (em) => {

  if (products[2].isFavorit == true){
    products[2].isFavorit = false;
    heart3.classList.remove("product-quantity__btn-heart-activ");
    heart3.classList.add("product-quantity__btn-heart");
  }else{
    products[2].isFavorit = true;
    heart3.classList.remove("product-quantity__btn-heart");
    heart3.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart4 = document.getElementById("heart-4");
heart4.addEventListener("click", (em) => {

  if (products[3].isFavorit == true){
    products[3].isFavorit = false;
    heart4.classList.remove("product-quantity__btn-heart-activ");
    heart4.classList.add("product-quantity__btn-heart");
  }else{
    products[3].isFavorit = true;
    heart4.classList.remove("product-quantity__btn-heart");
    heart4.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart5 = document.getElementById("heart-5");
heart5.addEventListener("click", (em) => {

  if (products[4].isFavorit == true){
    products[4].isFavorit = false;
    heart5.classList.remove("product-quantity__btn-heart-activ");
    heart5.classList.add("product-quantity__btn-heart");
  }else{
    products[4].isFavorit = true;
    heart5.classList.remove("product-quantity__btn-heart");
    heart5.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart6 = document.getElementById("heart-6");
heart6.addEventListener("click", (em) => {

  if (products[5].isFavorit == true){
    products[5].isFavorit = false;
    heart6.classList.remove("product-quantity__btn-heart-activ");
    heart6.classList.add("product-quantity__btn-heart");
  }else{
    products[5].isFavorit = true;
    heart6.classList.remove("product-quantity__btn-heart");
    heart6.classList.add("product-quantity__btn-heart-activ");
  }
});







const OrderBtn = document.querySelector("#OrderBtn");
OrderBtn.addEventListener("click", () => {
  Price = Price + 1;

  actualPrice1.innerHTML = `${Price} <span>сом</span>`;
});
