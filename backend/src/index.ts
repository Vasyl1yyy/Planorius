import Fastify from 'fastify';
import { drizzle } from 'drizzle-orm/node-postgres';
import 'dotenv/config';
import fastifyCors from '@fastify/cors';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {}

main();

const fastify = Fastify();

fastify.register(fastifyCors, {
  origin: 'http://localhost:5173',
  credentials: true,
});

fastify.get('/api/test', async () => {
  return { message: 'Бекенд працює!' };
});

fastify.listen({ port: 3000 }, () => {
  console.log('server 3000');
});
