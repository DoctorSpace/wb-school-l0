import { products } from "../data/product.js";


export function controlMin(count) {
  console.log('hello');


}


export function Min(buttonMin, product, number, buttonMax) {

  console.log('min');
  if (product.quantity >= product.quantityRemains){

    product.quantity--
    number.innerText = product.quantity

    if (product.quantity < product.quantityRemains){
      buttonMin.classList.remove('product-quantity__control-min_activ')
      buttonMax.classList.add('product-quantity__control-max_activ')
    }
  } else {
    console.log('lock');
  }
}

export function Max(buttonMax, product, number, buttonMin) {

  console.log('max');
  if (product.quantity < product.avalibleOnFastWarehouse){

    product.quantity++
    number.innerText = product.quantity

    if (product.quantity >= product.avalibleOnFastWarehouse){
      buttonMax.classList.remove('product-quantity__control-max_activ')
      buttonMin.classList.add('product-quantity__control-min_activ')
    }
  } else {
    console.log('lock');
  }
}



// controlMin1.addEventListener("click", (em) => {
//   console.log('hi');
// });



export function sum(a) {
  return `${a} <span>сом</span>`;
}