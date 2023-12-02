export function  nameValidation(name){
    const Regex = /\d/;
    return Regex.test(name);
}


export function emailValidation(mail){
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(mail);
}


export function phoneNumberValidation(number){
    const Regex = number.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    return (Regex[0].length == 11)
}

export function InnValidation(number){
    return (number.length == 12)
}
