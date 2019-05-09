const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kristoff:RURmongod37@cluster0-ga2wq.mongodb.net/messageData?retryWrites=true');

mongoose.Promise = global.Promise;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));
app.use('/public', express.static('public'));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);
// const urlencodedParser = bodyParser.urlencoded({ extended: false });


// Main path
// app.get('/', (req, res, next) => {
//     res.render('index', {
//         pageTitle: 'Home | My Website'
//     });
// });

// Contact Form
// app.get('/contact', (req, res, next) => {
//     res.render('contact', {
//         pageTitle: 'Contact | My Website'
//     });
// });

// app.get('/projects', (req, res, next) => {
//     res.render('projects', {
//         pageTitle: 'Projects | My Website'
//     });
// });

// app.get('/about', (req, res, next) => {
//     res.render('curriculum', {
//         pageTitle: 'About Me | My Website'
//     })
// });

// app.use((req, res, next) => {
//     res.status(404).render('404', {
//         pageTitle: 'Error | Page Not Found'
//     });
// });

app.listen(3000, (err) => {
    if (err) {
        console.log('Unable to connect');
    } else {
        console.log('Connected to Application!')
    }
});