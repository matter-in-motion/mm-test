'use strict';
const Loader = require('matter-in-motion').Loader;
const http = require('mm-http');
const json = require('mm-serializer-json');
const test = require('./resources');

const addDefaultAuth = function(settings, provider) {
  settings.auth = {
    default: provider,
    [provider]: {
      active: true,
      token: {
        key: 'test',
        algorithm: 'HS256',
        expiresIn: '1 minute',
        subject: provider,
        audience: 'auth',
        issuer: 'test'
      }
    }
  }

  return settings;
}

module.exports = (extraSettings, opts = {}) => {
  const loader = new Loader();
  const app = loader.getWorker();
  const settings = app.units.require('core.settings');
  settings.core.debug = true;
  settings.core.logger.stream = undefined;
  settings.core.logger.options.prettyPrint = { levelFirst: true };
  settings.core.logger.options.level = 'warn';
  settings.apply(extraSettings);

  if (opts.auth) {
    addDefaultAuth(settings, opts.auth);
  }

  const useDefault = opts.default === undefined ? true : opts.default;
  if (useDefault) {
    settings.serializers.default = 'json';
    settings.extensions.unshift(http, json);
  }

  if (opts.test) {
    settings.extensions.push(test);
  }

  app.start();
  return app;
};
