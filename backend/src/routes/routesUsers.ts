import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {
  addUsers,
  existingUser,
  hashPassword,
} from '../controllers/constrollersUsers';

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
