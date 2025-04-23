let amount = document.getElementById("amount");
let pricePerUnit = document.getElementById("pricePerUnit");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener ("click", function() {
    console.log("Button clicked");
    let amountValue = amount.value;
    let pricePerUnitValue = pricePerUnit.value;
    let totalPrice = amountValue * pricePerUnitValue;

    if (amountValue >= 500) {
        let discountedPrice = totalPrice - (totalPrice*20)/100
        result.innerText = "Total Price: $" + discountedPrice + " (20% discount applied)";
    } else {
        result.innerText = `Total Price: $  ${totalPrice}  
        if you buy more than 500 units, you will get a 20% discount!`; 
    } 
});