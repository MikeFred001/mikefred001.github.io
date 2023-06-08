const downloadButton = document.querySelector('.download-button');
const printButton = document.querySelector('.print-button');
const resume = document.querySelector('.resume');

const homeButton = document.querySelector('.home-button');
const aboutButton = document.querySelector('.about-button');
const contactButton = document.querySelector('.contact-button');

const footerLinks = document.getElementsByClassName('footer-link');
const footerLinkedin = document.querySelector('.footer-linkedin');
const footerGithub = document.querySelector('.footer-github');
const footerPhone = document.querySelector('.footer-phone');
const footerEmail = document.querySelector('.footer-email');
const phoneLink = document.querySelector('.phone-link');

window.addEventListener("scroll", function(event) {
  let scroll = this.scrollY;
  if (scrollY < 400) {
    homeButton.classList.add('nav-highlight');
    aboutButton.classList.remove('nav-highlight');
    contactButton.classList.remove('nav-highlight');
    for (let i = 0; i < footerLinks.length; i++) {
      footerLinks[i].style.opacity = '1';
    }
  } else if (scrollY >= 400 && scrollY < 1000) {
      homeButton.classList.remove('nav-highlight');
      aboutButton.classList.add('nav-highlight');
      contactButton.classList.remove('nav-highlight');
      for (let i = 0; i < footerLinks.length; i++) {
        footerLinks[i].style.opacity = '1';
      }
  } else if (scrollY >= 1000) {
      homeButton.classList.remove('nav-highlight');
      aboutButton.classList.remove('nav-highlight');
      contactButton.classList.add('nav-highlight');
      for (let i = 0; i < footerLinks.length; i++) {
        footerLinks[i].style.opacity = '0';
      }
  }
})

resume.addEventListener('mouseover', function() {
  downloadButton.style.opacity = '1';
  printButton.style.opacity = '1';
});

resume.addEventListener('mouseout', function() {
  downloadButton.style.opacity = '0';
  printButton.style.opacity = '0';
});

footerPhone.addEventListener('click', function() {
  navigator.clipboard.writeText('7023755865');
  footerPhone.textContent = 'Copied!';
  footerPhone.classList.add('copied');

  setTimeout(function(){
    footerPhone.textContent = '702-375-5865';
    footerPhone.classList.remove('copied');
  }, 3000);
});

phoneLink.addEventListener('click', function() {
  navigator.clipboard.writeText('7023755865');
  phoneLink.innerHTML = 'Copied!';
  phoneLink.classList.add('copied');

  setTimeout(function(){
    phoneLink.innerHTML = '702-375-5865<span class="material-symbols-outlined">content_copy</span>';
    phoneLink.classList.remove('copied');
  }, 3000);
});