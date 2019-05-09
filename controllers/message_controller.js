const Message = require('../models/message');

module.exports = {
    create(req, res, next) {
        const messageProps = req.body;
        Message(messageProps).save((err, data) => {
            console.log(data);
            res.json(data);
        })
    },

    read(req, res, next) {
        Message.find({}, (err, data) => {
            res.render('contact', {messages: data}); //messages = collection name
        })
            
    }
};