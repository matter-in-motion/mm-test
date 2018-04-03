'use strict';
// const httpErrors = require('http').STATUS_CODES;
const errors = require('mm-errors/errors');

module.exports = {
  __expose: true,

  echo: function() {
    return {
      title: 'Test',
      description: 'returns the request data',
      request: {},
      response: {},
      call: (auth, data) => data
    }
  },

  error: function() {
    return {
      title: 'Test',
      description: 'returns a desired error',
      request: {
        type: 'object',
        additionalProperties: false,
        properties: {
          mm: {
            enum: Object.keys(errors)
          }
        }
      },

      response: {
        type: 'null'
      },

      call: (auth, data) => {
        if (data.mm) {
          throw errors[data.mm]();
        }
      }
    }
  }
};
