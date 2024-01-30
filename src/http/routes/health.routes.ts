import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'

export async function healthRoutes(app: FastifyInstance) {
  app.get('/', async (_: FastifyRequest, reply: FastifyReply) => {
    reply.send('Server is running!')
  })
}
