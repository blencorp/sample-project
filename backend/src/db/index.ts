import { Pool } from 'pg';

interface DBConfig {
    user: string | undefined;
    host: string | undefined;
    database: string | undefined;
    password: string | undefined;
    port: number | undefined;

}

const dbConfig: DBConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 5432, 
};

const pool = new Pool(dbConfig);

pool.on('error', (err: Error) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool;