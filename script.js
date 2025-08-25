// ===== Mobile Menu Toggle =====
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon?.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

// Close menu on nav link click (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

// ===== Typed.js (role typing) =====
const typedTarget = document.querySelector('.typed-role');
if (typedTarget) {
  new Typed('.typed-role', {
    strings: [
      'Web Developer',
      'Computer Science Student',
      'UI/UX Enthusiast',
      'Software QA Explorer',
      'Network Fundamentals Learner'
    ],
    typeSpeed: 90,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
  });
}

// ===== ScrollReveal Animations =====
if (window.ScrollReveal) {
  const sr = ScrollReveal({ distance: '60px', duration: 1200, delay: 180, reset: true });
  sr.reveal('.home-img', { origin: 'left' });
  sr.reveal('.home-content', { origin: 'right' });
  sr.reveal('.about-img', { origin: 'left' });
  sr.reveal('.about-content', { origin: 'right' });
  sr.reveal('.section-title', { origin: 'top' });
  sr.reveal('.project-card', { origin: 'bottom', interval: 120 });
  sr.reveal('.skills-grid li', { origin: 'bottom', interval: 80 });
  sr.reveal('.contact-form', { origin: 'bottom' });
  sr.reveal('.contact-links', { origin: 'bottom' });
}

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function onScroll() {
  const scrollY = window.pageYOffset;
  sections.forEach(sec => {
    const top = sec.offsetTop - 140; // header offset
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(a => a.classList.remove('active'));
      document.querySelector(`.navbar a[href="#${id}"]`)?.classList.add('active');
    }
  });
}
window.addEventListener('scroll', onScroll);

// ===== Contact (demo only) =====
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('form-message');
  msg.textContent = 'Thanks! Your message has been sent ✅';
  msg.style.color = '#88ffdd';
  e.target.reset();
});
