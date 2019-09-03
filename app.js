const path = require('path');

const express = require('express');
const routes = require('./routes/global');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const errorController = require('./controllers/error');
const app = express();

connectDB();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

// routes(app);
app.use(routes);

// 404 Error
app.use(errorController.get404);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('public'));
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views', 'index.ejs'));
  });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
