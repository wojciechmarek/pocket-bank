import PocketBase from 'pocketbase'
import { Server } from 'socket.io'

export const pb = new PocketBase('http://127.0.0.1:8090')

const io = new Server(server)
io.on('connection', (socket) => {
  console.log('a user connected')
})
