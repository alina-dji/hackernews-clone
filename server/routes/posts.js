const express = require('express');
const router = express.Router();

const postsControllers = require('../controllers/posts');

router.get('/', postsControllers.getPosts);
router.post('/', postsControllers.createPost);
router.delete('/:post_id', postsControllers.deletePost);

 
module.exports = router;