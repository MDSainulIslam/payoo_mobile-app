const validPin = 1234;
const transactionData = [];

// reuseable code

// function to get input values
function getINputNumber(id){
   const inputField = document.getElementById(id);
   const inputFieldValue = inputField.value;
   const inputFieldValueNumber = parseInt(inputFieldValue);
   return inputFieldValueNumber;
}


function getInputValue(id){
   const inputField = document.getElementById(id);
   const inputFieldValue = inputField.value;
   return inputFieldValue; 
}

// function to get inner text
function getInnerText(id){
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}


// function to set innertext
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available_balance");
    availableBalanceElement.innerText = value;
}


// function to toggle
function handleToggle(id){

const forms = document.getElementsByClassName("form");

for(const form of forms){
    form.style.display = "none";
}
document.getElementById(id).style.display = "block"
}

// function to toggle buttons
function handleButtonToggle(id){

    const formBtns = document.getElementsByClassName("form-btn");

    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }

    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

}



// add money featuere

document.getElementById("add_money_button").addEventListener("click",function(e){
    e.preventDefault();

const bank = getInputValue("bank");
const accountNumber = getInputValue("account_number");
const amount = getINputNumber("add_amount");
const pin =  getINputNumber("add_pin");
const availableBalance =document.getElementById("available_balance").innerText;

if(accountNumber.length<11){
    alert("enter 11 digit valid account number")
    console.log("mobile number invalid");
    return;
}

if(pin !== validPin){
    alert("please provide valid pin number")
    return;
}
const totalNewAvailableBalance = availableBalance + amount;
setInnerText(totalNewAvailableBalance);

const data = {
    name:"Add Money",
    date: new Date().toLocaleString()
};

transactionData.push(data);

})

// cash out money feature
document.getElementById("withdraw_btn").addEventListener("click",function(e){
    e.preventDefault();
    const amount =getINputNumber("withdraw_amount");
    const availableBalance = parseInt(document.getElementById("available_balance").innerText);

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);
    
    const data = {
        name:"Cash Out",
        date: new Date().toLocaleString()
    };

    transactionData.push(data);
    console.log(transactionData);
})









document.getElementById("transaction_button").addEventListener("click",function(){
const transactionContainer = document.getElementById("transaction_container");
transactionContainer.innerText = "";

for(const data of transactionData){
    const div = document.createElement("div");
    div.innerHTML = 
    `<div class="bg-white rounded-xl p-3 flex justify-between items-center m-3">

                    <div class="flex items-center">
                        <div class="p-3 rounded-full bg-[#f4f5f7]">
                            <img src="./assets/wallet1.png" alt="">
                                
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>

                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>` 

                transactionContainer.appendChild(div);
}


})













// toggling feature
// add button
document.getElementById("add_button").addEventListener("click",function(){

handleToggle("add_money_parent");
 handleButtonToggle("add_button")

})

// cash Out button
document.getElementById("cash_out_button").addEventListener("click",function(){

handleToggle("cash_out_parent");
handleButtonToggle("cash_out_button")
})


// transfer button
document.getElementById("transfer_button").addEventListener("click",function(){
    
handleToggle("transfer_money_parent")
handleButtonToggle("transfer_button")
})


// bonus button
document.getElementById("bonus_button").addEventListener("click",function(){

handleToggle("get_bonus_parent");
handleButtonToggle("bonus_button")
})

// pay bill
document.getElementById("bill_button").addEventListener("click",function(){

handleToggle("Pay_bill_parent");
handleButtonToggle("bill_button")
})

// transaction
document.getElementById("transaction_button").addEventListener("click",function(){

handleToggle("transentions_parent");
handleButtonToggle("transaction_button");
})
