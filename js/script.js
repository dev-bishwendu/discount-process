let amount = document.getElementById("amount");
let pricePerUnit = document.getElementById("pricePerUnit");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

if (amount>= 500) {
    calculate.addEventListener("click", function() {
        let totalPrice = amount*pricePerUnit.tofixed(2);
        let discountedPrice = totalPrice - (totalPrice * 20)/100;
        result.innerText = "Total Price: $" + discountedPrice.toFixed(2);
    });
}