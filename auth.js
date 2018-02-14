'use strict';

module.exports = {
  getToken: function(app, opts = {}) {
    const auth = app.units.require('core.auth').provider(opts.provider || 'user');
    return auth.sign({ id: 'testId' });
  },

  verifyToken: function(app, opts = {}) {
    const auth = app.units.require('core.auth').provider(opts.provider || 'user');
    return auth.verify(opts.token, opts);
  }
};
