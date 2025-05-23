import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import {
  addUsers,
  existingUser,
  hashPassword,
  loginUser,
  userId,
} from '../controllers/constrollersUsers';
import bcrypt from 'bcrypt';
import jwt from '@fastify/jwt';
import cookies from '@fastify/cookie';
import { get } from 'http';

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
            path: '/refreshToken',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 15 * 24 * 60 * 60, // 15 days
          })
          .setCookie('accessToken', accessToken, {
            httpOnly: true,
            path: '/token',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 10 * 60, // 10 minutes
          })
          .send({
            user: {
              id: result[0].id,
              username: result[0].username,
              email: result[0].email,
              level: result[0].level,
            },
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

        if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
          return reply
            .status(401)
            .send({ error: 'Invalid username or password' });
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
            path: '/refreshToken',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 15 * 24 * 60 * 60, // 15 days
          })
          .setCookie('accessToken', accessToken, {
            httpOnly: true,
            path: '/token',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 10 * 60, // 10 minutes
          })
          .send({
            user: {
              username: user.username,
              email: user.email,
              level: user.level,
              id: user.id,
            },
          });
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to login' });
      }
    }
  );
}
