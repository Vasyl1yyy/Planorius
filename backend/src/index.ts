import Fastify from 'fastify';
import { routerUsersAdd, routerUsersLogin } from './routes/routesUsers';
import fastifyCors from '@fastify/cors';
import jwt from '@fastify/jwt';
import dotenv from 'dotenv';
import cookie from '@fastify/cookie';
import {
  routerUsersRefreshToken,
  routerUsersToken,
} from './routes/routesToken';
import { routerTags, routesAddTag } from './routes/routesTags';
import { routerTasks, routerTasksAdd } from './routes/routesTasks';

dotenv.config();

const fastify = Fastify();

// CORS
fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  credentials: true,
});

// Cookie
fastify.register(cookie, {
  secret: process.env.COOKIE_SECRET || 'cookie',
  parseOptions: {},
});

// JWT
fastify.register(jwt, {
  secret: process.env.JWT_SECRET || 'secret',
});

// Тип для request.userIdToken
declare module 'fastify' {
  interface FastifyRequest {
    userIdToken: string;
  }
}

// Ініціалізація змінної userIdToken
fastify.decorateRequest('userIdToken', '');

// Реєстрація роутів
fastify.register(routerUsersAdd);
fastify.register(routerUsersLogin);
fastify.register(routerUsersToken);
fastify.register(routerUsersRefreshToken);
fastify.register(routerTags);
fastify.register(routesAddTag);
fastify.register(routerTasksAdd);
fastify.register(routerTasks);

// Запуск сервера
fastify.listen({ port: 3000 }, () => {
  console.log('server 3000');
});
