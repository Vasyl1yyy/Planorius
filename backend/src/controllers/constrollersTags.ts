import { eq } from 'drizzle-orm';
import { db } from '../db/db';
import { tags } from '../db/schema/tags';

export const userTags = async (userId: string) => {
  try {
    return await db.query.tags.findMany({
      where: eq(tags.userId, Number(userId)),
    });
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при отриманні тегів користувача');
  }
};

export const addTag = async (userId: string, title: string) => {
  try {
    const newTag = await db
      .insert(tags)
      .values({
        userId: Number(userId),
        title,
      })
      .returning();

    return newTag;
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Failed to add tag');
  }
};
