const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port 3000');
});
