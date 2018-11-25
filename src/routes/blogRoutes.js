const express = require('express')
const blogController = require('../controllers/blogControllers')
const router = express.Router()


router.get('/', blogController.readAllPosts)
router.get('/:postId', blogController.readOnePost)
router.post('/', blogController.createPost)
router.put('/:postId', blogController.modifyPost)
router.delete('/:postId', blogController.removePost)

module.exports = router
