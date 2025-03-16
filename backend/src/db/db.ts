// filepath: c:\проект\Planorius\backend\src\db\db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';
import { users } from './schema/users';

dotenv.config();

const db = drizzle(process.env.DATABASE_URL, {
  schema: {
    users,
  },
});

export { db };
