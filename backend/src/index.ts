import Fastify from 'fastify';
import { routerUsersAdd, routerUsersLogin } from './routes/routesUsers';
import fastifyCors from '@fastify/cors';
import jwt from '@fastify/jwt';
import dotenv from 'dotenv';
import cookie, { FastifyCookieOptions } from '@fastify/cookie';
import {
  routerUsersRefreshToken,
  routerUsersToken,
} from './routes/routesToken';

dotenv.config();

const fastify = Fastify();

fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  credentials: true,
});

fastify.register(jwt, {
  secret: process.env.JWT_SECRET || 'secret',
});

fastify.register(cookie, {
  secret: process.env.COOKIE_SECRET || 'cookie',
  parseOptions: {},
} as FastifyCookieOptions);

fastify.register(routerUsersAdd);
fastify.register(routerUsersLogin);
fastify.register(routerUsersToken);
fastify.register(routerUsersRefreshToken);

fastify.listen({ port: 3000 }, () => {
  console.log('server 3000');
});
