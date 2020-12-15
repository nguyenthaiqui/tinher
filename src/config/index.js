const convict = require('convict')

const config = convict({
  server: {
    port: 3003
  },
  saltRounds: 10,
  jwt: {
    secret: 'Willne123'
  }
})

module.exports = config