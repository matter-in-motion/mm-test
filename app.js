'use strict';
const Loader = require('matter-in-motion').Loader;

module.exports = moreSettings => {
  const loader = new Loader();
  const app = loader.getWorker();
  const settings = app.units.require('core.settings');
  settings.core.logger.stream = undefined;
  settings.core.logger.options.prettyPrint = true;
  settings.core.logger.options.level = 'warn';

  settings.auth = {
    user: {
      active: true,
      token: {
        key: 'test',
        algorithm: 'HS256',
        expiresIn: '10 minutes',
        subject: 'user',
        audience: 'auth',
        issuer: 'test'
      }
    }
  };

  settings.apply(moreSettings);
  app.start();
  return app;
};
