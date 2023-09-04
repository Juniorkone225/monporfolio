let icon = document.querySelector('.mobile_menu_icon');
let icon_toggle = document.querySelector('.mobile_menu_toggle');
let mobile_menu = document.querySelector('.nav_menu');
let nav_menu_links = document.querySelectorAll('.nav_links li a');

// Mobile Navigation
icon.addEventListener('click', () => {
  icon_toggle.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    document.querySelector('header').classList.add('sticky');
  } else {
    document.querySelector('header').classList.remove('sticky');
  }
});
var typed = new Typed(".typing", {
  strings: ["Infographiste 2D", "Developpeur fond-end", "Monteur video"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


