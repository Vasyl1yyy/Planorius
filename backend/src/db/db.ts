// filepath: c:\проект\Planorius\backend\src\db\db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import dotenv from 'dotenv';
import { users } from './schema/users';
import { tasks } from './schema/tasks';

dotenv.config();

const db = drizzle(process.env.DATABASE_URL, {
  schema: {
    users,
    tasks,
  },
});

export { db };
