'use strict';
const test = require('ava');
const { createApp, createClient, getToken, verifyToken } = require('./index');

process.env.NODE_ENV = '';

test.serial('gets the default app', t => {
  const app = createApp();
  t.truthy(app);
  t.true(app.inited);
  const http = app.units.require('transports.http');
  t.truthy(http);
  t.true(app.root === http.root);
});

let app;
test.serial('gets the app', t => {
  app = createApp({
    extensions: [ 'http' ],
    http: {
      port: 3001,
      host: '0.0.0.0'
    }
  }, {
    auth: 'test',
    test: true,
    default: false
  });

  t.truthy(app);
  t.truthy(app.root);
});

test.serial('get auth token', t => getToken(app, { provider: 'test' })
  .then(token => {
    t.truthy(token.expires);
    t.truthy(token.token);
    return verifyToken(app, {
      token: token.token,
      provider: 'test'
    });
  })
);

const mm = createClient({ host: 'localhost:3001' })

test.serial('test the discovery', t => mm('?')
  .then(res => {
    t.is(res[0], 'test');
  })
)

test.serial('test the echo', t => mm('test.echo', { hello: 'World' })
  .then(res => t.is(res.hello, 'World'))
)
