const validPin = 1234;

document.getElementById("add_money_button").addEventListener("click",function(e){
    e.preventDefault();
    // console.log("button clicked")




const bank = document.getElementById("bank").value;
const accountNumber = document.getElementById("account_number").value;
const amount = parseInt(document.getElementById("add_amount").value);
const pin = parseInt(document.getElementById("add_pin").value);
const availableBalance = parseInt(document.getElementById("Available_balance").innerText);

if(accountNumber.length<11){
    alert("enter 11 digit valid account number")
    return
}

if(pin !== validPin){
    alert("please provide valid pin number")
    return;
}
const totalNewAvailableBalance = availableBalance + amount;
document.getElementById("Available_balance").innerText = totalNewAvailableBalance;

console.log(totalNewAvailableBalance);
})

