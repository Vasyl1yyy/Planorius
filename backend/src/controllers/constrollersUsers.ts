import { db } from '../db/db';
import { users } from '../db/schema/users';
import bcrypt from 'bcrypt';
type NewUser = typeof users.$inferInsert;

const addUsers = async (user: NewUser) => {
  return db.insert(users).values(user);
};

const hashPassword = async (password: string) => {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};

export { addUsers, hashPassword };
