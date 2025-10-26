// Small interactive helpers: theme toggle, mobile nav, smooth scrolling, set year
(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Theme: persist in localStorage
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  if (themeToggle){
    themeToggle.addEventListener('click', () => {
      const isLight = root.classList.toggle('light');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }

  // Mobile menu toggle
  if (menuToggle && mainNav){
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('hidden');
    });
    // hide nav by default on small screens
    if (window.innerWidth <= 820) mainNav.classList.add('hidden');
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820) mainNav.classList.remove('hidden');
      else mainNav.classList.add('hidden');
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.pushState(null, '', href);
        if (window.innerWidth <= 820 && mainNav) mainNav.classList.add('hidden');
      }
    });
  });
})();