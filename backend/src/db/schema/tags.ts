import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const tags = pgTable('tags', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  title: text('title').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
