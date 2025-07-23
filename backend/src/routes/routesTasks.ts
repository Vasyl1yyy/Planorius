import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { authenticate } from '../middlewares/authenticate';
import {
  addTasks,
  userTasks,
  doneTasks,
} from '../controllers/constrollersTasks';

interface CreateTasksRequest {
  userId: string;
  title: string;
  difficulty: number;
  proirity: number;
  tag: number;
  date: string;
}

export async function routerTasksAdd(fastify: FastifyInstance) {
  fastify.post(
    '/addTasks',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const { title, difficulty, proirity, tag, date } =
          req.body as CreateTasksRequest;
        const userId = req.userIdToken;

        if (!userId) {
          return reply.status(403).send({ error: 'User ID not provided' });
        }

        const result = await addTasks({
          userId: Number(userId),
          title,
          difficulty,
          proirity,
          tag,
          date,
        });

        reply.send(result);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to create Task' });
      }
    }
  );
}

export async function routerTasks(fastify: FastifyInstance) {
  fastify.post(
    '/tasks',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const decoded = req.userIdToken;

        if (!decoded) {
          return reply.status(403).send({ error: 'User not authenticated' });
        }

        const tasks = await userTasks(decoded);

        reply.send(tasks);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: '' });
      }
    }
  );
}

export async function routerDoneTasks(fastify: FastifyInstance) {
  fastify.post(
    '/doneTasks',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const { id, doneNum } = req.body as { id: number; doneNum: number };
        const userId = req.userIdToken;

        if (!userId) {
          return reply.status(403).send({ error: 'User ID not provided' });
        }

        if (!id) {
          return reply.status(400).send({ error: 'Task ID not provided' });
        }

        const result = await doneTasks(
          Number(id),
          Number(doneNum),
          Number(userId)
        );
        reply.send(result);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to mark task as done' });
      }
    }
  );
}
