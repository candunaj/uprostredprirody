import EmberRouter from '@ember/routing/router';
import config from 'uprostred-prirody/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/index.html' });
  this.route('home', { path: '/' });
  this.route('sadenie');
  this.route('home');
});
