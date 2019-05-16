const messageController = require('../controllers/message');
const express = require('express');
const router = express.Router();

// router.get('/random', messageController.readMessage);

router.post('/contact', messageController.createMessage);

router.get('/', messageController.getHomePage);

router.get('/contact', messageController.getContactPage);

router.get('/projects', messageController.getContactPage);

router.get('/about', messageController.getContactPage);

module.exports = router;
