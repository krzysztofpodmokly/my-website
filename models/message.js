const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// const Message = mongoose.model('message', MessageSchema);
// module.exports = Message;

module.exports = mongoose.model('Message', MessageSchema);