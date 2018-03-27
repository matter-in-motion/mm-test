'use strict';

module.exports = {
  getToken: function(app, opts) {
    const auth = app.units.require('core.auth').provider(opts.provider);
    return auth.sign({ id: 'testId' });
  },

  verifyToken: function(app, opts) {
    const auth = app.units.require('core.auth').provider(opts.provider);
    return auth.verify(opts.token, opts);
  }
};
