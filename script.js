// function myDroptown() {
//   var dropdown = document.getElementsByClassName("nav-item");
//   dropdown.classList.add("dropdown-menu");
// }

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".reviewSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let loginForm = document.querySelector(".login-form-container");
let formBtn = document.querySelector("#login-btn");
formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");
});
let formClose = document.querySelector("#form-close");
formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});

function myValue() {
  var myNumber = document.getElementById("userName").value;
  var myName = document.getElementById("userAdres").value;
  var myId = document.getElementById("userEmail").value;
  var myInsta = document.getElementById("userPassword").value;
  console.log(myNumber + " " + myName + " " + myId + " " + myInsta);
}
