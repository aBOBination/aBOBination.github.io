import { loadAbout, loadWork, loadContact } from './load.js';

const target = document.querySelector('.target');
const links = document.querySelectorAll('.mynav p');

function mouseenterFunc() {
  if (!this.parentNode.classList.contains('active')) {
    links.forEach((link) => {
      if (link.parentNode.classList.contains('active')) {
        link.parentNode.classList.remove('active');
      }
      link.style.opacity = '0.5';
      link.style.fontWeight = '200';
    });

    this.parentNode.classList.add('active');
    this.style.opacity = '1';
    this.style.fontWeight = '200';

    const rect = this.getBoundingClientRect();
    const { width, height, left, top } = rect;

    target.style.width = `${width}px`;
    target.style.height = `${height - 50}px`;
    target.style.left = `${left}px`;
    target.style.top = `${top + 40}px`;
    target.style.borderColor = '#e1e2e1';
    target.style.transform = 'none';
    target.style.zIndex = 'auto';
  }
}

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.textContent === 'About') {
      loadAbout();
    } else if (link.textContent === 'Work') {
      loadWork();
    } else if (link.textContent === 'Contact') {
      loadContact();
    }
  });
  link.addEventListener('mouseenter', mouseenterFunc);
});

export default function resizeFunc() {
  const active = document.querySelector('.mynav li.active');

  if (active) {
    const left = active.getBoundingClientRect().left + window.pageXOffset;
    const top = active.getBoundingClientRect().top + window.pageYOffset;

    target.style.left = `${left}px`;
    target.style.top = `${top}px`;
  }
}
