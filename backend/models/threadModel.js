const mongoose = require('mongoose');

const ThreadSchema = new mongoose.Schema({

    thread_id: {
        type: Number,
        required: true,
    },
    user_id: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    community_id: { 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Community'
    },
    
    createdAt: {
        type: String,
        required: true,
    },
    thread_description: {
        type: String,
        required: true,
    },
    
});

const Thread =   mongoose.model('Thread', ThreadSchema);

module.exports = Thread;
