import ProductScreen from './srceens/ProductScreen.js';
import HomeScreen from './srceens/HomeScreen.js';
import { parseRequestUrl } from './utils.js';
import Error404Screen from './srceens/Error404Screen.js';
const routes = {
  '/': HomeScreen,
  'product/:id': ProductScreen,
};
const router = () => {
  const request = parseRequestUrl();
  const parseUrl = 
  (request.resourse ? `/${request.resourse}` : '/' ) + 
  (request.id ? '/:id' : '') + 
  (request.verb ? `/${request.verb}` : ''); 
  const srceen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const main = document.getElementById('main-container');
  main.innerHTML = srceen.render();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router)