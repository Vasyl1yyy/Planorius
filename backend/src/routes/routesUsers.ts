import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {
  addUsers,
  existingUser,
  hashPassword,
  loginUser,
} from '../controllers/constrollersUsers';
import bcrypt from 'bcrypt';

interface CreateUserRequest {
  email: string;
  username: string;
  password: string;
}

export async function routerUsersAdd(fastify: FastifyInstance) {
  fastify.post(
    '/addUser',
    async (
      req: FastifyRequest<{ Body: CreateUserRequest }>,
      reply: FastifyReply
    ) => {
      try {
        const { email, username, password } = req.body;
        const hashedPassword = await hashPassword(password);

        if (await existingUser(email, username)) {
          throw new Error('User already exists');
        }

        const result = await addUsers({
          email,
          username,
          passwordHash: hashedPassword,
        });
        reply.send(result);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to create user' });
      }
    }
  );
}

export async function routerUsersLogin(fastify: FastifyInstance) {
  fastify.post(
    '/login',
    async (
      req: FastifyRequest<{ Body: { username: string; password: string } }>,
      reply: FastifyReply
    ) => {
      try {
        const { username, password } = req.body;
        const user = await loginUser(username);

        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
          return reply
            .status(401)
            .send({ error: 'Invalid username or password' });
        }
        reply.send({ user });
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to login' });
      }
    }
  );
}
