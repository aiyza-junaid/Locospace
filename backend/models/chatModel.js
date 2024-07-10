const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({

    chat_id: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: String,
        required: true,
    },
    receiver_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    sender_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    messages: [
        {
          message: String,
          author: String,
          time: Date,
        },
      
    ],

    
    
});

const Chat =   mongoose.model('Chat', ChatSchema);

module.exports = Chat;
