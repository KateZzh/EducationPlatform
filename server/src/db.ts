import { Pool } from 'pg';

const pool = new Pool({
  password: '1234',
  port: 5433,
  host: 'localhost',
  user: 'postgres',
  database: 'EducationPlatform',
});

export { pool };
