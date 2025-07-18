import { eq } from 'drizzle-orm';
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

const userTasks = async (userId: string) => {
  try {
    return await db.query.tasks.findMany({
      where: eq(tasks.userId, Number(userId)),
    });
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при отриманні задачи користувача');
  }
};

export { addTasks, userTasks };
