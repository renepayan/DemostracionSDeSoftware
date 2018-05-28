var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.end();
});
app.listen(8080);
