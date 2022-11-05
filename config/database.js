const path = require('path');
const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            username: config.user,
            password: config.password,
            ssl: {
            rejectUnauthorized: false, // For self-signed certificates
          },
        },
          debug: false,
          },
        });

  return {
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
};
