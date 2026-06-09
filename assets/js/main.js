(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = Array.from(document.querySelectorAll('.primary-nav a'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateActiveNav() {
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 96) current = section;
    }

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  }

  if (sections.length) {
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav, { passive: true });
    window.addEventListener('resize', updateActiveNav);
  }
})();
