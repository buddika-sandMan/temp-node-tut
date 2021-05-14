const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end('Welcome to our home page');
  }
  if(req.url === '/about'){
    res.end('Here is the our short history');
  }
  res.end(
    `<h1>Oops!</h1>
      <p>We can't reach this web page</p>
      <a href="/">back to home</a>
  `);

});

server.listen(5000);