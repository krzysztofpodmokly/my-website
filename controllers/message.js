const Message = require('../models/message');

exports.createMessage = (req, res, next) => {
    const email = req.body.email;
    const fullName = req.body.fullName;
    const info = req.body.message;

    const message = new Message({
        email,
        fullName,
        message: info
    });

    message
        .save()
        .then(result => {
            console.log('Message was sent!');
            res.redirect('/'); // redirect done by message.js in assets
        });
    };

exports.readMessage = (req, res, next) => {
    Message.find({}, (err, data) => {
        res.render('contact', {
            messages: data
        });
    });
};

exports.getHomePage = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home | My Website'
    });
};

exports.getContactPage = (req, res, next) => {
    res.render('contact', {
        pageTitle: 'Contact | My Website'
    });
};

exports.getProjectPage = (req, res, next) => {
    res.render('projects', {
        pageTitle: 'Projects | My Website'
    });
};

exports.getAboutPage = (req, res, next) => {
    res.render('curriculum', {
        pageTitle: 'About Me | My Website'
    });
};