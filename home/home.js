// Open Add money Section
document
  .getElementById("add-money-section-btn")
  .addEventListener("click", function () {
    document.getElementById("add-money-contaienr").classList.remove("hidden");
    document.getElementById("cash-out-container").classList.add("hidden");
  });

// Open Cash Out Section
document
  .getElementById("cash-out-section-btn")
  .addEventListener("click", function () {
    document.getElementById("cash-out-container").classList.remove("hidden");
    document.getElementById("add-money-contaienr").classList.add("hidden");
  });
