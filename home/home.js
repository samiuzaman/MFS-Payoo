// add money to the account
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;
    // Get the pin number provided
    const pinNumber = document.getElementById("input-pin-number").value;

    if (pinNumber === "1234") {
      const mainBalance = document.getElementById("main-balance").innerText;
      const newBalance = parseFloat(mainBalance) + parseFloat(addMoneyInput);
      document.getElementById("main-balance").innerText = newBalance;
    } else {
      alert("Faild to add money");
    }
  });
