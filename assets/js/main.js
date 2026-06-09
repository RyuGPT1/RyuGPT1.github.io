(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = Array.from(document.querySelectorAll('.primary-nav a'));
  const sections = navLinks
    .map((link) => {
      const href = link.getAttribute('href');
      return href && href.startsWith('#') ? document.querySelector(href) : null;
    })
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

  const emailModal = document.querySelector('[data-email-modal]');
  const emailOpeners = document.querySelectorAll('[data-email-open]');
  const emailClosers = document.querySelectorAll('[data-email-close]');
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const copyStatus = document.querySelector('[data-copy-status]');

  function openEmailModal() {
    if (!emailModal) return;
    emailModal.classList.add('open');
    emailModal.setAttribute('aria-hidden', 'false');
    if (copyStatus) copyStatus.textContent = '';
  }

  function closeEmailModal() {
    if (!emailModal) return;
    emailModal.classList.remove('open');
    emailModal.setAttribute('aria-hidden', 'true');
  }

  emailOpeners.forEach((button) => button.addEventListener('click', openEmailModal));
  emailClosers.forEach((button) => button.addEventListener('click', closeEmailModal));

  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const email = button.dataset.copyEmail;
      try {
        await navigator.clipboard.writeText(email);
        if (copyStatus) copyStatus.textContent = `${email} copied.`;
      } catch (error) {
        if (copyStatus) copyStatus.textContent = email;
      }
    });
  });

  const imageModal = document.querySelector('[data-image-modal]');
  const imageModalImg = document.querySelector('[data-image-modal-img]');
  const imageModalCaption = document.querySelector('[data-image-modal-caption]');
  const imageClosers = document.querySelectorAll('[data-image-close]');
  const projectVisuals = Array.from(document.querySelectorAll('.project-visual'));

  function openImageModal(figure) {
    if (!imageModal || !imageModalImg) return;
    const image = figure.querySelector('img');
    const caption = figure.querySelector('figcaption');
    if (!image) return;

    imageModalImg.src = image.currentSrc || image.src;
    imageModalImg.alt = image.alt || '';
    if (imageModalCaption) imageModalCaption.textContent = caption ? caption.textContent : image.alt || '';
    imageModal.classList.add('open');
    imageModal.setAttribute('aria-hidden', 'false');
  }

  function closeImageModal() {
    if (!imageModal || !imageModalImg) return;
    imageModal.classList.remove('open');
    imageModal.setAttribute('aria-hidden', 'true');
    imageModalImg.removeAttribute('src');
  }

  projectVisuals.forEach((figure) => {
    figure.setAttribute('role', 'button');
    figure.setAttribute('tabindex', '0');
    figure.setAttribute('aria-label', 'Open larger project image');
    figure.addEventListener('click', () => openImageModal(figure));
    figure.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openImageModal(figure);
      }
    });
  });

  imageClosers.forEach((button) => button.addEventListener('click', closeImageModal));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeEmailModal();
      closeImageModal();
    }
  });

  const projectTabs = Array.from(document.querySelectorAll('[data-project-tab]'));
  const projectPanels = Array.from(document.querySelectorAll('[data-project-panel]'));

  function activateProject(name) {
    if (!name || !projectTabs.length) return;
    const exists = projectTabs.some((tab) => tab.dataset.projectTab === name);
    if (!exists) return;

    projectTabs.forEach((tab) => {
      const active = tab.dataset.projectTab === name;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    projectPanels.forEach((panel) => {
      panel.classList.toggle('active', panel.dataset.projectPanel === name);
    });
  }

  if (projectTabs.length) {
    projectTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const name = tab.dataset.projectTab;
        activateProject(name);
        history.replaceState(null, '', '#' + name);
      });
    });

    const initial = decodeURIComponent(window.location.hash.slice(1)) || projectTabs[0].dataset.projectTab;
    activateProject(initial);
  }
})();
