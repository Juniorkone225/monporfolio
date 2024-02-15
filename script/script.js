function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent =
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%";
  document
    .querySelector("#progress-bar")
    .style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);

/*===== Skills Animation =====*/
const skills_wrap = document.querySelector(".about-skills"),
  skills_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
  skillsEffect();
});
// every time we scroll checking, we exceeded the about-skills or not
function checkScroll(el) {
  //getting the top position of about-skills relative to view port, in other words we need to get
  // amount of pixels between about-skills and the top edge of the window.
  let rect = el.getBoundingClientRect();
  // after knowing the amount of pixels between the top edge of about skills and the top edge of window
  // now we will check we exceeded the bottom edge of about skills or not
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}
function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
let icon = document.querySelector(".mobile_menu_icon");
let icon_toggle = document.querySelector(".mobile_menu_toggle");
let mobile_menu = document.querySelector(".nav_menu");
let nav_menu_links = document.querySelectorAll(".nav_links li a");

// Mobile Navigation
icon.addEventListener("click", () => {
  icon_toggle.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.querySelector("header").classList.add("sticky");
  } else {
    document.querySelector("header").classList.remove("sticky");
  }
});
var typed = new Typed(".typing", {
  strings: ["Infographiste 2D", "Developpeur web", "Monteur video"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 1500);
ScrollReveal().reveal(".section_acceuil_letf_content", {
  delay: 1700,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".aa", {
  delay: 1900,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".section_acceuil_right", {
  delay: 2100,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".slide", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".section_porfolio_texte1", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".section_porfolio_texte2", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".section_competence_boite1", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".section_competence_boite1", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".circle_apropos", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
ScrollReveal().reveal(".pp", {
  delay: 400,
  distance: "60px",
  interval: 400,
});
