import Ember from 'ember';
import config from './config/environment';
import Trackable from 'ember-cli-analytics/mixins/trackable';

const Router = Ember.Router.extend(Trackable, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('old-redirect', { path: 'contributor-day/:framework'});
  this.route('contributor-day', { path: ':framework' });
});

export default Router;
