#! /usr/bin/env node

const { Client } = require("pg");

const date = new Date();

const SQL = `CREATE TABLE IF NOT EXISTS messageboard 
( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
 message VARCHAR(255),
 username VARCHAR(255),
 added VARCHAR(255)
 );
 
 INSERT INTO messageboard (id,message,username,added)
 VALUES
 (1,'Hello World', 'Tony Huang', '1/11/11'),
  (2,'Second Message Ever', 'Tony Huang', '${date}'),
   (3,'Different user', 'John Bowne', '${date}');`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://messageboard_owner:yopAM4hqBD6X@ep-misty-sky-a57qgg4m.us-east-2.aws.neon.tech/messageboard?sslmode=require",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
