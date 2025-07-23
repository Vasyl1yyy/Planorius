import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { tasks } from '../db/schema/tasks';

type NewTask = typeof tasks.$inferInsert;

const addTasks = async (task: NewTask) => {
  try {
    await db.insert(tasks).values(task).returning();
    return await db.query.tasks.findMany({
      where: eq(tasks.userId, Number(task.userId)),
    });
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

const doneTasks = async (taskId: number, doneNum: number, userId: number) => {
  try {
    await db.update(tasks).set({ done: doneNum }).where(eq(tasks.id, taskId));
    return await db.query.tasks.findMany({
      where: eq(tasks.userId, userId),
    });
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при позначенні задачі як виконаної');
  }
};

export { addTasks, userTasks, doneTasks };
