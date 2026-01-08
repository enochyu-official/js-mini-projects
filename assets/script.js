document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.toc a');
  
  const targets = Array.from(navLinks)
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(el => el !== null);

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  targets.forEach(target => observer.observe(target));
});

