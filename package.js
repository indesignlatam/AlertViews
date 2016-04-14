Package.describe({
  name: 'indesign:alertviews',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'AlertViews: iOS like AlertViews',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/wanchopeblanco/AlertViews',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');
    api.use('ecmascript');
    api.addFiles('alertviews.js', 'client');
    api.addFiles('alertviews.css', 'client');
    api.export('Alerts', 'client');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('indesign:alertviews');
    api.addFiles('alertviews.js');
    api.export('Alerts');
});
