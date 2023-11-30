import { products } from "../data/product.js";
import { numberWithSpaces } from "../script/numberWithSpaces.js";


export function Min(buttonMin, product, number, buttonMax, actualPrice, fullPrice, Total) {

  console.log('min');
  if (product.quantity > 1){

    product.quantity--
    number.innerText = product.quantity

    if (product.isSelected){
      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""))
      let total_Counts = Number(Total.totalCounts.textContent)
      let total_PriceCounts = Number(Total.totalPriceCounts.textContent.replace(/\s/g, ""))
      let total_Discount = Number(Total.totalDiscount.textContent.substring(1).replace(/\s/g, ""))

      Total.totalPrice.textContent = `${numberWithSpaces(Math.trunc(total_Price - product.price))}`
      Total.totalCounts.textContent = `${total_Counts - 1}`
      Total.totalPriceCounts.textContent = `${numberWithSpaces(Math.trunc(total_PriceCounts - product.fullPrice))}`
      Total.totalDiscount.textContent = `−${numberWithSpaces(Math.trunc(total_Discount - (product.fullPrice - product.price)))}`
    }

    actualPrice.textContent = numberWithSpaces(Math.trunc(product.quantity * product.price))
    fullPrice.textContent = `${numberWithSpaces(Math.trunc((product.quantity * product.fullPrice)))} сом`
    
    if (product.quantity == 1){
      buttonMin.classList.remove('product-quantity__control-min_activ')
      buttonMax.classList.add('product-quantity__control-max_activ')
    }
  } else {
    console.log('lock');
  }
}

export function Max(buttonMax, product, number, buttonMin, actualPrice, fullPrice, Total) {
  if (product.quantity < product.avalibleOnFastWarehouse){

    product.quantity++
    number.innerText = product.quantity

    if (product.isSelected){
      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""))
      let total_Counts = Number(Total.totalCounts.textContent)
      let total_PriceCounts = Number(Total.totalPriceCounts.textContent.replace(/\s/g, ""))
      let total_Discount = Number(Total.totalDiscount.textContent.substring(1).replace(/\s/g, ""))

      Total.totalPrice.textContent = `${numberWithSpaces(Math.trunc(total_Price + product.price))}`
      Total.totalCounts.textContent = `${total_Counts + 1}`
      Total.totalPriceCounts.textContent = `${numberWithSpaces(Math.trunc(total_PriceCounts + product.fullPrice))}`
      Total.totalDiscount.textContent = `−${numberWithSpaces(Math.trunc(total_Discount + (product.fullPrice - product.price)))}`
    }

    actualPrice.textContent = numberWithSpaces(Math.trunc(product.quantity * product.price))
    fullPrice.textContent = `${numberWithSpaces(Math.trunc((product.quantity * product.fullPrice)))} сом`

    if (product.quantity >= product.avalibleOnFastWarehouse){
      buttonMax.classList.remove('product-quantity__control-max_activ')
      buttonMin.classList.add('product-quantity__control-min_activ')
    }
  } else {
    console.log('lock');
  }
}



export function sum(a) {
  return `${a} <span>сом</span>`;
}