import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { userId } from '../controllers/constrollersUsers';
import { UserSend } from '../middlewares/middlewaresUser';
import { authenticate } from '../middlewares/authenticate';

export async function routerUsersToken(fastify: FastifyInstance) {
  fastify.post(
    '/token',
    { preHandler: authenticate },
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const decoded = req.userIdToken;

        const user = await userId(decoded);
        if (!user) {
          return reply.status(403).send({ error: 'Invalid token' });
        }
        reply.send({
          user: UserSend(user),
        });
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to verify token' });
      }
    }
  );
}

export async function routerUsersRefreshToken(fastify: FastifyInstance) {
  fastify.post(
    '/refreshToken',
    async (req: FastifyRequest, reply: FastifyReply) => {
      try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
          return reply
            .status(401)
            .send({ error: 'Refresh token not provided' });
        }
        interface JwtPayload {
          id: string;
        }
        const decoded = fastify.jwt.verify(refreshToken) as JwtPayload;

        const newAccessToken = fastify.jwt.sign(
          { id: decoded.id },
          {
            expiresIn: '10m',
          }
        );
        const newRefreshToken = fastify.jwt.sign(
          { id: decoded.id },
          {
            expiresIn: '15d',
          }
        );
        reply
          .setCookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 15 * 24 * 60 * 60, // 15 days
          })
          .setCookie('accessToken', newAccessToken, {
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: false, // Set to true in production
            maxAge: 10 * 60, // 10 minutes
          })
          .send({ ok: true });
      } catch (err) {
        console.log(err);
        reply.status(500).send({ error: 'Failed to refresh token' });
      }
    }
  );
}
