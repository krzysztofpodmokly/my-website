const messageController = require('../controllers/message');
const express = require('express');
const router = express.Router();

// router.get('/random', messageController.readMessage);

router.post('/contact', messageController.createMessage);


router.get('/contact', messageController.getContactPage);

router.get('/projects', messageController.getProjectPage);

router.get('/about', messageController.getAboutPage);
router.get('/', messageController.getHomePage);

module.exports = router;
