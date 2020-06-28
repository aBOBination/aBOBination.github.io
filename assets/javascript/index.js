import resizeFunc from './nav.js';
import { loadAbout } from './load.js';

window.addEventListener('resize', resizeFunc);

window.onload = loadAbout();
