'use strict';
const createApp = require('./app');
const { getToken, verifyToken } = require('./auth');

module.exports = {
  createApp,
  getToken, verifyToken
}
