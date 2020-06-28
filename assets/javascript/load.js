export function loadAbout() {
  const main = document.getElementById('Main');
  main.innerHTML = '';

  const row = document.createElement('div');
  row.classList.add('row');

  const divLeft = document.createElement('div');
  divLeft.classList.add('col-md-6');

  const divRight = document.createElement('div');
  divRight.classList.add('col-md-6');

  const name = document.createElement('h1'); // is a node
  name.innerHTML = 'Robert Marks';

  const about = document.createElement('p');
  about.innerHTML = 'Somethin about me?';

  const titleIconLeft = document.createElement('i');
  titleIconLeft.classList.add('fas', 'fa-chevron-left', 'fa-1x');
  titleIconLeft.innerText = '- Developer -';

  const titleIconRight = document.createElement('i');
  titleIconRight.classList.add('fas', 'fa-chevron-right', 'fa-1x');

  const titleSpan = document.createElement('span');
  titleSpan.classList.add('title-text', 'align-middle');

  const titleText = document.createElement('h4');
  titleText.innerText = '{ Developer }';

  const img = document.createElement('img');
  img.classList.add('me');
  img.setAttribute('src', 'assets/images/me320.png');

  titleSpan.appendChild(titleIconLeft);
  titleSpan.appendChild(titleIconRight);
  divLeft.appendChild(img);
  divLeft.appendChild(name);
  divLeft.appendChild(titleText);
  divRight.appendChild(about);
  row.appendChild(divLeft);
  row.appendChild(divRight);
  main.appendChild(row);

  return;
}

export function loadWork() {
  const main = document.getElementById('Main');
  main.innerHTML = '';

  const row = document.createElement('div');
  row.classList.add('row');

  const divLeft = document.createElement('div');
  divLeft.classList.add('col-md-12');

  const img = document.createElement('img');
  img.classList.add('me');
  img.setAttribute('src', 'assets/images/me320.png');

  row.appendChild(divLeft);
  divLeft.appendChild(img);
  main.appendChild(row);
}

export function loadContact() {
  const main = document.getElementById('Main');
  main.innerHTML = '';
  const z = document.createElement('h3'); // is a node
  z.innerHTML = 'Contact';

  return main.appendChild(z);
}
