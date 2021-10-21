const express = require('express');
const axios  = require('axios');
const mongoose = require('mongoose');
require('dotenv').config();

const Post = require('./models/post');
const postsRoutes = require('./routes/posts');

const app = express();

const PORT = 5000;

mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {
    console.log('server running');
    insertData();
}))
.catch((err) => console.log(err));

async function insertData() {
    try {
        const res = await axios.get("https://raw.githubusercontent.com/gomycode-engineering/technical-tests-fake-data/master/LordOfTheRingsCharacters.json");
        for (let i=0; i<res.data.docs.length; i++) {
            const newPost = new Post(res.data.docs[i]);
            Post.countDocuments({_id: newPost._id}, async (err, count) => {
                if (count<1) {
                    await newPost.save();
                }
            })
        }
    }
    catch (err) {
        console.log(err);
    }
}

app.use(postsRoutes);