import dotenv from 'dotenv'

dotenv.config();

export const databaseConfig = {
  host: process.env.databaseHost,
  user: process.env.databaseUser,
  database: process.env.databaseName,
  password: process.env.databasePass,
  port: Number(process.env.databasePort),
};