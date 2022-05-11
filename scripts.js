var menuBtn = document.getElementById("menuBtn");
var sidenavbar = document.getElementById("sidenavbar");
var menu = document.getElementById("menu");
sidenavbar.style.right = "-200px";
menuBtn.onclick = function () {
  if (sidenavbar.style.right == "-200px") {
    sidenavbar.style.right == "0";
  } else {
    sidenavbar.style.right == "-200px";
  }
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
  });
};