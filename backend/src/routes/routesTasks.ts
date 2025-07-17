import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { authenticate } from '../middlewares/authenticate';
import { addTasks } from '../controllers/constrollersTasks';

interface CreateTasksRequest {
  userId: string;
  title: string;
  difficulty: number;
  proirity: number;
  tag: string;
  date: number;
  time: number;
}

export async function routerTasksAdd(fastify: FastifyInstance) {
  fastify.post(
    '/addTasks',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const { title, difficulty, proirity, tag, date, time } =
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
          time,
        });

        reply.send(result);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to create Task' });
      }
    }
  );
}
