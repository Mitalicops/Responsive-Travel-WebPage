const header = document.querySelector('header');

window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", window.scrollY > 60)
});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open')
};


// Function to close the navigation menu
function closeMenu() {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
}

// Click event handler for the menu icon
menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
};

// Scroll event listener to close the menu when scrolling
window.addEventListener('scroll', closeMenu);
