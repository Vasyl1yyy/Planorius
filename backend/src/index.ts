import Fastify from 'fastify';
import { routerUsersAdd } from './routes/routerUsers';

const fastify = Fastify();

fastify.register(routerUsersAdd);

fastify.listen({ port: 3000 }, () => {
  console.log('server 3000');
});
