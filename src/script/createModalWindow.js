import { deliveryAdressData } from "../data/deliveryAdress.js";
import { cards } from "../data/cards.js";

export function createDeliveryModal(value){

    if (value == 'courier'){
        deliveryAdressData.courierAdresses.forEach((item) => {
            let Contact = document.createElement(`Contact-${item.id}`);
            Contact.classList.add("Contact")
            Contact.innerHTML = 
            `
            <div id="Contact-radio-${item.id}"class="${item.isSelected? 'Contact-radio_activ':'Contact-radio'}"></div>
            <div id="Contact-info-${item.id}" class="Contact__content">
              <p class="text-p-big">${item.adress}</p>
            </div>
            <div id="Contact-bin-${item.id}" class="Contact-bin"></div>
            `
    
        document.getElementById('content').appendChild(Contact);
            
        });

        changeDeliveryModal(value)
    }
    
    if (value == 'point'){
        deliveryAdressData.pointAdresses.forEach((item) => {
            let Contact = document.createElement(`Contact-${item.id}`);
            Contact.classList.add("Contact")
            Contact.innerHTML = 
            `
            <div id="Contact-radio-${item.id}" class="${item.isSelected? 'Contact-radio_activ':'Contact-radio'}"></div>
            <div class="Contact__content">
              <p id="Contact-info-${item.id}" class="text-p-big">${item.adress}</p>
              <div class="Contact__content-rating">
                <img src="./src/img/star.svg">
                <p>${item.rating}</p>
                <span class="text-span-gray">Пункт выдачи</span>
              </div>
            </div>
            <div id="Contact-bin-${item.id}" class="Contact-bin"></div>
            `
    
            document.getElementById('content').appendChild(Contact);
        });

        changeDeliveryModal(value)
    }


    if (value == 'card'){
        cards.forEach((item) => {
            let Contact = document.createElement(`Contact-${item.id}`);
            Contact.classList.add("Contact")
            Contact.innerHTML = 
            `
            <div id="Contact-radio-${item.id}" class="${item.isSelected? 'Contact-radio_activ':'Contact-radio'}"></div>
            <div class="Contact__contentCard">
              <img src="${item.paySystemIcon}">
              <p id="Contact-info-${item.id}" class="text-p-big">${item.cardNumber}</p>
            </div>
            `
    
            document.getElementById('content').appendChild(Contact);
        });

        changeDeliveryModal(value)
    }


}


function changeDeliveryModal(value){

    const overlay = document.querySelector(".overlay");
    const modalWindows = document.querySelector(".modalWindows");
    const searchClose = document.getElementById("searchClose");
    const acceptModal = document.getElementById("acceptModal");

    const ContactRadio1 = document.getElementById("Contact-radio-1")
    const ContactRadio2 = document.getElementById("Contact-radio-2")
    const ContactRadio3 = document.getElementById("Contact-radio-3")
    const ContactRadio4 = document.getElementById("Contact-radio-4")

    const ContactInfo1 = document.getElementById("Contact-info-1")
    const ContactInfo2 = document.getElementById("Contact-info-2")
    const ContactInfo3 = document.getElementById("Contact-info-3")
    const ContactInfo4 = document.getElementById("Contact-info-4")

    const ContactBin1 = document.getElementById("Contact-bin-1")
    const ContactBin2 = document.getElementById("Contact-bin-2")
    const ContactBin3 = document.getElementById("Contact-bin-3")
    const ContactBin4 = document.getElementById("Contact-bin-4")
    
    // Отменяет всплытие
    modalWindows.addEventListener("click", (event) => {
        event.stopPropagation()
    })

    // Закрытие окна
    searchClose.addEventListener("click", (event) => {
        overlay.classList.add('dNone')
        content.innerHTML = "";
    })

    overlay.addEventListener("click", (event) => {
        overlay.classList.add('dNone')
        content.innerHTML = "";
    })

    acceptModal.addEventListener("click", (event) => {
        overlay.classList.add('dNone')
        content.innerHTML = "";
    })

    // Изменение
    ContactInfo1?.addEventListener("click", () => {

        ContactRadio1?.classList.add('Contact-radio_activ')

        ContactRadio2?.classList.remove('Contact-radio_activ')
        ContactRadio3?.classList.remove('Contact-radio_activ')
        ContactRadio4?.classList.remove('Contact-radio_activ')
        ContactRadio2?.classList.add('Contact-radio')
        ContactRadio3?.classList.add('Contact-radio')
        ContactRadio4?.classList.add('Contact-radio')

        setDate(value, 0)
    })

    ContactInfo2?.addEventListener("click", () => {
        ContactRadio2?.classList.add('Contact-radio_activ')

        ContactRadio1?.classList.remove('Contact-radio_activ')
        ContactRadio3?.classList.remove('Contact-radio_activ')
        ContactRadio4?.classList.remove('Contact-radio_activ')
        ContactRadio1?.classList.add('Contact-radio')
        ContactRadio3?.classList.add('Contact-radio')
        ContactRadio4?.classList.add('Contact-radio')

        setDate(value, 1)
    })

    ContactInfo3?.addEventListener("click", () => {
        ContactRadio3?.classList.add('Contact-radio_activ')

        ContactRadio1?.classList.remove('Contact-radio_activ')
        ContactRadio2?.classList.remove('Contact-radio_activ')
        ContactRadio4?.classList.remove('Contact-radio_activ')
        ContactRadio1?.classList.add('Contact-radio')
        ContactRadio2?.classList.add('Contact-radio')
        ContactRadio4?.classList.add('Contact-radio')

        setDate(value, 2)
    })

    ContactInfo4?.addEventListener("click", () => {
        ContactRadio4?.classList.add('Contact-radio_activ')

        ContactRadio1?.classList.remove('Contact-radio_activ')
        ContactRadio2?.classList.remove('Contact-radio_activ')
        ContactRadio3?.classList.remove('Contact-radio_activ')
        ContactRadio1?.classList.add('Contact-radio')
        ContactRadio2?.classList.add('Contact-radio')
        ContactRadio3?.classList.add('Contact-radio')

        setDate(value, 3)
    })





    // Удаление
    ContactBin1?.addEventListener("click", () => {

        if (value == 'point'){
            delete deliveryAdressData.pointAdresses[0]
            content.innerHTML = "";
            createDeliveryModal(value)
        }

        if (value == 'courier'){
            delete deliveryAdressData.courierAdresses[0]
            content.innerHTML = "";
            createDeliveryModal(value)
        }

    })

    ContactBin2?.addEventListener("click", () => {
        if (value == 'point'){
            delete deliveryAdressData.pointAdresses[1]
            content.innerHTML = "";
            createDeliveryModal(value)
        }

        if (value == 'courier'){
            delete deliveryAdressData.courierAdresses[1]
            content.innerHTML = "";
            createDeliveryModal(value)
        }
    })

    ContactBin3?.addEventListener("click", () => {
        if (value == 'point'){
            delete deliveryAdressData.pointAdresses[2]
            content.innerHTML = "";
            createDeliveryModal(value)
        }

        if (value == 'courier'){
            delete deliveryAdressData.courierAdresses[2]
            content.innerHTML = "";
            createDeliveryModal(value)
        }
    })

    ContactBin4?.addEventListener("click", () => {
        if (value == 'point'){
            delete deliveryAdressData.pointAdresses[3]
            content.innerHTML = "";
            createDeliveryModal(value)
        }

        if (value == 'courier'){
            delete deliveryAdressData.courierAdresses[3]
            content.innerHTML = "";
            createDeliveryModal(value)
        }
    })
}


function setDate(value, id){

    const deliveryAdress = document.getElementById("deliveryAdress");
    const totalDeliveryAdress = document.getElementById("totalDeliveryAdress");
    const deliveryPointAdresses = document.getElementById("deliveryPointAdresses");
    const deliveryRating = document.getElementById("deliveryRating");
    const deliveryTime = document.getElementById("deliveryTime");

    if (value == 'courier'){
        deliveryPointAdresses.classList.add("dNone")
        deliveryAdress.innerText = deliveryAdressData.courierAdresses[id].adress
        totalDeliveryAdress.innerText = deliveryAdressData.courierAdresses[id].adress
    }

    if (value == 'point'){
        deliveryPointAdresses.classList.remove("dNone")

        deliveryAdress.innerText = deliveryAdressData.pointAdresses[id].adress
        totalDeliveryAdress.innerText = deliveryAdressData.pointAdresses[id].adress
        deliveryRating.innerText = deliveryAdressData.pointAdresses[id].rating
        deliveryTime.innerText = deliveryAdressData.pointAdresses[id].time
    }

    if (value == 'card'){
        const paymentSystemIcon1 = document.getElementById("paymentSystemIcon1");
        const paymentCardNumber1 = document.getElementById("paymentCardNumber1");
        const cardtPayment1 = document.getElementById("cardtPayment1");

        const paymentSystemIcon2 = document.getElementById("paymentSystemIcon2");
        const paymentCardNumber2 = document.getElementById("paymentCardNumber2");


        paymentSystemIcon1.src = cards[id].paySystemIcon
        paymentSystemIcon2.src = cards[id].paySystemIcon
        paymentCardNumber1.innerText = cards[id].cardNumber
        paymentCardNumber2.innerText = cards[id].cardNumber
        cardtPayment1.innerText  = cards[id].cardDate

    }
}
