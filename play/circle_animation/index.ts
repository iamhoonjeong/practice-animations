import './style.scss';

const parent = document.querySelector('.loader');
for (let i = 0; i < 19; i++) {
  let circle = document.createElement('span');
  circle.classList.add('circle');
  parent.appendChild(circle);
}
