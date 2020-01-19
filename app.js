//list of requires
let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
let path = require('path');

// stuff doing outside of requires
let app = express();

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views",  "/index.html"));
});

app.listen(5000, () => {
  debug(`Listneing on port ${chalk.green(5000)}`);
});