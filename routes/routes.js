const MessageController = require('../controllers/message_controller');

module.exports = (app) => {
    
    // const data = [{email: 'test@test.com'}]
    
    app.get('/random', MessageController.read)
    app.post('/contact', MessageController.create);

    // Main View
    app.get('/', (req, res, next) => {
        res.render('index', {
            pageTitle: 'Home | My Website'
        });
    });

    // Contact Form
    app.get('/contact', (req, res, next) => {
        res.render('contact', {
            pageTitle: 'Contact | My Website'
        });
    });

    // My Projects
    app.get('/projects', (req, res, next) => {
        res.render('projects', {
            pageTitle: 'Projects | My Website'
        });
    });

    // About Me
    app.get('/about', (req, res, next) => {
        res.render('curriculum', {
            pageTitle: 'About Me | My Website'
        })
    });

    // 404 Error
    app.use((req, res, next) => {
        res.status(404).render('404', {
            pageTitle: 'Error | Page Not Found'
        });
    });

    // Creating Message
    // app.get('/contact', MessageController.read);

    
}