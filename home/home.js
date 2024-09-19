// add money to the account
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Get money to be added to the account
    const inputAddMoney = document.getElementById("input-add-money").value;
    // Get the pin number provided
    const inputPinNumber = document.getElementById("input-pin-number").value;
    // verify pin number
    if (inputPinNumber === "1234") {
      const mainBalance = document.getElementById("main-balance").innerText;
      // added addMoneyInput with balance
      const newBalance = parseFloat(mainBalance) + parseFloat(inputAddMoney);
      // update the balance
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("Your pin is wrong");
    }
  });
