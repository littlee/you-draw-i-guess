console.log('starting web socket server')
const WebSocket = require('ws')

const wss = new WebSocket.Server({
  server: '0.0.0.0',
  port: 8080
})

wss.on('connection', function connection(ws) {
  console.log(ws)
  ws.on('message', function incoming(data) {
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})