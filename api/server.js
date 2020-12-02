const express = require('express')
const cors = require('cors')
const server = express()

const postsRouter = require('./posts/posts-router')

server.use(cors())
server.use(express.json())
server.use('/api/posts', postsRouter)

server.get('/', (req, res) => {
   res.send(`
   <h2>Trevor Armes API</h2>
   <p>Welcome everybody!</p>
   `)
})

module.exports = server