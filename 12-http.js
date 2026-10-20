const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/about') {
        res.end("here is the about page");
    }
    res.end(`
        <h1>Oops! Page not found.</h1>
       <p>We can not seem to find the page you are looking for</p>
       <a href="/">back home</a>
       `);
});

server.listen(5000);