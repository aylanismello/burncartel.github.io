var express = require('express')
var app = express()
// app.use(express.static('/'))
app.use(express.static(__dirname + '/'));
var path = require("path");


app.get('/', function (req, res) {
  // console.log(res);
  res.sendFile(path.join(__dirname+'/index.html'));
  // res.send('sup');
  // res.send('Hello World!')
})

app.listen(4000, function (req, res) {
  console.log('Example app listening on port 4000!')
})
