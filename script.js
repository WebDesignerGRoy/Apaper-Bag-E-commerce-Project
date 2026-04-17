// APlasticBag interactions

// Mega menu (hover on desktop)
(function () {
  const navItems = document.querySelectorAll('.nav-list .has-menu');
  const mega = document.getElementById('megaProducts');
  const navRow = document.querySelector('.nav-row');
  if (!mega || !navRow) return;

  let closeTimer;
  const open = () => { clearTimeout(closeTimer); mega.classList.add('open'); };
  const close = () => { closeTimer = setTimeout(() => mega.classList.remove('open'), 120); };

  navItems.forEach((item) => {
    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', close);
    item.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      mega.classList.toggle('open');
    });
  });
  mega.addEventListener('mouseenter', open);
  mega.addEventListener('mouseleave', close);
})();

// Mobile menu
(function () {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menu.hidden = !isOpen;
  });
})();

// FAQ accordion
(function () {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

// Year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
