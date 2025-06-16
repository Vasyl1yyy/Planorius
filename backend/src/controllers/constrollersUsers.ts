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

const loginUser = async (username: string) => {
  try {
    return await db.query.users.findFirst({
      where: eq(users.username, username),
    });
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при вході користувача');
  }
};

const userId = async (id: string) => {
  try {
    return await db.query.users.findFirst({
      where: eq(users.id, Number(id)),
    });
  } catch (error) {
    console.error('DB Error:', error);
    throw new Error('Помилка при отриманні користувача');
  }
};

const hashPassword = async (password: string) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};

const existingUser = async (email: string, username: string) => {
  const existingUsername = await db.query.users.findFirst({
    where: eq(users.username, username),
  });
  const existingEmail = await db.query.users.findFirst({
    where: eq(users.email, email),
  });
  if (existingUsername) {
    return 1;
  }
  if (existingEmail) {
    return 2;
  }
};

export { addUsers, hashPassword, existingUser, loginUser, userId };
