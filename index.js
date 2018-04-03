'use strict';
const createApp = require('./app');
const createClient = require('./client');
const { getToken, verifyToken } = require('./auth');

module.exports = {
  createApp,
  createClient,
  getToken,
  verifyToken
}
