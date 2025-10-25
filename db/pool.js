import { Pool } from "pg";
import dotenv from 'dotenv';
dotenv.config();

export const pool = new Pool({
    connectionString:  process.argv[2] || process.env.DATABASE_URL,
    password: process.env.DB_PASSWORD,
});
