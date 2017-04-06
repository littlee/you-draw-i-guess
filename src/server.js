console.log('starting web socket server')
const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 8080
})

wss.on('error', function(e) {
  console.log('error', e)
})

wss.on('connection', function connection(ws) {
  console.log('open')
  ws.on('message', function incoming(data) {
    console.log('R:', data)
    wss.clients.forEach(function each(client) {
      // if (client !== ws && client.readyState === WebSocket.OPEN) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data)
      }
    })
  })
})