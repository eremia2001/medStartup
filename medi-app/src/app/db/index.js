import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "medications",
  password: "eremia2001",
  port: 5432,
});

export function query(text, params) {
  return pool.query(text, params);
}
