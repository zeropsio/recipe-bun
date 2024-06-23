export const dbConfig = {
  host: Bun.env['DB_HOST'],
  port: parseInt(Bun.env['DB_PORT'] || '5432'),
  username: Bun.env['DB_USER'],
  password: Bun.env['DB_PASS'],
  database: Bun.env['DB_NAME'],
};
