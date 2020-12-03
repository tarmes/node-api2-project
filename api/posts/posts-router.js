const express = require('express')
const postsDB = require('../../data/db')

const router = express.Router()


// POSTS ENDPOINTS

// [GET] all posts

router.get('/', async (req, res) => {
   const { query } = req
   try {
      const posts = await postsDB.find(query)
      res.json(posts)
   } catch (error) {
      res.status(500).json({ error: "The posts information could not be retrieved."})
   }
})

// [GET] post by :id

router.get('/:id', async (req, res) => {
   const { id } = req.params
   try {
      const post = await postsDB.findById(id)
      if (!post) {
         res.status(404).json({ message: "The post with the specified ID does not exist." })
      } else {
         res.status(200).json(post)
      }
   } catch (error) {
      res.status(500).json({ error: "The post information could not be retrieved." })
   }
})

// [POST] create a post

router.post('/', (req,res) => {
   if (!req.body.title || !req.body.contents) {
      res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
   }
   postsDB.insert(req.body)
      .then(post => {
         res.status(201).json(post)
      })
      .catch(error => {
         res.status(500).json({ error: "There was an error while saving the post to the database" })
      })
})

// [POST] create a comment for a particular post



// [DELETE]

// [PUT]

module.exports = router