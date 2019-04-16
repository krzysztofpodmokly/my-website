const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/css', express.static('css'));
app.use('/img', express.static('img'));

// Main path
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

app.get('/projects', (req, res, next) => {
    res.render('projects', {
        pageTitle: 'Projects | My Website'
    });
});

app.get('/about', (req, res, next) => {
    res.render('about', {
        pageTitle: 'About Me | My Website'
    })
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Error | Page Not Found'
    });
});

app.listen(3000, (err) => {
    if (err) {
        console.log('Unable to connect');
    } else {
        console.log('Connected to Application!')
    }
});