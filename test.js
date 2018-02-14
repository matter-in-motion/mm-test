'use strict';
const test = require('ava');
const { createApp, getToken, verifyToken } = require('./index');

test('gets the bare app', t => {
  const app = createApp();
  t.truthy(app);
});

let app;
test('gets the app', t => {
  app = createApp({
    extensions: [ 'http' ],
    http: {
      port: 3001,
      host: '0.0.0.0'
    }
  });

  t.truthy(app);
});

test('get auth token', t => getToken(app)
  .then(token => {
    t.truthy(token.expires);
    t.truthy(token.token);
    return verifyToken(app, { token: token.token });
  })
);
