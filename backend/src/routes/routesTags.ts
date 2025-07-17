import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { authenticate } from '../middlewares/authenticate';
import { addTag, userTags } from '../controllers/constrollersTags';

export async function routerTags(fastify: FastifyInstance) {
  fastify.post(
    '/tags',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const decoded = req.userIdToken;

        if (!decoded) {
          return reply.status(403).send({ error: 'User not authenticated' });
        }

        const tags = await userTags(decoded);

        reply.send(tags);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: '' });
      }
    }
  );
}

export async function routesAddTag(fastify: FastifyInstance) {
  fastify.post(
    '/addTag',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const decoded = req.userIdToken;

        if (!decoded) {
          return reply.status(403).send({ error: 'User not authenticated' });
        }
        const { tag } = req.body as { tag: string };
        if (!tag) {
          console.log(tag);
          return reply.status(400).send({ error: 'Tag is required' });
        }
        const newTag = await addTag(decoded, tag);
        if (!newTag) {
          return reply.status(500).send({ error: 'Failed to add tag' });
        }
        const result = await userTags(decoded);
        reply.send(result);
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to add tag' });
      }
    }
  );
}
