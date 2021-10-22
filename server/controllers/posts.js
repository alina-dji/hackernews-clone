const Post = require('../models/post');

async function getPosts(req, res) {
    try {
        const posts = await Post.find();
        console.log(posts);
        res.status(200).json(posts);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }
}

async function createPost(req, res) {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
}

async function deletePost(req, res) {
    try {

    }
    catch (err) {

    }
}

module.exports = { getPosts, createPost, deletePost };