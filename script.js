// loginButton
document.getElementById("loginButton").addEventListener("click",function(e){
    console.log("login button clicked")
    console.log(e);
    e.preventDefault();

    const mobileNumber = 1723574262;
    const pin = 1234;

    const mobileNumberValue = document.getElementById("mobile_number").value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById("pin_number").value;
    const pinNumberValueConverted = parseInt(pinNumberValue);
    // console.log(mobileNumberValueConverted, pinNumberValueConverted);

    if(mobileNumberValueConverted === mobileNumber &&
         pinNumberValueConverted === pin){
            window.location.href="./home.html"
         }
         else{
            alert("Invalid pin or password");
         }


})