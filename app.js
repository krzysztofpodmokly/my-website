const path = require('path');

const express = require('express');
const routes = require('./routes/global');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');

const MONGODB_URI = 'mongodb+srv://kristoff:RURmongod37@cluster0-ga2wq.mongodb.net/messageData?retryWrites=true'

// mongoose.Promise = global.Promise;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// routes(app);
app.use(routes);

// 404 Error
app.use(errorController.get404);

mongoose
    .connect(MONGODB_URI)
    .then(result => {
        console.log('App connected!');
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })