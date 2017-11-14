'use strict';
const test = require('ava');
const createApp = require('./index').createApp;

test('fails to get the bare app', t => {
  try {
    createApp();
    t.fail();
  } catch (e) {
    t.is(e.message, 'Unit is required: transports');
  }
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
