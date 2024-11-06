const { Pool } = require("pg");

module.exports = new Pool({
  connectionString:
    "postgresql://messageboard_owner:yopAM4hqBD6X@ep-misty-sky-a57qgg4m.us-east-2.aws.neon.tech/messageboard?sslmode=require",
});
