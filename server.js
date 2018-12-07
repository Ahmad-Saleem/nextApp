const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    console.log(' ###### SSR ###### ')
    server.get('/about/:x', (req, res) => {
      return app.render(req, res, '/about', {x: req.params.x})
    })

    server.get('/user/:op', (req, res) => {
        return app.render(req, res, '/user', {op: req.params.op})
    })

    server.get('/b', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })