// filepath: c:\проект\Planorius\backend\src\db\db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';

dotenv.config();

const db = drizzle(process.env.DATABASE_URL);

export { db };
