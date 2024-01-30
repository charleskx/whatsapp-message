import fastify from 'fastify'

import { healthRoutes } from './http/routes/health.routes'
import { messageRoutes } from './http/routes/message.routes'

import { whatsapp } from './shared/utility/whatsapp'

export const app = fastify()

app.register(healthRoutes, { prefix: 'health' })
app.register(messageRoutes, { prefix: 'message' })

whatsapp.initialize()
