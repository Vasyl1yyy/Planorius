import { token } from '../../../../Frontend/src/api/apiUser';
import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  username: text('username').notNull().unique(),
  level: integer('level').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
