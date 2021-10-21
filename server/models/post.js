const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    _id: mongoose.ObjectId,
    height: String,
    race: String,
    gender: String,
    birth: String,
    spouse: String,
    death: String,
    realm: String,
    hair: String,
    name: String,
    wikiUrl: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;