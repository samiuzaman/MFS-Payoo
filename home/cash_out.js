document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById("cash-out-amount").value;

    const cashOutPin = document.getElementById("cash-out-pin").value;
    if (cashOutPin === "1234") {
      const balance = document.getElementById("main-balance");
      const currentBalance = balance.innerText;
      const newBalance = parseFloat(currentBalance) - parseFloat(cashOutAmount);
      balance.innerText = newBalance;
    } else {
      alert("Your pin is wrong");
    }
  });
