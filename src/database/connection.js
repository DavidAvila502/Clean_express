import { createPool } from "mysql2/promise";
import "dotenv/config";

const pool = createPool({
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER || "root",
   password: process.env.DB_PASSWORD || "",
   database: process.env.DATABASE,
});

export default pool;
