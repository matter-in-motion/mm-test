'use strict';
const test = require('ava');
const { createApp, getToken, verifyToken } = require('./index');

process.env.NODE_ENV = '';

test('gets the bare app', t => {
  const app = createApp();
  t.truthy(app);
  t.true(app.inited);
  const http = app.units.require('transports.http');
  t.truthy(http);
  t.true(app.root === http.root);
});

let app;
test('gets the app', t => {
  app = createApp({
    extensions: [ 'http' ],
    http: {
      port: 3001,
      host: '0.0.0.0'
    }
  }, {
    auth: 'user',
    default: false
  });

  t.truthy(app);
});

test('get auth token', t => getToken(app, { provider: 'user' })
  .then(token => {
    t.truthy(token.expires);
    t.truthy(token.token);
    return verifyToken(app, {
      token: token.token,
      provider: 'user'
    });
  })
);
