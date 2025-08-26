const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
if (themeBtn) themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
if (themeBtn) themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks){
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> navLinks.classList.remove('open')));
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('is-visible'); });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) toTop.classList.add('show'); else toTop.classList.remove('show');
});
if (toTop){ toTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'})); }

const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const body = encodeURIComponent(`Hi Chandana,%0D%0A%0D%0A${msg}%0D%0A%0D%0AThanks,%0D%0A${name}%0D%0A${email}`);
    window.location.href = `mailto:myidchandana@gmail.com?subject=Portfolio%20Contact&body=${body}`;
    form.reset();
  });
}
