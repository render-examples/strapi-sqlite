const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
