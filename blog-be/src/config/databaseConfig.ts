import dotenv from 'dotenv'

dotenv.config();

export const databaseConfig = {
  host: process.env.DB_HOST ?? "localhost",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
};

export const serverConfig = {
  host: process.env.HOST,
};