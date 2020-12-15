const app = require('./src/app')
const config = require('./src/config')
const debug = require('debug')('node-angular')
const http = require('http')

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges')
    process.exit(1)
    break
  case 'EADDRINUSE':
    console.error(bind + ' is already in use')
    process.exit(1)
    break
  default:
    throw error
  }
};

const onListening = () => {
  // const addr = server.address();
  const bind = typeof port === 'string' ? 'pipe ' + port : 'port ' + port
  console.log('Listening on', bind)
  debug('Listening on ' + bind)
};

const port = config.get('server.port') || 3003
app.set('port', port)
const server = http.createServer(app)
server.on('error', onError)
server.on('listening', onListening)
server.listen(port)
