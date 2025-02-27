let menu = document.querySelector(".fixed-menu");
let mobileMenu = document.querySelector(".mobile-menu");
let body = document.querySelector("body");

let classLink = '.main-link';

menu.addEventListener('click', function (event) {
  let clickTarget = event.target;
  let activeBtn = document.querySelector('.active');

  if (clickTarget.classList.contains('nav-link')) {
    clickTarget.classList.add('active');
    activeBtn.classList.remove('active');

    if (!mobileMenu.classList.contains('hide')) {
      mobileMenu.classList.add('hide')
      body.classList.remove("off-scroll");
    }
  }
});

window.onscroll = function () {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h * 4) {
    classLink = '.comments-link';
  }
  else if (window.scrollY >= h * 3) {
    classLink = '.works-link';
  }
  else if (window.scrollY >= h * 2) {
    classLink = '.skills-link';
  }
  else if (window.scrollY >= h) {
    classLink = '.about-link';
  }
  else {
    classLink = '.main-link';
  }
  let activeBtn = document.querySelector('.active');

  let newActiveBtn = document.querySelector(classLink);
  if (!newActiveBtn.classList.contains('active')) {
    newActiveBtn.classList.add('active');
    activeBtn.classList.remove('active')
  }
};

document.querySelector(".mobile-button").addEventListener('click', function (event) {
  mobileMenu.classList.toggle('hide')
  body.classList.toggle("off-scroll");
});

