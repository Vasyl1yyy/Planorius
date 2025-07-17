import { FastifyRequest, FastifyReply } from 'fastify';

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.accessToken;

  if (!token) {
    console.log('No token in cookies');
    return reply.status(401).send({ error: 'Token not provided' });
  }

  try {
    const decoded = req.server.jwt.verify(token) as { id: string };
    req.userIdToken = decoded.id;
  } catch (err) {
    console.error('Token verification failed', err);
    return reply.status(401).send({ error: 'Invalid token' });
  }
}
