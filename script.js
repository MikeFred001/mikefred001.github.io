"use-strict";

const downloadButton = document.querySelector('.download-button');
const printButton = document.querySelector('.print-button');
const resume = document.querySelector('.resume');

const homeButton = document.querySelector('.home-button');
const aboutButton = document.querySelector('.about-button');
const contactButton = document.querySelector('.contact-button');
const projectsButton = document.querySelector('.projects-button');
const phoneButton = document.querySelector('.phone-btn');

const footerLinks = document.getElementsByClassName('footer-link');
const footerLinkedin = document.querySelector('.footer-linkedin');
const footerGithub = document.querySelector('.footer-github');
const footerPhone = document.querySelector('.footer-phone');
const footerEmail = document.querySelector('.footer-email');
const phoneLink = document.querySelector('.phone-link');

window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;

  for (let i = 0; i < footerLinks.length; i++) {
    footerLinks[i].style.opacity = '0';
    footerLinks[i].style.pointerEvents = 'none';
  }



  if (scrollY < 400) {
    homeButton.classList.add('nav-highlight');
    aboutButton.classList.remove('nav-highlight');
    projectsButton.classList.remove('nav-highlight');
    contactButton.classList.remove('nav-highlight');

  } else if (scrollY >= 400 && scrollY < 1000) {
    homeButton.classList.remove('nav-highlight');
    aboutButton.classList.add('nav-highlight');
    projectsButton.classList.remove('nav-highlight');
    contactButton.classList.remove('nav-highlight');

  } else if (scrollY >= 1000 && scrollY < 2800) {
    homeButton.classList.remove('nav-highlight');
    aboutButton.classList.remove('nav-highlight');
    projectsButton.classList.add('nav-highlight');
    contactButton.classList.remove('nav-highlight');

  } else if (scrollY >= 2800) {
    homeButton.classList.remove('nav-highlight');
    aboutButton.classList.remove('nav-highlight');
    projectsButton.classList.remove('nav-highlight');
    contactButton.classList.add('nav-highlight');
  }
});

footerPhone.addEventListener('click', () => {
  console.log("CLICKED!");
});

footerPhone.addEventListener('click', function () {
  console.log("Footer phone clicked!");

  navigator.clipboard.writeText('702-375-5865');
  footerPhone.textContent = 'Copied!';
  footerPhone.classList.add('copied');

  setTimeout(function () {
    footerPhone.textContent = '702-375-5865';
    footerPhone.classList.remove('copied');
  }, 3000);
});


function phoneButtonEvent() {
  console.log('CLICK');
  navigator.clipboard.writeText('702-375-5865');
  phoneButton.textContent = 'Copied!';
  phoneButton.style.color = 'white';
  phoneButton.style.fontSize = "4rem";

  setTimeout(function () {
    phoneButton.innerHTML = '<i class="fa fa-solid fa-mobile-screen"></i>';
  }, 3000);
}

phoneButton.addEventListener('click', phoneButtonEvent);