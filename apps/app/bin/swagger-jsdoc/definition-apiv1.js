const pkg = require('../../package.json');

module.exports = {
  openapi: '3.0.1',
  info: {
    title: 'GROWI REST API v1',
    version: pkg.version,
  },
  servers: [
    {
      url: 'https://demo.growi.org/_api',
    },
  ],
  security: [
    {
      bearer: [],
      accessTokenInQuery: [],
    },
  ],
  components: {
    securitySchemes: {
      bearer: {
        type: 'http',
        scheme: 'bearer',
        description: 'Access token generated by each GROWI users',
      },
      accessTokenInQuery: {
        type: 'apiKey',
        name: 'access_token',
        in: 'query',
        description: 'Access token generated by each GROWI users',
      },
    },
  },
};
