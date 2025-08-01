import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {
  addUsers,
  existingUser,
  hashPassword,
  loginUser,
} from '../controllers/constrollersUsers';
import bcrypt from 'bcrypt';
import { UserSend } from '../middlewares/middlewaresUser';

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

        const testExistingUser = await existingUser(email, username);

        if (testExistingUser) {
          reply.send(testExistingUser);
          throw new Error('User already exists');
        }

        const result = await addUsers({
          email,
          username,
          passwordHash: hashedPassword,
        });
        const refreshToken = fastify.jwt.sign(
          { id: result[0].id },
          {
            expiresIn: '15d',
          }
        );
        const accessToken = fastify.jwt.sign(
          { id: result[0].id },
          {
            expiresIn: '10m',
          }
        );

        reply
          .setCookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 15 * 24 * 60 * 60, // 15 days
          })
          .setCookie('accessToken', accessToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 10 * 60, // 10 minutes
          })
          .send({
            user: UserSend(result[0]),
          });
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

        if (!user) {
          return reply.status(500).send(1);
        }
        if (!(await bcrypt.compare(password, user.passwordHash))) {
          return reply.status(500).send(2);
        }

        const accessToken = fastify.jwt.sign(
          { id: user.id },
          {
            expiresIn: '10m',
          }
        );
        const refreshToken = fastify.jwt.sign(
          { id: user.id },
          {
            expiresIn: '15d',
          }
        );

        reply
          .setCookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 15 * 24 * 60 * 60, // 15 days
          })
          .setCookie('accessToken', accessToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 10 * 60, // 10 minutes
          })
          .send({
            user: UserSend(user),
          });
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to login' });
      }
    }
  );
}
