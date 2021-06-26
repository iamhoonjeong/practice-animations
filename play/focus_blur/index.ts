import './style.scss';

const html = document.documentElement;

html.addEventListener('mousemove', (e) => {
  html.style.setProperty('--x', e.clientX + 'px');
  html.style.setProperty('--y', e.clientY + 'px');
});

const h2 = document.querySelector('h2');
h2.style.setProperty('color', 'red');
