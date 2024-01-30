import { Client, LocalAuth } from 'whatsapp-web.js'
import { generate } from 'qrcode-terminal'

export const whatsapp = new Client({
  authStrategy: new LocalAuth(),
})

whatsapp.on('qr', (qr) => generate(qr, { small: true }))
whatsapp.on('ready', () => console.log('WhatsApp is Running 🚀'))

whatsapp.on('message', async (msg) => {
  try {
    // TODO: Handling incoming messages. For more details see the documentation: https://docs.wwebjs.dev

    if (msg.from !== 'status@broadcast') {
      const messageReceived = {
        contact: msg.getContact(),
        body: msg.body,
      }

      console.log(messageReceived)
    }
  } catch (err) {
    console.log(err)
  }
})
