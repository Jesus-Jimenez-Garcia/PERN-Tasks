import { config } from "dotenv";

config();

const db = {
  port: process.env.PORT,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  portdb: process.env.PORTDB,
  database: process.env.DATABASE,
};

export default db;
