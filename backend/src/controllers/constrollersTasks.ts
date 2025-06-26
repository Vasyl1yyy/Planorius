import { db } from '../db/db';
import { tasks } from '../db/schema/tasks';

type NewTask = typeof tasks.$inferInsert;

const addTasks = async (task: NewTask) => {
  try {
    return await db.insert(tasks).values(task).returning();
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при створенні задачі');
  }
};

export { addTasks };
