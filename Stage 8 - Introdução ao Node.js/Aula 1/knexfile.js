const path = require('path');

module.exports = { 
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'src', 'database', 'db.db')
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
  },
  useNullAsDefault: true
} 

