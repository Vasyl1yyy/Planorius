import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { addUsers, hashPassword } from '../controllers/constrollersUsers';

interface NewUser {
  email: string;
  username: string;
  passwordHash: string;
}

export async function routerUsersAdd(fastify: FastifyInstance) {
  fastify.post('/addUser', async (req: FastifyRequest, reply: FastifyReply) => {
    const newUser: NewUser = {
      email: '',
      username: '',
      passwordHash: '',
    };

    try {
      newUser.email = (req.body as any).email;
      newUser.username = (req.body as any).username;
      newUser.passwordHash = await hashPassword((req.body as any).password);

      const result = await addUsers(newUser);
      reply.send(result);
    } catch (err) {
      console.log(err);
      reply.status(500).send({ error: 'Failed to create user' });
    }
  });
}
