import Fastify from 'fastify';
import { routerUsersAdd } from './routes/routesUsers';
import fastifyCors from '@fastify/cors';

const fastify = Fastify();

fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  credentials: true,
});

fastify.register(routerUsersAdd);

fastify.listen({ port: 3000 }, () => {
  console.log('server 3000');
});
