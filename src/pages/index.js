import { products } from "../data/product.js";
import { Min, Max } from "../script/sum.js";
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

// Добавление карточек (Desctop)
products.forEach((item) => {
  setCartProductDesctop(item);
});

// ----------------------


const controlMin1 = document.getElementById("control-min-1");
const controlMin2 = document.getElementById("control-min-2");
const controlMin3 = document.getElementById("control-min-3");

const controlNum1 = document.getElementById("control-num-1");
const controlNum2 = document.getElementById("control-num-2");
const controlNum3 = document.getElementById("control-num-3");

const controlMax1 = document.getElementById("control-max-1");
const controlMax2 = document.getElementById("control-max-2");
const controlMax3 = document.getElementById("control-max-3");

const actualPrice1 = document.getElementById("actualPrice-1");
const actualPrice2 = document.getElementById("actualPrice-2");
const actualPrice3 = document.getElementById("actualPrice-3");

const fullPrice1 = document.getElementById("fullPrice-1");
const fullPrice2 = document.getElementById("fullPrice-2");
const fullPrice3 = document.getElementById("fullPrice-3");

const totalPrice = document.getElementById("totalPrice");
const totalCounts = document.getElementById("totalCounts");
const totalPriceCounts = document.getElementById("totalPriceCounts");
const totalDiscount = document.getElementById("totalDiscount");

const ocAllSelectedActiv = document.getElementById("ocAllSelectedActiv");
const ocAllSelectedInactive = document.getElementById("ocAllSelectedInactive");

const activCarts = document.getElementById("activCarts");
const inactiveCarts = document.getElementById("inactiveCarts");

const allSelectedInactive = document.getElementById("allSelectedInactive");
let allSelectedInactiveCount = 3;

const bin1 = document.getElementById("bin-1");
const bin2 = document.getElementById("bin-2");
const bin3 = document.getElementById("bin-3");
const bin4 = document.getElementById("bin-4");
const bin5 = document.getElementById("bin-5");
const bin6 = document.getElementById("bin-6");

const Product1 = document.querySelector('activproduct-1')
const Product2 = document.querySelector('activproduct-2')
const Product3 = document.querySelector('activproduct-3')
const Product4 = document.querySelector('inactiveproduct-4')
const Product5 = document.querySelector('inactiveproduct-5')
const Product6 = document.querySelector('inactiveproduct-6')



//
let isOcAllSelectedActiv = true
let isOcAllSelectedInactive = true


ocAllSelectedActiv.addEventListener("click", () => {
  if (isOcAllSelectedActiv){
    activCarts.classList.add("dNone");
    ocAllSelectedActiv.classList.add("arrow-activ");

    // ДОБАВИТЬ ПОЛЕ кол-во 203 Товаров · 2 101 063 сом


    isOcAllSelectedActiv = false
  } else{
    activCarts.classList.remove("dNone");
    ocAllSelectedActiv.classList.remove("arrow-activ");
    isOcAllSelectedActiv = true
  }
});

ocAllSelectedInactive.addEventListener("click", () => {
  if (isOcAllSelectedInactive){
    inactiveCarts.classList.add("dNone");
    ocAllSelectedInactive.classList.add("arrow-activ");
    isOcAllSelectedInactive = false
  } else{
    inactiveCarts.classList.remove("dNone");
    ocAllSelectedInactive.classList.remove("arrow-activ");
    isOcAllSelectedInactive = true
  }
});




// Bin + heart ----------------------

bin1.addEventListener("click", () => {
  Product1.classList.add("dNone");
});

bin2.addEventListener("click", () => {
  Product2.classList.add("dNone");
});

bin3.addEventListener("click", () => {
  Product3.classList.add("dNone");
});

bin4.addEventListener("click", () => {
  Product4.classList.add("dNone");
  allSelectedInactiveCount--
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`
});

bin5.addEventListener("click", () => {
  Product5.classList.add("dNone");
  allSelectedInactiveCount--
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`
});

bin6.addEventListener("click", () => {
  Product6.classList.add("dNone");
  allSelectedInactiveCount--
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`
});



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

// Добавление количества
controlMin1.addEventListener("click", (em) => {
  Min(em.target, products[0], controlNum1, controlMax1)
});

controlMin2.addEventListener("click", (em) => {
  Min(em.target, products[1], controlNum2, controlMax2)
});

controlMin3.addEventListener("click", (em) => {
  Min(em.target, products[2], controlNum3, controlMax3)
});

controlMax1.addEventListener("click", (em) => {
  Max(em.target, products[0], controlNum1, controlMin1)
});

controlMax2.addEventListener("click", (em) => {
  Max(em.target, products[1], controlNum2, controlMin2)
});

controlMax3.addEventListener("click", (em) => {
  Max(em.target, products[2], controlNum3, controlMin3)
});