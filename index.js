
document.addEventListener("DOMContentLoaded", function() {
    var sidenav = document.querySelector(".side-navbar");
    sidenav.style.display = "none";
  
    window.showNavbar = function() {
      sidenav.style.display = "block";
    }
  
    window.closeNavbar = function() {
      sidenav.style.display = "none";
    }
  });