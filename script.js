function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    var enterSName = document.getElementById("enterSName").value;
    var findSenderBankAccount = enterSName + "BankBalance";
    var enterSAmount = parseInt(document.getElementById("enterBalance").value);
    if (enterAmount > enterSAmount){
        alert("Insufficient Balance!")
    }
    else{
        var findUserBankAccount = enterName + "BankBalance";
        var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
        var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
        alert(`Transaction Successful !!
          ₹${enterAmount} is sent to ${enterName}@gmail.com`)
          document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
          document.getElementById(findUserBankAccount).innerHTML = finalAmount;

        //transaction history
        var createPTag = document.createElement("li");
        var textNode = document.createTextNode(`₹ ${enterAmount} is sent from the sender with email-id ${enterSName}@gmail.com to recepient with email-id ${enterName}@gmail.com on ${Date()}.`);
        createPTag.appendChild(textNode);
        var element = document.getElementById("transaction-history-body");
        element.insertBefore(createPTag, element.firstChild);
    }
}
