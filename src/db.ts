import { Client } from 'pg';
import { dbConfig } from './config';

export const connectDB = async () => {
  const client = new Client({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
  });

  await client.connect();

  const tableExists = await client.query(`SELECT EXISTS (
    SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename  = 'entries'
  );`);

  if (!tableExists.rows[0]?.exists) {
    await client.query(`CREATE TABLE entries (
      id SERIAL PRIMARY KEY,
      data TEXT NOT NULL
    );`);
  }

  return client;
};
