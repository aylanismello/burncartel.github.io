var express = require('express')
var cookieParser = require('cookie-parser');
var app = express()
// app.use(express.static('/'))
app.use(express.static(__dirname + '/'));
app.use(cookieParser());
var path = require("path");


app.get('/', function (req, res) {
  // console.log(res);
  res.sendFile(path.join(__dirname+'/index.html'));
  // res.send('sup');
  // res.send('Hello World!')
})

app.get('/auth/facebook/callback', (req, res) => {
  console.log('Cookies: ', req.cookies)
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
  // console.dir(req);

  // res.send('yo');
});

app.listen(4000, function (req, res) {
  console.log('Example app listening on port 4000!')
})
