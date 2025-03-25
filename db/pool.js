const { Pool } = require("pg");

module.exports = new Pool({
  postgres: "postgres://user:password@ep-calm-field-a2crhzcu.eu-central-1.pg.koyeb.app:5432/dbname?sslmode=require"
});