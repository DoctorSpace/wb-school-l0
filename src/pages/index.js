import { products } from "../data/product.js";
import { Min, Max } from "../script/calculator.js";
import { setCartProductDesctop } from "../script/productCart.js";
import { numberWithSpaces } from "../script/numberWithSpaces.js";
import { createDeliveryModal } from "../script/createModalWindow.js";
import {selectCard,allSelectCard,deletedCard,} from "../script/selectedCard.js";
import { phoneNumberValidation, InnValidation, emailValidation ,nameValidation } from "../script/validation.js";
import { phoneNumber } from "../script/phoneNumber.js";




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

const AllSelectCards = document.getElementById("selectAllbtn");
const selectCard1 = document.getElementById("selectCard-1");
const selectCard2 = document.getElementById("selectCard-2");
const selectCard3 = document.getElementById("selectCard-3");


const totalPrice = document.getElementById("totalPrice");
const totalCounts = document.getElementById("totalCounts");
const totalPriceCounts = document.getElementById("totalPriceCounts");
const totalDiscount = document.getElementById("totalDiscount");
const Total = { totalPrice, totalCounts, totalPriceCounts, totalDiscount};

const ocAllSelectedActiv = document.getElementById("ocAllSelectedActiv");
const ocAllSelectedInactive = document.getElementById("ocAllSelectedInactive");

const activCarts = document.getElementById("activCarts");
const inactiveCarts = document.getElementById("inactiveCarts");

const writeOffPayment = document.getElementById("writeOffPayment");
const writeOffPaymentIMG = document.getElementById("writeOffPaymentIMG");
const writeOffPaymentINFO = document.getElementById("writeOffPaymentINFO");

const OrderBtn = document.getElementById("OrderBtn");

const allSelectedInactive = document.getElementById("allSelectedInactive");
const countActivProducts = document.getElementById("countActivProducts");
const countActivProductsM = document.getElementById("countActivProductsM");

const ocAllSelectedActivText = document.getElementById( "ocAllSelectedActivText");
const ocAllSelectedActivTextadd = document.getElementById( "ocAllSelectedActivTextadd");

let allSelectedInactiveCount = 3;
let allSelectedActivCount = 3;

const bin1 = document.getElementById("bin-1");
const bin2 = document.getElementById("bin-2");
const bin3 = document.getElementById("bin-3");
const bin4 = document.getElementById("bin-4");
const bin5 = document.getElementById("bin-5");
const bin6 = document.getElementById("bin-6");

const Product1 = document.querySelector("activproduct-1");
const Product2 = document.querySelector("activproduct-2");
const Product3 = document.querySelector("activproduct-3");
const Product4 = document.querySelector("inactiveproduct-4");
const Product5 = document.querySelector("inactiveproduct-5");
const Product6 = document.querySelector("inactiveproduct-6");

const arrivalKit1 = document.getElementById("arrivalKit-1");
const arrivalKit2 = document.getElementById("arrivalKit-2");

const arrivalProduct1Kit1 = document.getElementById("arrivalProduct1-kit1");
const arrivalProduct2Kit1 = document.getElementById("arrivalProduct2-kit1");
const arrivalProduct2Kit2 = document.getElementById("arrivalProduct2-kit2");
const arrivalProduct3Kit1 = document.getElementById("arrivalProduct3-kit1");

const arrivalItem1 = document.getElementById("arrivalItem-1");
const arrivalItem2 = document.querySelectorAll("[id='arrivalItem-2']");
const arrivalItem3 = document.getElementById("arrivalItem-3");

const setDeliveryLocationBtn1 = document.getElementById("deliveryLocationBtn1")
const setDeliveryLocationBtn2 = document.getElementById("deliveryLocationBtn2")

const setPaymentCardBtn1 = document.getElementById("setPaymentCardBtn1")
const setPaymentCardBtn2 = document.getElementById("setPaymentCardBtn2")

const spanFirstname = document.getElementById("spanFirstname");
const inputFirstname = document.getElementById("inputFirstname");
const pFirstname = document.getElementById("pFirstname");

const spanSurname = document.getElementById("spanSurname");
const inputSurname = document.getElementById("inputSurname");
const pSurname = document.getElementById("pSurname");

const spanMail = document.getElementById("spanMail");
const inputMail = document.getElementById("inputMail");
const pMail = document.getElementById("pMail");

const spanNumber = document.getElementById("spanNumber");
const inputNumber = document.getElementById("inputNumber");
const pNumber = document.getElementById("pNumber");

const spanIIN = document.getElementById("spanIIN");
const inputIIN = document.getElementById("inputIIN");
const pIIN = document.getElementById("pIIN");

const Recipient = document.getElementById("Recipient");

let TotalPriceBtnCount = 0

// Кнопка ЗАКАЗАТь
OrderBtn.addEventListener("click", () => {
  if ((nameValidation(inputFirstname.value) || inputFirstname.value == '')){
    pFirstname.classList.remove("dNone");
    pFirstname.classList.add("recipientInfoTextError");
    inputFirstname.classList.add("recipientInputError");
  }
  if ((nameValidation(inputSurname.value) || inputSurname.value == '')){
    pSurname.classList.remove("dNone");
    pSurname.classList.add("recipientInfoTextError");
    inputSurname.classList.add("recipientInputError");
  }
  if (!(emailValidation(inputMail.value)) || (inputMail.value == '')){
    pMail.classList.remove("dNone");
    pMail.classList.add("recipientInfoTextError");
    inputMail.classList.add("recipientInputError");
  }
  if (!(phoneNumberValidation(inputNumber.value))  || (inputNumber.value == '')){
    pNumber.classList.remove("dNone");
    pNumber.classList.add("recipientInfoTextError");
    inputNumber.classList.add("recipientInputError");

  }
  if (!(InnValidation(inputIIN.value)) || (inputIIN.value == '')){
    pIIN.classList.remove("dNone");
    pIIN.classList.add("recipientInfoTextError");
    inputIIN.classList.add("recipientInputError");  
  }


  if ( 
    nameValidation(inputFirstname.value)
    || nameValidation(inputSurname.value)
    || !emailValidation(inputMail.value)
    || !phoneNumberValidation(inputNumber.value)
    || !InnValidation(inputIIN.value)
  ){
    Recipient.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log('Покупка совершина');
  }
})


// Валидация ---

// Имя
inputFirstname.addEventListener("focus", (eml) => {
  spanFirstname.classList.toggle("recipientOpacityON");
  spanFirstname.classList.toggle("recipientOpacityOFF");
});

inputFirstname.addEventListener("blur", (eml) => {
  spanFirstname.classList.toggle("recipientOpacityOFF");
  spanFirstname.classList.toggle("recipientOpacityON");

  let validationFirstname = nameValidation(eml.target.value)

  if (eml.target.value.length > 0) {
    if (!validationFirstname) {
      spanFirstname.classList.remove("recipientOpacityERROR");
      eml.target.classList.remove("recipientInputError");
      pFirstname.classList.add("dNone");
      pFirstname.classList.remove("recipientInfoTextError");
    } else {
      spanFirstname.classList.add("recipientOpacityERROR");
      eml.target.classList.add("recipientInputError");
      pFirstname.classList.remove("dNone");
      pFirstname.classList.add("recipientInfoTextError");
    }
  }
});

inputFirstname.addEventListener("input", (eml) => {

  eml.target.value.length > 0
  ? spanFirstname.classList.add("recipientOpacityOK")
  : spanFirstname.classList.remove("recipientOpacityOK")
});


// Фамилия
inputSurname.addEventListener("focus", (eml) => {
  spanSurname.classList.toggle("recipientOpacityON");
  spanSurname.classList.toggle("recipientOpacityOFF");
});

inputSurname.addEventListener("blur", (eml) => {
  spanSurname.classList.toggle("recipientOpacityOFF");
  spanSurname.classList.toggle("recipientOpacityON");

  let validationSurname = nameValidation(eml.target.value)

  if (eml.target.value.length > 0) {
    if (!validationSurname) {
      spanSurname.classList.remove("recipientOpacityERROR");
      eml.target.classList.remove("recipientInputError");
      pSurname.classList.add("dNone");
      pSurname.classList.remove("recipientInfoTextError");
    } else {
      spanSurname.classList.add("recipientOpacityERROR");
      eml.target.classList.add("recipientInputError");
      pSurname.classList.remove("dNone");
      pSurname.classList.add("recipientInfoTextError");
    }
  }
});

inputSurname.addEventListener("input", (eml) => {
  eml.target.value.length > 0
  ? spanSurname.classList.add("recipientOpacityOK")
  : spanSurname.classList.remove("recipientOpacityOK")
});


//  Маил
inputMail.addEventListener("focus", (eml) => {
  spanMail.classList.toggle("recipientOpacityON");
  spanMail.classList.toggle("recipientOpacityOFF");
});

inputMail.addEventListener("blur", (eml) => {
  spanMail.classList.toggle("recipientOpacityOFF");
  spanMail.classList.toggle("recipientOpacityON");

  let validationMail = emailValidation(eml.target.value)
  if (eml.target.value.length > 0) {
    if (validationMail) {
      spanMail.classList.remove("recipientOpacityERROR");
      eml.target.classList.remove("recipientInputError");
      pMail.classList.add("dNone");
      pMail.classList.remove("recipientInfoTextError");
    } else {
      spanMail.classList.add("recipientOpacityERROR");
      eml.target.classList.add("recipientInputError");
      pMail.classList.remove("dNone");
      pMail.classList.add("recipientInfoTextError");
    }
  }
});

inputMail.addEventListener("input", (eml) => {

  eml.target.value.length > 0
  ? spanMail.classList.add("recipientOpacityOK")
  : spanMail.classList.remove("recipientOpacityOK")
});


// Телефон
inputNumber.addEventListener("focus", (eml) => {
  spanNumber.classList.toggle("recipientOpacityON");
  spanNumber.classList.toggle("recipientOpacityOFF");
});

inputNumber.addEventListener("blur", (eml) => {
  spanNumber.classList.toggle("recipientOpacityOFF");
  spanNumber.classList.toggle("recipientOpacityON");

  let validationPhone = phoneNumberValidation(eml.target.value);

  if (eml.target.value.length > 0) {
    if (validationPhone) {
      spanNumber.classList.remove("recipientOpacityERROR");
      eml.target.classList.remove("recipientInputError");
      pNumber.classList.add("dNone");
      pNumber.classList.remove("recipientInfoTextError");
    } else {
      spanNumber.classList.add("recipientOpacityERROR");
      eml.target.classList.add("recipientInputError");
      pNumber.classList.remove("dNone");
      pNumber.classList.add("recipientInfoTextError");
    }
  }
});

inputNumber.addEventListener("input", (eml) => {
  eml.target.value = phoneNumber(eml.target.value);

  eml.target.value.length > 0
  ? spanNumber.classList.add("recipientOpacityOK")
  : spanNumber.classList.remove("recipientOpacityOK")
});

// ИНН 
inputIIN.addEventListener("focus", (eml) => {
  spanIIN.classList.toggle("recipientOpacityON");
  spanIIN.classList.toggle("recipientOpacityOFF");
});

inputIIN.addEventListener("blur", (eml) => {
  spanIIN.classList.toggle("recipientOpacityOFF");
  spanIIN.classList.toggle("recipientOpacityON");

  let validationInn = InnValidation(eml.target.value);

  if (eml.target.value.length > 0) {
    if (validationInn) {
      eml.target.classList.remove("recipientInputError");
      pIIN.innerText = "Для таможенного оформления";
      pIIN.classList.remove("recipientInfoTextError");
    } else {
      spanIIN.classList.add("recipientOpacityERROR");
      eml.target.classList.add("recipientInputError");

      pIIN.innerText = "Проверьте ИНН";
      pIIN.classList.add("recipientInfoTextError");
    }
  }
});

inputIIN.addEventListener("input", (eml) => {
  eml.target.value = phoneIIN(eml.target.value);

  eml.target.value.length > 0
  ? spanIIN.classList.add("recipientOpacityOK")
  : spanIIN.classList.remove("recipientOpacityOK")
});


// ------

// Списывание
writeOffPayment.addEventListener("click", () => {

  if (writeOffPaymentINFO.classList.contains('dNone')){
    writeOffPaymentINFO.classList.remove('dNone')
    writeOffPaymentIMG.src = "./src/img/checkboxOFF.svg"

    OrderBtn.innerHTML = 'Заказать'

  } else {
    writeOffPaymentINFO.classList.add('dNone')
    writeOffPaymentIMG.src = "./src/img/checkboxON.svg"

    TotalPriceBtnCount = totalPrice.textContent

    OrderBtn.innerHTML = `Оплатить ${TotalPriceBtnCount} сом`
  }
})

// if (writeOffPaymentINFO.classList.contains('dNone')){
//  OrderBtn.innerHTML = `Оплатить ${totalPrice.textContent} сом`
//}

// Модальное окно delivery
const overlay = document.querySelector(".overlay");
const searchClose = document.getElementById("searchClose");
const content = document.getElementById('content')
const buttonDeliveryBlock = document.getElementById('buttonDeliveryBlock')
const titleMyAddresses = document.getElementById('titleMyAddresses')

// Кнопки переключения
const setPointDelivery = document.getElementById('setPointDelivery')
const setCourierDelivery = document.getElementById('setCourierDelivery')


// set Доставка
let deliveryAdress = 'courier'
setDeliveryLocationBtn1.addEventListener("click", () => {
  buttonDeliveryBlock.classList.remove('dNone')
  titleMyAddresses.classList.remove('dNone')


  setPointDelivery.classList.remove('modalWindowsButton_activ')
  setPointDelivery.classList.add('modalWindowsButton')

  setCourierDelivery.classList.remove('modalWindowsButton')
  setCourierDelivery.classList.add('modalWindowsButton_activ')

  overlay.classList.remove('dNone')
  createDeliveryModal(deliveryAdress)
})

setDeliveryLocationBtn2.addEventListener("click", () => {
  buttonDeliveryBlock.classList.remove('dNone')
  titleMyAddresses.classList.remove('dNone')

  setPointDelivery.classList.remove('modalWindowsButton_activ')
  setPointDelivery.classList.add('modalWindowsButton')

  setCourierDelivery.classList.remove('modalWindowsButton')
  setCourierDelivery.classList.add('modalWindowsButton_activ')

  overlay.classList.remove('dNone')
  createDeliveryModal(deliveryAdress)
})


setPointDelivery.addEventListener("click", () => {
  if(!setPointDelivery.classList.contains("modalWindowsButton_activ")){
    content.innerHTML = "";
    setCourierDelivery.classList.remove('modalWindowsButton_activ')
    setCourierDelivery.classList.add('modalWindowsButton')
  
    setPointDelivery.classList.remove('modalWindowsButton')
    setPointDelivery.classList.add('modalWindowsButton_activ')

    createDeliveryModal('point')
  }
})


setCourierDelivery.addEventListener("click", () => {
  if(!setCourierDelivery.classList.contains("modalWindowsButton_activ")){
  content.innerHTML = "";
  setPointDelivery.classList.remove('modalWindowsButton_activ')
  setPointDelivery.classList.add('modalWindowsButton')

  setCourierDelivery.classList.remove('modalWindowsButton')
  setCourierDelivery.classList.add('modalWindowsButton_activ')

  createDeliveryModal('courier')
  }
})



// set Карточки
setPaymentCardBtn1.addEventListener("click", () => {
  buttonDeliveryBlock.classList.add('dNone')
  titleMyAddresses.classList.add('dNone')

  overlay.classList.remove('dNone')
  createDeliveryModal('card')
})

setPaymentCardBtn2.addEventListener("click", () => {
  buttonDeliveryBlock.classList.add('dNone')
  titleMyAddresses.classList.add('dNone')

  overlay.classList.remove('dNone')
  createDeliveryModal('card')
})



// Скрыть/показать контент
let isOcAllSelectedActiv = true;
let isOcAllSelectedInactive = true;

let allActualProductCounts;
let allActualProductPrice;

ocAllSelectedActiv.addEventListener("click", () => {
  if (isOcAllSelectedActiv) {
    activCarts.classList.add("dNone");
    ocAllSelectedActiv.classList.add("arrow-activ");

    allActualProductCounts =
      products[0].quantity + products[1].quantity + products[2].quantity;
    allActualProductPrice = Math.trunc(
      products[0].quantity * products[0].price +
        products[1].quantity * products[1].price +
        products[2].quantity * products[2].price
    );

    ocAllSelectedActivText.classList.add("dNone");
    ocAllSelectedActivTextadd.classList.remove("dNone");
    ocAllSelectedActivTextadd.textContent = `${allActualProductCounts} Товаров · ${numberWithSpaces(
      allActualProductPrice
    )} сом`;

    isOcAllSelectedActiv = false;
  } else {
    activCarts.classList.remove("dNone");
    ocAllSelectedActiv.classList.remove("arrow-activ");

    ocAllSelectedActivText.classList.remove("dNone");
    ocAllSelectedActivTextadd.classList.add("dNone");

    isOcAllSelectedActiv = true;
  }
});

ocAllSelectedInactive.addEventListener("click", () => {
  if (isOcAllSelectedInactive) {
    inactiveCarts.classList.add("dNone");
    ocAllSelectedInactive.classList.add("arrow-activ");
    isOcAllSelectedInactive = false;
  } else {
    inactiveCarts.classList.remove("dNone");
    ocAllSelectedInactive.classList.remove("arrow-activ");
    isOcAllSelectedInactive = true;
  }
});

// Bin + heart ----------------------

bin1.addEventListener("click", () => {
  if (products[0].isSelected) {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
  }
  products[0].isSelected = false;
  products[0].isDeleted = true;
  Product1.classList.add("dNone");

  deletedCard(products, Total);
  arrivalItem1.classList.add("dNone");

  if (
    arrivalItem2[0].classList.contains("dNone") &&
    arrivalItem3.classList.contains("dNone")
  ) {
    arrivalKit1.classList.add("dNone");
  }

  if (allSelectedActivCount == 0) {
    countActivProducts.classList.add("dNone");
    countActivProductsM.classList.add("dNone");
  }
});

bin2.addEventListener("click", () => {
  if (products[1].isSelected) {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
  }
  products[1].isSelected = false;
  products[1].isDeleted = true;
  Product2.classList.add("dNone");

  deletedCard(products, Total);
  for (var i = 0; i < arrivalItem2.length; i++) {
    arrivalItem2[i].classList.add("dNone");
  }
  arrivalKit2.classList.add("dNone");

  if (
    arrivalItem3.classList.contains("dNone") &&
    arrivalItem1.classList.contains("dNone")
  ) {
    arrivalKit1.classList.add("dNone");
  }

  if (allSelectedActivCount == 0) {
    countActivProducts.classList.add("dNone");
    countActivProductsM.classList.add("dNone");
  }
});

bin3.addEventListener("click", () => {
  if (products[2].isSelected) {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
  }
  products[2].isSelected = false;
  products[2].isDeleted = true;
  Product3.classList.add("dNone");

  deletedCard(products, Total);
  arrivalItem3.classList.add("dNone");

  if (
    arrivalItem2[0].classList.contains("dNone") &&
    arrivalItem1.classList.contains("dNone")
  ) {
    arrivalKit1.classList.add("dNone");
  }

  if (allSelectedActivCount == 0) {
    countActivProducts.classList.add("dNone");
    countActivProductsM.classList.add("dNone");
  }
});

bin4.addEventListener("click", () => {
  Product4.classList.add("dNone");
  allSelectedInactiveCount--;
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`;
});

bin5.addEventListener("click", () => {
  Product5.classList.add("dNone");
  allSelectedInactiveCount--;
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`;
});

bin6.addEventListener("click", () => {
  Product6.classList.add("dNone");
  allSelectedInactiveCount--;
  allSelectedInactive.textContent = `Отсутствуют · ${allSelectedInactiveCount} товара`;
});

const heart1 = document.getElementById("heart-1");
heart1.addEventListener("click", (em) => {
  if (products[0].isFavorit == true) {
    products[0].isFavorit = false;
    heart1.classList.remove("product-quantity__btn-heart-activ");
    heart1.classList.add("product-quantity__btn-heart");
  } else {
    products[0].isFavorit = true;
    heart1.classList.remove("product-quantity__btn-heart");
    heart1.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart2 = document.getElementById("heart-2");
heart2.addEventListener("click", (em) => {
  if (products[1].isFavorit == true) {
    products[1].isFavorit = false;
    heart2.classList.remove("product-quantity__btn-heart-activ");
    heart2.classList.add("product-quantity__btn-heart");
  } else {
    products[1].isFavorit = true;
    heart2.classList.remove("product-quantity__btn-heart");
    heart2.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart3 = document.getElementById("heart-3");
heart3.addEventListener("click", (em) => {
  if (products[2].isFavorit == true) {
    products[2].isFavorit = false;
    heart3.classList.remove("product-quantity__btn-heart-activ");
    heart3.classList.add("product-quantity__btn-heart");
  } else {
    products[2].isFavorit = true;
    heart3.classList.remove("product-quantity__btn-heart");
    heart3.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart4 = document.getElementById("heart-4");
heart4.addEventListener("click", (em) => {
  if (products[3].isFavorit == true) {
    products[3].isFavorit = false;
    heart4.classList.remove("product-quantity__btn-heart-activ");
    heart4.classList.add("product-quantity__btn-heart");
  } else {
    products[3].isFavorit = true;
    heart4.classList.remove("product-quantity__btn-heart");
    heart4.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart5 = document.getElementById("heart-5");
heart5.addEventListener("click", (em) => {
  if (products[4].isFavorit == true) {
    products[4].isFavorit = false;
    heart5.classList.remove("product-quantity__btn-heart-activ");
    heart5.classList.add("product-quantity__btn-heart");
  } else {
    products[4].isFavorit = true;
    heart5.classList.remove("product-quantity__btn-heart");
    heart5.classList.add("product-quantity__btn-heart-activ");
  }
});

const heart6 = document.getElementById("heart-6");
heart6.addEventListener("click", (em) => {
  if (products[5].isFavorit == true) {
    products[5].isFavorit = false;
    heart6.classList.remove("product-quantity__btn-heart-activ");
    heart6.classList.add("product-quantity__btn-heart");
  } else {
    products[5].isFavorit = true;
    heart6.classList.remove("product-quantity__btn-heart");
    heart6.classList.add("product-quantity__btn-heart-activ");
  }
});

// Добавление количества ---
controlMin1.addEventListener("click", (em) => {
  Min(
    em.target,
    products[0],
    controlNum1,
    controlMax1,
    actualPrice1,
    fullPrice1,
    Total,
    arrivalProduct1Kit1,
    0,
    arrivalKit1
  );
});

controlMin2.addEventListener("click", (em) => {
  Min(
    em.target,
    products[1],
    controlNum2,
    controlMax2,
    actualPrice2,
    fullPrice2,
    Total,
    arrivalProduct2Kit1,
    arrivalProduct2Kit2,
    arrivalKit1,
    arrivalKit2
  );
});

controlMin3.addEventListener("click", (em) => {
  Min(
    em.target,
    products[2],
    controlNum3,
    controlMax3,
    actualPrice3,
    fullPrice3,
    Total,
    arrivalProduct3Kit1,
    0,
    arrivalKit1
  );
});

controlMax1.addEventListener("click", (em) => {
  Max(
    em.target,
    products[0],
    controlNum1,
    controlMin1,
    actualPrice1,
    fullPrice1,
    Total,
    arrivalProduct1Kit1,
    0,
    arrivalKit1
  );
});

controlMax2.addEventListener("click", (em) => {
  Max(
    em.target,
    products[1],
    controlNum2,
    controlMin2,
    actualPrice2,
    fullPrice2,
    Total,
    arrivalProduct2Kit1,
    arrivalProduct2Kit2,
    arrivalKit1,
    arrivalKit2
  );
});

controlMax3.addEventListener("click", (em) => {
  Max(
    em.target,
    products[2],
    controlNum3,
    controlMin3,
    actualPrice3,
    fullPrice3,
    Total,
    arrivalProduct3Kit1,
    0,
    arrivalKit1
  );
});

// Выбор Карточек

let stateAllSelectCards = true;

AllSelectCards.addEventListener("click", (em) => {
  let counts = allSelectCard(
    stateAllSelectCards,
    em.target,
    products,
    Total,
    selectCard1,
    selectCard2,
    selectCard3
  );
  stateAllSelectCards = counts;

  if (!stateAllSelectCards) {
    allSelectedActivCount = 0;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProducts.classList.add("dNone");

    countActivProductsM.textContent = allSelectedActivCount;
    countActivProductsM.classList.add("dNone");

    arrivalKit1.classList.add("dNone");

    arrivalItem1.classList.add("dNone");
    arrivalItem2[0].classList.add("dNone");
    arrivalKit2.classList.add("dNone");
    arrivalItem2[1].classList.add("dNone");

    arrivalItem3.classList.add("dNone");
  } else {
    allSelectedActivCount =
      products[0].isSelected + products[1].isSelected + products[2].isSelected;

    if (allSelectedActivCount != 0) {
      countActivProducts.textContent = allSelectedActivCount;
      countActivProducts.classList.remove("dNone");

      countActivProductsM.textContent = allSelectedActivCount;
      countActivProductsM.classList.remove("dNone");

      arrivalKit1.classList.remove("dNone");

      if (Number(arrivalItem2[1].textContent) > 0) {
        arrivalKit2.classList.remove("dNone");
        arrivalItem2[1].classList.remove("dNone");
      }

      if (!products[0].isDeleted) {
        arrivalItem1.classList.remove("dNone");
      }

      if (!products[1].isDeleted) {
        arrivalItem2[0].classList.remove("dNone");
        arrivalItem2[1].classList.remove("dNone");
      }

      if (!products[2].isDeleted) {
        arrivalItem3.classList.remove("dNone");
      }
    }
  }
});

selectCard1.addEventListener("click", (em) => {
  selectCard(em.target, products[0], Total, AllSelectCards);

  if (products[0].isSelected) {
    countActivProducts.classList.remove("dNone");
    countActivProductsM.classList.remove("dNone");
    allSelectedActivCount++;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;

    arrivalItem1.classList.remove("dNone");

    if (
      arrivalItem2[0].classList.contains("dNone") &&
      arrivalItem3.classList.contains("dNone")
    ) {
      arrivalKit1.classList.remove("dNone");
    }
  } else {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
    if (allSelectedActivCount == 0) {
      countActivProducts.classList.add("dNone");
      countActivProductsM.classList.add("dNone");
    }

    arrivalItem1.classList.add("dNone");

    if (
      arrivalItem2[0].classList.contains("dNone") &&
      arrivalItem3.classList.contains("dNone")
    ) {
      arrivalKit1.classList.add("dNone");
    }
  }

  if (
    products[0].isSelected &&
    products[1].isSelected &&
    products[2].isSelected
  ) {
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
});

selectCard2.addEventListener("click", (em) => {
  selectCard(em.target, products[1], Total, AllSelectCards);

  if (products[1].isSelected) {


    countActivProducts.classList.remove("dNone");
    countActivProductsM.classList.remove("dNone");
    allSelectedActivCount++;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;

    for (var i = 0; i < arrivalItem2.length; i++) {
      if (products[2].quantityRemains <= products[2].quantity) {
        if (Number(arrivalItem2[1].textContent) != 0) {

          arrivalItem2[i].classList.remove("dNone");
          arrivalKit2.classList.remove("dNone");
        }
      }
      arrivalItem2[i].classList.remove("dNone");
      arrivalKit1.classList.remove("dNone");
    }
  } else {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
    if (allSelectedActivCount == 0) {
      countActivProducts.classList.add("dNone");
      countActivProductsM.classList.add("dNone");
    }

    for (var i = 0; i < arrivalItem2.length; i++) {
      arrivalItem2[i].classList.add("dNone");
    }

    arrivalKit2.classList.add("dNone");

    if (
      arrivalItem2[0].classList.contains("dNone") &&
      arrivalItem1.classList.contains("dNone")
    ) {
      arrivalKit1.classList.add("dNone");
    }
  }

  if (
    products[0].isSelected &&
    products[1].isSelected &&
    products[2].isSelected
  ) {
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
});

selectCard3.addEventListener("click", (em) => {
  selectCard(em.target, products[2], Total, AllSelectCards);

  if (products[2].isSelected) {
    countActivProducts.classList.remove("dNone");
    countActivProductsM.classList.remove("dNone");
    allSelectedActivCount++;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;

    arrivalKit1.classList.remove("dNone");
    arrivalItem3.classList.remove("dNone");

    if (
      arrivalItem2[0].classList.contains("dNone") &&
      arrivalItem3.classList.contains("dNone")
    ) {
      arrivalKit1.classList.remove("dNone");
    }
  } else {
    allSelectedActivCount--;
    countActivProducts.textContent = allSelectedActivCount;
    countActivProductsM.textContent = allSelectedActivCount;
    if (allSelectedActivCount == 0) {
      countActivProducts.classList.add("dNone");
      countActivProductsM.classList.add("dNone");
    }

    arrivalItem3.classList.add("dNone");

    if (
      arrivalItem2[0].classList.contains("dNone") &&
      arrivalItem3.classList.contains("dNone")
    ) {
      arrivalKit1.classList.add("dNone");
    }
  }

  if (
    products[0].isSelected &&
    products[1].isSelected &&
    products[2].isSelected
  ) {
    AllSelectCards.classList.add("checkbox_active");
    AllSelectCards.classList.remove("checkbox");
  }
});
