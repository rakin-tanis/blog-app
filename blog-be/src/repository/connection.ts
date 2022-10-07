import { Pool } from "pg";
import { databaseConfig } from "../config/databaseConfig";

export const pool = new Pool(databaseConfig);