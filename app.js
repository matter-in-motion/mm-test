'use strict';
const Loader = require('matter-in-motion').Loader;

module.exports = moreSettings => {
  const loader = new Loader();
  const app = loader.getWorker();
  const settings = app.units.require('core.settings');
  settings.core.logger.stream = undefined;
  settings.core.logger.options.prettyPrint = true;
  settings.core.logger.options.level = 'warn';
  settings.apply(moreSettings);
  app.start();
  return app;
};
