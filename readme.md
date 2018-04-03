# Matter In Motion. Test Helpes

[![NPM Version](https://img.shields.io/npm/v/mm-test.svg?style=flat-square)](https://www.npmjs.com/package/mm-test)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-test.svg?style=flat-square)](https://www.npmjs.com/package/mm-test)

**This is not an extension.**

Collection of functions to help you test your extensions and applications

## Instalation

`npm i mm-test --save-dev`

## Usage

### createClient(opts)

Creates Matter In Motion client. Check the [official documentation](https://github.com/matter-in-motion/mm-client-nodejs)

### createApp(settings, opts)

Returns an app instance with applied `settings`. The returned app will output `warn` and up level formatted logs to stdout.

Optios are:

* default — boolean, defaut true. Adds http transport and JSON serializer to test app.
* test — boolean, adds test resource with useful calls.
* auth — string, if present adds auth provider with the same name.

### getToken(app, opts)

Returns a Promise that will be resolved with object `{expires, token}`.

* **app** — matter in motion app instance
* opts
  + **provider** — string, auth provider to use.

### verifyToken(app, opts)

Returns a Promise that will get resolved when the token is valid.

* **app** — matter in motion app instance
* **opts**
  + **token** — string, an auth token.
  + **provider** — string, auth provider to use.
  + subject — string, token subject it will be verified by.
  + audience — string, token audience it will be verified by.


Example:

```js
'use strict';
const test = require('ava');
const extension = require('./index');
const createApp = require('mm-test').createApp;

process.env.NODE_ENV = 'production'; // or any other additional settings environment you want to load
const app = createApp({
  extensions: [
    extension
  ],

  extension: {
    ...
  }
});

test('checks the extension' t => {
  const ext = app.units.require('resources.extension');
  t.truthy(ext);
});
```

License: MIT.
