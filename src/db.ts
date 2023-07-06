import { Pool } from "pg";

const pool = new Pool({
  password: "1234",
  port: 5432,
  host: "localhost",
  user: "postgres",
  database: "EducationPlatform",
});

export { pool };
