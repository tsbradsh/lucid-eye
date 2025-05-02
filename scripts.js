let ticking = false;
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link =>
  link.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.remove('active');
  })
);

function handleScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      document.querySelectorAll('.scroll-section').forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          section.classList.add('reveal');
        } else {
          section.classList.remove('reveal');
        }
      });
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', handleScroll);