const validPin = 1234;

// add money featuere

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

// cash out money feature
document.getElementById("withdraw_btn").addEventListener("click",function(e){
    e.preventDefault();
    const amount = parseInt(document.getElementById("withdraw_amount").value);
    const availableBalance = parseInt(document.getElementById("Available_balance").innerText);

    // console.log(amount, availableBalance);
    const totalNewAvailableBalance = availableBalance - amount;
    console.log(availableBalance, amount, totalNewAvailableBalance);

document.getElementById("Available_balance").innerText = totalNewAvailableBalance;


})





// toggling feature
document.getElementById("add_button").addEventListener("click",function(){
    document.getElementById("cash_out_parent").style.display = "none";
    document.getElementById("add_money_parent").style.display = "block";
})

document.getElementById("cash_out_button").addEventListener("click",function(){
    document.getElementById("add_money_parent").style.display = "none";
    document.getElementById("cash_out_parent").style.display = "block";
})