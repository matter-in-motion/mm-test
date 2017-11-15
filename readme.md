# Matter In Motion. Test Helpes

[![NPM Version](https://img.shields.io/npm/v/mm-test.svg?style=flat-square)](https://www.npmjs.com/package/mm-test)
[![NPM Downloads](https://img.shields.io/npm/dt/mm-test.svg?style=flat-square)](https://www.npmjs.com/package/mm-test)

**This is not an extension.**

Collection of functions to help you test your extensions and applications

## Instalation

`npm i mm-test --save-dev`

## Usage

### createApp(settings)

Returns an app instance with applied `settings`. The returned app will output `warn` and up level formatted logs to stdout.

Example:

```js
'use strict';
const test = require('ava');
const extension = require('./index');
const createApp = require('mm-test').createApp;

process.env.NODE_ENV = 'production'; // or any other additional settings environment you want to load
const app = createApp({
  extensions: [
    'http',
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
