#! /usr/bin/env node
require('dotenv').config({ path: "/Users/fredpy/repos/message-board/.env" });
const { Client } = require("pg");

console.log(process.env.DATABASE_PASSWORD)

const SQLtable = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgres://koyeb-adm:npg_wiVHYb73SeFM@ep-calm-field-a2crhzcu.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require",
  });
  await client.connect();
  await client.query(SQLtable);
  await client.end();
  console.log("done");
}

main();