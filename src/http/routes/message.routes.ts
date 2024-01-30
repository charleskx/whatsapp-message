import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { whatsapp } from '../../shared/utility/whatsapp'

export async function messageRoutes(app: FastifyInstance) {
  app.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const schema = z.object({
      phoneNumber: z.string(),
      message: z.string(),
    })

    const { message, phoneNumber } = schema.parse(request.body)

    await whatsapp.sendMessage(phoneNumber, message)

    reply.status(201).send()
  })
}
