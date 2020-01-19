//list of requires
let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');

// stuff doing outside of requires
let app = express();

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send("Hello form my library app");
});

app.listen(5000, () => {
  debug(`Listneing on port ${chalk.green(5000)}`);
});