import { products } from "../data/product.js";
import { numberWithSpaces } from "./numberWithSpaces.js";

export function Min(
  buttonMin,
  product,
  number,
  buttonMax,
  actualPrice,
  fullPrice,
  Total,
  arrivalProduct1,
  arrivalProduct2,
  arrivalKit1,
  arrivalKit2
) {
  console.log("min");
  if (product.quantity > 1) {
    product.quantity--;
    number.innerText = product.quantity;

    if (product.isSelected) {
      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""));
      let total_Counts = Number(Total.totalCounts.textContent);
      let total_PriceCounts = Number(
        Total.totalPriceCounts.textContent.replace(/\s/g, "")
      );
      let total_Discount = Number(
        Total.totalDiscount.textContent.substring(1).replace(/\s/g, "")
      );

      Total.totalPrice.textContent = `${numberWithSpaces(
        Math.trunc(total_Price - product.price)
      )}`;
      Total.totalCounts.textContent = `${total_Counts - 1}`;
      Total.totalPriceCounts.textContent = `${numberWithSpaces(
        Math.trunc(total_PriceCounts - product.fullPrice)
      )}`;
      Total.totalDiscount.textContent = `−${numberWithSpaces(
        Math.trunc(total_Discount - (product.fullPrice - product.price))
      )}`;

      let arrival_Product1 = arrivalProduct1.textContent;
      let arrival_Product2 = arrivalProduct2.textContent;

      if (product.quantity >= product.quantityRemains) {
        arrivalProduct2.textContent = arrival_Product2 - 1;

        if (arrival_Product2 <= 1) {
          arrivalKit2.classList.add("dNone");
        }
      } else {
        arrivalProduct1.textContent = Number(arrival_Product1) - 1;
        if (arrival_Product1 <= 1) {
          arrivalKit1.classList.add("dNone");
        }
      }
    }

    actualPrice.textContent = numberWithSpaces(
      Math.trunc(product.quantity * product.price)
    );
    fullPrice.textContent = `${numberWithSpaces(
      Math.trunc(product.quantity * product.fullPrice)
    )} сом`;

    if (product.quantity == 1) {
      buttonMin.classList.remove("product-quantity__control-min_activ");
      buttonMax.classList.add("product-quantity__control-max_activ");
    }
  } else {
    console.log("lock");
  }
}

export function Max(
  buttonMax,
  product,
  number,
  buttonMin,
  actualPrice,
  fullPrice,
  Total,
  arrivalProduct1,
  arrivalProduct2,
  arrivalKit1,
  arrivalKit2
) {
  if (product.quantity < product.avalibleOnFastWarehouse) {
    product.quantity++;
    number.innerText = product.quantity;

    if (product.isSelected) {
      let total_Price = Number(Total.totalPrice.textContent.replace(/\s/g, ""));
      let total_Counts = Number(Total.totalCounts.textContent);
      let total_PriceCounts = Number(
        Total.totalPriceCounts.textContent.replace(/\s/g, "")
      );
      let total_Discount = Number(
        Total.totalDiscount.textContent.substring(1).replace(/\s/g, "")
      );

      Total.totalPrice.textContent = `${numberWithSpaces(
        Math.trunc(total_Price + product.price)
      )}`;
      Total.totalCounts.textContent = `${total_Counts + 1}`;
      Total.totalPriceCounts.textContent = `${numberWithSpaces(
        Math.trunc(total_PriceCounts + product.fullPrice)
      )}`;
      Total.totalDiscount.textContent = `−${numberWithSpaces(
        Math.trunc(total_Discount + (product.fullPrice - product.price))
      )}`;

      let arrival_Product1 = Number(arrivalProduct1.textContent);
      let arrival_Product2 = Number(arrivalProduct2.textContent);

      if (product.quantity > product.quantityRemains) {
        arrivalProduct2.textContent = arrival_Product2 + 1;
        if (arrival_Product2 >= 0) {
          arrivalKit2.classList.remove("dNone");
        }
      } else {
        arrivalProduct1.textContent = arrival_Product1 + 1;
      }
    }

    actualPrice.textContent = numberWithSpaces(
      Math.trunc(product.quantity * product.price)
    );
    fullPrice.textContent = `${numberWithSpaces(
      Math.trunc(product.quantity * product.fullPrice)
    )} сом`;

    if (product.quantity >= product.avalibleOnFastWarehouse) {
      buttonMax.classList.remove("product-quantity__control-max_activ");
      buttonMin.classList.add("product-quantity__control-min_activ");
    }
  } else {
    console.log("lock");
  }
}
