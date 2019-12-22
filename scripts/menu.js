var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".nav--top");

toggle.addEventListener(
  "click",
  function() {
    // console.log("toggle clicked");
    topNav.classList.toggle("active");
  },
  false
);
