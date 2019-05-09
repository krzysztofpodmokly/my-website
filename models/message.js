const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    email: String,
    fullName: String,
    message: String
    // email: {
    //     type: String,
    //     required: [true, 'Email is required'],
    //     validate: {
             
    //     }
    // },
    // fullName: {
    //     type: String,
    //     required: [true, 'Full name is required'],
    //     validate: {
    //         validator: (fullName) => fullName.split(" ").length >= 2,
    //         message: 'Type your full name'
    //     }
    // },
    // message: {
    //     type: String,
    //     required: true
    // }
});

const Message = mongoose.model('message', MessageSchema);

module.exports = Message;