export function Hover() {
  const target = document.querySelector('.target');
  const links = document.querySelectorAll('.mynav a');

  function mouseenterFunc() {
    if (!this.parentNode.classList.contains('active')) {
      for (let i = 0; i < links.length; i++) {
        if (links[i].parentNode.classList.contains('active')) {
          links[i].parentNode.classList.remove('active');
        }
        links[i].style.opacity = '0.5';
        links[i].style.fontWeight = '200';
      }

      this.parentNode.classList.add('active');
      this.style.opacity = '1';
      this.style.fontWeight = '200';

      const rect = this.getBoundingClientRect();
      const { width, height, left, top } = rect;

      target.style.width = `${width}px`;
      target.style.height = `${height}px`;
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      target.style.borderColor = '#e1e2e1';
      target.style.transform = 'none';
      target.style.zIndex = 'auto';
    }
  }

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => e.preventDefault());
    links[i].addEventListener('mouseenter', mouseenterFunc);
  }

  function resizeFunc() {
    const active = document.querySelector('.mynav li.active');

    if (active) {
      const left = active.getBoundingClientRect().left + window.pageXOffset;
      const top = active.getBoundingClientRect().top + window.pageYOffset;

      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
    }
  }

  window.addEventListener('resize', resizeFunc);
}
