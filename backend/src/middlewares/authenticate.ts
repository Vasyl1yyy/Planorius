import { FastifyRequest, FastifyReply } from 'fastify';

export async function authenticate(req: FastifyRequest, reply: FastifyReply) {
  const token = req.cookies.accessToken;
  if (!token) {
    return reply.status(401).send({ error: 'Token not provided' });
  }

  interface JwtPayload {
    id: string;
  }

  const decoded = req.server.jwt.verify(token) as JwtPayload;
  req.userIdToken = decoded.id;
}
