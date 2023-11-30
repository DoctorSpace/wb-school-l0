import { products } from "../data/product.js";
import { Min, Max } from "../script/sum.js";
import { setCartProductDesctop } from "../script/productCart.js";
import { numberWithSpaces } from "../script/numberWithSpaces.js";
import { selectCard, allSelectCard } from "../script/selectedCard.js";


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
const Total = {totalPrice, totalCounts, totalPriceCounts, totalDiscount}

const AllSelectCards = document.getElementById("selectAllbtn");
const selectCard1 = document.getElementById("selectCard-1");
const selectCard2 = document.getElementById("selectCard-2");
const selectCard3 = document.getElementById("selectCard-3");

const ocAllSelectedActiv = document.getElementById("ocAllSelectedActiv");
const ocAllSelectedInactive = document.getElementById("ocAllSelectedInactive");

const activCarts = document.getElementById("activCarts");
const inactiveCarts = document.getElementById("inactiveCarts");

const allSelectedInactive = document.getElementById("allSelectedInactive");
const countActivProducts = document.getElementById("countActivProducts");
const ocAllSelectedActivText = document.getElementById("ocAllSelectedActivText");
const ocAllSelectedActivTextadd = document.getElementById("ocAllSelectedActivTextadd");

let allSelectedInactiveCount = 3;
let allSelectedActivCount = 3;

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

const arrivalKit1 = document.getElementById('arrivalKit-1')
const arrivalKit2 = document.getElementById('arrivalKit-2')

const arrivalProduct1Kit1 = document.getElementById('arrivalProduct1-kit1')
const arrivalProduct2Kit1 = document.getElementById('arrivalProduct2-kit1')
const arrivalProduct3Kit1 = document.getElementById('arrivalProduct3-kit1')
const arrivalProduct3Kit2 = document.getElementById('arrivalProduct3-kit2')

// переделать убрать эти элементы и отправлять по отдельности
const arrivalData = {arrivalKit1, arrivalKit2, arrivalProduct1Kit1, arrivalProduct2Kit1, arrivalProduct3Kit1, arrivalProduct3Kit2}

// Скрыть/показать контент
let isOcAllSelectedActiv = true
let isOcAllSelectedInactive = true

let allActualProductCounts
let allActualProductPrice

ocAllSelectedActiv.addEventListener("click", () => {
  if (isOcAllSelectedActiv){
    activCarts.classList.add("dNone");
    ocAllSelectedActiv.classList.add("arrow-activ");

    allActualProductCounts = products[0].quantity + products[1].quantity + products[2].quantity 
    allActualProductPrice = Math.trunc((products[0].quantity * products[0].price) + (products[1].quantity * products[1].price) + (products[2].quantity * products[2].price))


    ocAllSelectedActivText.classList.add('dNone')
    ocAllSelectedActivTextadd.classList.remove('dNone')
    ocAllSelectedActivTextadd.textContent = `${allActualProductCounts} Товаров · ${numberWithSpaces(allActualProductPrice)} сом`


    isOcAllSelectedActiv = false
  } else{
    activCarts.classList.remove("dNone");
    ocAllSelectedActiv.classList.remove("arrow-activ");

    ocAllSelectedActivText.classList.remove('dNone')
    ocAllSelectedActivTextadd.classList.add('dNone')

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
  if (products[0].isSelected){
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
  }
  products[0].isSelected = false
  Product1.classList.add("dNone");

  if (allSelectedActivCount == 0){
    countActivProducts.classList.add("dNone");
  }
});

bin2.addEventListener("click", () => {
  if (products[1].isSelected){
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
  }
  products[1].isSelected = false
  Product2.classList.add("dNone");

  if (allSelectedActivCount == 0){
    countActivProducts.classList.add("dNone");
  }
});

bin3.addEventListener("click", () => {

  if (products[2].isSelected){
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
  }
  products[2].isSelected = false
  Product3.classList.add("dNone");
  
  if (allSelectedActivCount == 0){
    countActivProducts.classList.add("dNone");
  }
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



// Добавление количества ---
controlMin1.addEventListener("click", (em) => {
  Min(em.target, products[0], controlNum1, controlMax1, actualPrice1, fullPrice1, Total)
});

controlMin2.addEventListener("click", (em) => {
  Min(em.target, products[1], controlNum2, controlMax2, actualPrice2, fullPrice2, Total)
});

controlMin3.addEventListener("click", (em) => {
  Min(em.target, products[2], controlNum3, controlMax3, actualPrice3, fullPrice3, Total)
});

controlMax1.addEventListener("click", (em) => {
  Max(em.target, products[0], controlNum1, controlMin1, actualPrice1, fullPrice1, Total)
});

controlMax2.addEventListener("click", (em) => {
  Max(em.target, products[1], controlNum2, controlMin2, actualPrice2, fullPrice2, Total)
});

controlMax3.addEventListener("click", (em) => {
  Max(em.target, products[2], controlNum3, controlMin3, actualPrice3, fullPrice3, Total)
});


// AllSelectCards selectCard1-3
// allSelectedActivCount - счётчик активных товаров

let stateAllSelectCards = true

AllSelectCards.addEventListener('click', (em)=>{
  let b = allSelectCard(stateAllSelectCards, em.target, products, Total, selectCard1, selectCard2, selectCard3)
  let counts = b()
  stateAllSelectCards = counts[1]

  if (!stateAllSelectCards) {
    allSelectedActivCount = 0
    countActivProducts.textContent = allSelectedActivCount
    countActivProducts.classList.add("dNone");
  } else{
    allSelectedActivCount = (products[0].isSelected + products[1].isSelected + products[2].isSelected)
    console.log('1', products[0].isSelected);
    console.log('2', products[1].isSelected);
    console.log('3', products[2].isSelected);

    console.log('allSelectedActivCount', allSelectedActivCount);

    countActivProducts.textContent = allSelectedActivCount
    countActivProducts.classList.remove("dNone");
  }

})



selectCard1.addEventListener('click', (em)=>{
  selectCard(em.target, products[0], Total, AllSelectCards)

  if (products[0].isSelected){
    countActivProducts.classList.remove("dNone");
    allSelectedActivCount++
    countActivProducts.textContent = allSelectedActivCount
  } else {
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
    if (allSelectedActivCount == 0){
      countActivProducts.classList.add("dNone");
    }
  }

  if (products[0].isSelected && products[1].isSelected && products[2].isSelected){
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
})



selectCard2.addEventListener('click', (em)=>{
  selectCard(em.target, products[1], Total, AllSelectCards)

  if (products[1].isSelected){
    countActivProducts.classList.remove("dNone");
    allSelectedActivCount++
    countActivProducts.textContent = allSelectedActivCount
  } else {
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
    if (allSelectedActivCount == 0){
      countActivProducts.classList.add("dNone");
    }
  }

  if (products[0].isSelected && products[1].isSelected && products[2].isSelected){
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
  

})

selectCard3.addEventListener('click', (em)=>{
  selectCard(em.target, products[2], Total, AllSelectCards)

  if (products[2].isSelected){
    countActivProducts.classList.remove("dNone");
    allSelectedActivCount++
    countActivProducts.textContent = allSelectedActivCount
  } else {
    allSelectedActivCount--
    countActivProducts.textContent = allSelectedActivCount
    if (allSelectedActivCount == 0){
      countActivProducts.classList.add("dNone");
    }
  }

  if (products[0].isSelected && products[1].isSelected && products[2].isSelected){
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
})