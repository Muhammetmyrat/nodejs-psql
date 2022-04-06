const { Pool } = require("pg")
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: 1234,
  port: 5432
})

module.exports = pool
