'use strict';
const client = require('mm-client');

module.exports = (settings = {}) => client(Object.assign({
  host: 'localhost:3000'
}, settings));
