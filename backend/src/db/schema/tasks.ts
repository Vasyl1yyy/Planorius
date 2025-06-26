import { pgTable, serial, text, integer, timestamp } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull(),
  done: integer('done').notNull().default(0),
  title: text('title').notNull(),
  difficulty: integer('difficulty').notNull().default(0),
  proirity: integer('priority').notNull().default(0),
  tag: text('tag').notNull().default(''),
  date: integer('date').notNull().default(0),
  time: integer('time').notNull().default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
