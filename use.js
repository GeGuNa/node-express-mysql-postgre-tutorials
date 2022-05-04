const path = require('path')
const serveStatic = require('serve-static')

// Single path
fastify.use('/css', serveStatic(path.join(__dirname, '/assets')))

// Wildcard path
fastify.use('/css/(.*)', serveStatic(path.join(__dirname, '/assets')))

// Multiple paths
fastify.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))


// Single path
express.use('/css', serveStatic(path.join(__dirname, '/assets')))

// Wildcard path
express.use('/css/(.*)', serveStatic(path.join(__dirname, '/assets')))

// Multiple paths
express.use(['/css', '/js'], serveStatic(path.join(__dirname, '/assets')))
