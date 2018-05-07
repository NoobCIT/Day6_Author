let menu = document.getElementById('menu');
let navlinks = document.getElementsByClassName('navlink');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');

menu.addEventListener('click', showMenu);

function showMenu() {
  for (let element of navlinks) {
    element.classList.toggle('open');
  }
  ul.classList.toggle('list');
  nav.classList.toggle('list');
}
