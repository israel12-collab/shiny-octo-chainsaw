let hamburger = document.querySelector('.fa-bars');
let navBar = document.querySelector('.nav_bar');


hamburger.onclick = function() {
  navBar.classList.toggle('active');
}
