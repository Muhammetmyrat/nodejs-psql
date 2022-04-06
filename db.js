const { Pool } = require("pg")
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'node_psql',
  password: '1122',
  port: 5432
})

module.exports = pool
