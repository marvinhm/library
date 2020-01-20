//list of requires
let express = require('express');
let chalk = require('chalk');
let debug = require('debug')('app');
let morgan = require('morgan');
let path = require('path');

// stuff doing outside of requires
let app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js/')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "views",  "/index.html"));
});

app.listen(5000, () => {
  debug(`Listneing on port ${chalk.green(5000)}`);
});