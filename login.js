document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Login Button Clicked");
    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber.value);
  });
