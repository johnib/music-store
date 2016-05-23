// deps
var express = require('express'),
  _ = require('lodash'),
  morgan = require('morgan');

// known methods
var methods = require('./methods');

var app = express();
app.use(morgan('combined'));

// REST API for all known operations with optional ID parameter
app.get('/:method/:id?', function (req, res) {
  //noinspection JSUnresolvedVariable
  if (req.params.method && _.includes(methods, req.params.method)) {
    //noinspection JSUnresolvedVariable
    console.log(req.params);

    res.end("200");
  } else {
    console.log("method not supported");

    res.end("501");
  }
});

app.get('/shoppingCart/purchase', function (req, res) {

});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server listening on port " + (process.env.PORT || 3000));
  console.log("http://localhost:" + (process.env.PORT || 3000));
});