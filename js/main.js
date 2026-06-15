// ═══════════════════════════════════════
// MOSH REALTY — main.js
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll ──
  const nav = document.querySelector('.nav');
  function handleScroll() {
    nav?.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ── Mobile menu ──
  const toggle = document.querySelector('.nav-toggle');
  const mobileMenu = document.querySelector('.nav-mobile-menu');
  toggle?.addEventListener('click', () => {
    const open = mobileMenu?.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      toggle?.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });

  // ── Active nav link ──
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
    const h = a.getAttribute('href') || '';
    if (h === page || (page === '' && h === 'index.html') || (page === 'index.html' && h === 'index.html')) {
      a.classList.add('active');
    }
  });

  // ── Intersection observer for animations ──
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up, .fade-in').forEach(el => io.observe(el));

  // ── Counter animation ──
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target.querySelector('.stat-num');
      if (!el || el.dataset.done) return;
      el.dataset.done = '1';
      const raw = el.textContent.trim();
      const num = parseFloat(raw.replace(/[^\d.]/g, ''));
      const suffix = raw.replace(/[\d.]/g, '');
      let start = 0;
      const dur = 1200;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        const val = num % 1 !== 0 ? (ease * num).toFixed(1) : Math.floor(ease * num);
        el.innerHTML = val + '<span>' + suffix + '</span>';
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      cio.unobserve(e.target);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.stat-item').forEach(el => cio.observe(el));

});
