const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
    title: String,
    createAt: Date,
    forumId: mongoose.ObjectId,
    content: String,
    userId: mongoose.ObjectId
});


const Thread = mongoose.model('Thread', ThreadSchema);
module.exports = Thread;