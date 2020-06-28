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
  const msg =
    'Hi, I am a Full Stack Engineer with expertise in the MERN stack.<br><br>Please contact me if you would like to work together.';
  about.innerHTML = msg;

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
  const projects = [
    {
      name: 'Food Truck Frenzie',
      img: './assets/images/food_truck_logo_blue.png',
      github: 'https://github.com/aBOBination/bobbie-draper',
      link: 'https://food-truck-frenzy.herokuapp.com/'
    },
    {
      name: 'Recette Roulette',
      img: './assets/images/recette.png',
      github: 'https://github.com/MelanieBott2691/rocinante',
      link: 'https://melaniebott2691.github.io/rocinante/'
    },
    {
      name: 'Burger App',
      img: './assets/images/burgers.png',
      github: 'https://github.com/aBOBination/burger',
      link: 'https://bobs-burgers-bootcamp.herokuapp.com/'
    }
  ];

  const main = document.getElementById('Main');
  main.innerHTML = '';

  const cont = document.createElement('div');
  cont.classList.add('project-container', 'd-flex', 'flex-wrap');

  projects.forEach((project) => {
    const proj = document.createElement('project');
    proj.classList.add('project-header');

    const image = document.createElement('img');
    image.classList.add('project-img');
    image.setAttribute('src', project.img);

    const section = document.createElement('section');
    section.classList.add('project-text');

    const h = document.createElement('h1');
    h.innerText = project.name;

    const a1 = document.createElement('a');
    a1.setAttribute('href', project.github);

    const a2 = document.createElement('a');
    a2.setAttribute('href', project.link);

    section.appendChild(h);
    section.appendChild(a1);
    section.appendChild(a2);

    proj.appendChild(image);
    proj.appendChild(section);

    cont.appendChild(proj);
  });
  main.appendChild(cont);
}

export function loadContact() {
  const main = document.getElementById('Main');
  main.innerHTML = '';
  const z = document.createElement('h3'); // is a node
  z.innerHTML = 'Contact';

  return main.appendChild(z);
}
