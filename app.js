// list of requires
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// stuff doing outside of requires
const app = express();
const port = process.env.PORT || 5000;
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '/index.html'));
});

app.listen(port, () => {
  debug(`Listneing at port ${chalk.green(port)}`);
});
