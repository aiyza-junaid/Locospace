const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({

    comment_id: {
        type: Number,
        required: true,
    },
    thread_id: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Thread'
    },
    createdAt: {
        type: String,
        required: true,
    },
    comment_description: {
        type: String,
        required: true,
    },
    reply_id: {
        type: String
    }
    
});

const Comment =   mongoose.model('Comment', CommentSchema);

module.exports = Comment;
