
    // Toggle sidebar menu on mobile device
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('sidebar');
        });
        // download img for header background 
        document.addEventListener("DOMContentLoaded", function() {
        const header = document.querySelector('.header');
        const backgroundImageUrl = './img/pexels-nao-triponez-129207.avif';

        const img = new Image();
        img.src = backgroundImageUrl;
        img.onload = () => {
            header.style.backgroundImage = `url(${backgroundImageUrl})`;
        };
        });
        //scroll smoothly
    window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
  
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  });
// Remove element position when scrolling
  window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;
  
      if (elementPosition < screenPosition) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  });
  
  
  