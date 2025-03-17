import { eq, or } from 'drizzle-orm';
import { db } from '../db/db';
import { users } from '../db/schema/users';
import bcrypt from 'bcrypt';

type NewUser = typeof users.$inferInsert;

const addUsers = async (user: NewUser) => {
  try {
    return await db.insert(users).values(user).returning();
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при створенні користувача');
  }
};

const hashPassword = async (password: string) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};

const existingUser = async (email: string, username: string) => {
  const existingUser = await db.query.users.findFirst({
    where: or(eq(users.email, email), eq(users.username, username)),
  });
  return existingUser;
};

export { addUsers, hashPassword, existingUser };
