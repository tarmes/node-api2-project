const { Router } = require('express')
const express = require('express')

const router = express.Router()

const postsDB = require('../../data/db')

// POSTS ENDPOINTS

// [GET]

router.get('/', async (req, res) => {
   const { query } = req
   try {
      const posts = await postsDB.find(query)
      res.json(posts)
   } catch (error) {
      res.json(error.message)
   }
})

// [POST]

// [DELETE]

// [PUT]

module.exports = router