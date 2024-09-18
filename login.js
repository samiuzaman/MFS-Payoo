// document
//   .getElementById("login-btn")
//   .addEventListener("click", function (event) {
//     event.preventDefault();
//     const phoneNumber = document.getElementById("phone-number");
//     console.log(phoneNumber.value);
//     const pinNumber = document.getElementById("pin-number");
//     console.log(pinNumber.value);
//     // if (phoneNumber === "5" && pinNumber === "1234") {
//     //   console.log("You are Log In");
//     // } else {
//     //   alert("Wrong phone number or pin");
//     // }
//   });

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Get phone number and pin
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    // validate
    if (phoneNumber === "5" && pinNumber === "1234") {
      window.location.href = "/home.html";
    } else {
      alert("Wrong Phone Number or Pin");
    }
  });
