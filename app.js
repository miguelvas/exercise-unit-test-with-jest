function sum(a, b) {
  return a + b;
}

let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
}


function fromDollarToYen(dollars) {
    let euros = dollars / oneEuroIs.USD;
    return euros * oneEuroIs.JPY;
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromYenToPound(yens) {
    let euros = yens / oneEuroIs.JPY;
    return euros * oneEuroIs.GBP;
}

console.log(fromDollarToYen(2));   // ≈ 292.5 JPY
console.log(fromEuroToDollar(2));  // ≈ 2.14 USD
console.log(fromYenToPound(2));    // ≈ 0.011 GBP


module.exports = { sum, fromDollarToYen, fromYenToPound };
