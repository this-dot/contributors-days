/* jshint node: true */

const storageHost = '//storage.googleapis.com';

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'contributors-days',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    googleFonts: [
      'Raleway:400,700',
      'PT+Mono'
    ],
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: [storageHost, /^localhost:\d+$/, /(www\.)?contributordays\.com$/]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.analytics = {
      integrations: [
        {
          name: 'GoogleAnalytics',
          config: {
            id: 'UA-87303561-4',
            remarketing: true,
            ecommerce: true,
            enhancedEcommerce: false
          }
        }
      ]
    };
    ENV.host = 'https://www.contributordays.com';
  }

  return ENV;
};
