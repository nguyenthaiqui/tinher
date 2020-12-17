const convict = require('convict')

const config = convict({

  env: {
    doc: 'Application environment',
    env: 'NODE_ENV',
    format: ['production', 'development', 'staging'],
    // Defaulting to production might prevent the leaking of debug information when
    // it's not set properly.
    default: 'production'
  },

  server: {
    port: 3003
  },
  saltRounds: 10,
  jwt: {
    secret: 'Willne123'
  },

  cloudinary: {
    cloud_name: 'willnguyen',
    api_key: '245577489324558',
    api_secret: 'mnFdyV_JAoY8b-xFmjuVcHz2NWw'
  },
})

const env = config.get('env')

config.loadFile(require('path').resolve(`src/config/${env}.json`))

module.exports = config