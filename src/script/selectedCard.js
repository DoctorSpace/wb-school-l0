import { numberWithSpaces } from "../script/numberWithSpaces.js";

export function selectCard(button, product, Total, buttonAll) {


    if (product.isSelected) {

      product.isSelected = false;
      button.classList.remove("checkbox_active");
      button.classList.add("checkbox");

      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""));
      let total_Counts = Number(Total.totalCounts.textContent);
      let total_PriceCounts = Number(Total.totalPriceCounts.textContent.replace(/\s/g, ""));
      let total_Discount = Number(Total.totalDiscount.textContent.substring(1).replace(/\s/g, ""));

      Total.totalPrice.textContent = `${numberWithSpaces(Math.trunc(total_Price - product.price * product.quantity))}`;
      Total.totalCounts.textContent = `${total_Counts - product.quantity}`;
      Total.totalPriceCounts.textContent = `${numberWithSpaces(Math.trunc(total_PriceCounts - product.fullPrice * product.quantity))}`;
      Total.totalDiscount.textContent = `−${numberWithSpaces(Math.trunc(total_Discount -(product.fullPrice - product.price) * product.quantity))}`;

      buttonAll.classList.remove("checkbox_active");
      buttonAll.classList.add("checkbox");

    } else {
      product.isSelected = true;
      button.classList.remove("checkbox");
      button.classList.add("checkbox_active");

      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""));
      let total_Counts = Number(Total.totalCounts.textContent);
      let total_PriceCounts = Number(Total.totalPriceCounts.textContent.replace(/\s/g, ""));
      let total_Discount = Number(Total.totalDiscount.textContent.substring(1).replace(/\s/g, ""));

      Total.totalPrice.textContent = `${numberWithSpaces(Math.trunc(total_Price + product.price * product.quantity))}`;
      Total.totalCounts.textContent = `${total_Counts + product.quantity}`;
      Total.totalPriceCounts.textContent = `${numberWithSpaces(Math.trunc(total_PriceCounts + product.fullPrice * product.quantity))}`;
      Total.totalDiscount.textContent = `−${numberWithSpaces(Math.trunc(total_Discount +(product.fullPrice - product.price) * product.quantity) )}`

    }

}

export function allSelectCard(
  state,
  button,
  product,
  Total,
  selectCard1,
  selectCard2,
  selectCard3
) {

    if (state) {
      state = false;
      button.classList.remove("checkbox_active");
      button.classList.add("checkbox");

      product[0].isSelected = false;
      product[1].isSelected = false;
      product[2].isSelected = false;

      selectCard1.classList.remove("checkbox_active");
      selectCard2.classList.remove("checkbox_active");
      selectCard3.classList.remove("checkbox_active");
      selectCard1.classList.add("checkbox");
      selectCard2.classList.add("checkbox");
      selectCard3.classList.add("checkbox");

      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""));
      let total_Counts = Number(Total.totalCounts.textContent);
      let total_PriceCounts = Number(Total.totalPriceCounts.textContent.replace(/\s/g, ""));
      let total_Discount = Number(Total.totalDiscount.textContent.substring(1).replace(/\s/g, ""));

      Total.totalPrice.textContent = 0;
      Total.totalCounts.textContent = 0;
      Total.totalPriceCounts.textContent = 0;
      Total.totalDiscount.textContent = 0;
    } else {
      state = true;
      button.classList.remove("checkbox");
      button.classList.add("checkbox_active");

      product[0].isDeleted ? product[0].quantity = 0 : product[0].isSelected = true
      product[1].isDeleted ? product[1].quantity = 0 : product[1].isSelected = true
      product[2].isDeleted ? product[2].quantity = 0 : product[2].isSelected = true


      selectCard1.classList.remove("checkbox");
      selectCard2.classList.remove("checkbox");
      selectCard3.classList.remove("checkbox");
      selectCard1.classList.add("checkbox_active");
      selectCard2.classList.add("checkbox_active");
      selectCard3.classList.add("checkbox_active");


      let total_Price =
        (product[0].quantity * product[0].price) +
        (product[1].quantity * product[1].price) +
        (product[2].quantity * product[2].price);
      let total_Counts =
        product[0].quantity + product[1].quantity + product[2].quantity;
      let total_PriceCounts =
        (product[0].quantity * product[0].fullPrice) +
        (product[1].quantity * product[1].fullPrice) +
        (product[2].quantity * product[2].fullPrice);
      let total_Discount =
        product[0].quantity * (product[0].fullPrice - product[0].price) +
        product[1].quantity * (product[1].fullPrice - product[1].price) +
        product[2].quantity * (product[2].fullPrice - product[2].price);

      Total.totalPrice.textContent = `${numberWithSpaces(Math.trunc(total_Price))}`;
      Total.totalCounts.textContent = total_Counts;
      Total.totalPriceCounts.textContent = `${numberWithSpaces(Math.trunc(total_PriceCounts))}`;
      Total.totalDiscount.textContent = `−${numberWithSpaces(Math.trunc(total_Discount))}`;
    }

    return state
}


export function deletedCard(product, Total){

  product[0].isDeleted ? product[0].quantity = 0 : product[0].isSelected = true
  product[1].isDeleted ? product[1].quantity = 0 : product[1].isSelected = true
  product[2].isDeleted ? product[2].quantity = 0 : product[2].isSelected = true

  let total_Price = (product[0].quantity * product[0].price) +
    (product[1].quantity * product[1].price) +
    (product[2].quantity * product[2].price);
  let total_Counts =
    product[0].quantity + product[1].quantity + product[2].quantity;
  let total_PriceCounts =
    (product[0].quantity * product[0].fullPrice) +
    (product[1].quantity * product[1].fullPrice) +
    (product[2].quantity * product[2].fullPrice);
  let total_Discount =
    product[0].quantity * (product[0].fullPrice - product[0].price) +
    product[1].quantity * (product[1].fullPrice - product[1].price) +
    product[2].quantity * (product[2].fullPrice - product[2].price);

  Total.totalPrice.textContent = `${numberWithSpaces(total_Price)}`;
  Total.totalCounts.textContent = total_Counts;
  Total.totalPriceCounts.textContent = `${numberWithSpaces(total_PriceCounts)}`;
  Total.totalDiscount.textContent = `−${numberWithSpaces(total_Discount)}`;




}