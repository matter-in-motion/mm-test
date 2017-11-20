'use strict';
const test = require('ava');
const createApp = require('./index').createApp;

test('gets the bare app', t => {
  const app = createApp();
  t.truthy(app);
});

test('gets the app', t => {
  const app = createApp({
    extensions: [ 'http' ],
    http: {
      port: 3000,
      host: '0.0.0.0'
    }
  });

  t.truthy(app);
});
