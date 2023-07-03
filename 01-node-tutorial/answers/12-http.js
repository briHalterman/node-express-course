// HTTP

// Should use the built-in http module to create a simple web server that listens on port 3000
// This is done with the createServer call
// Pass in a function that checks req.url, and depending on what the URL is, sends back a message to the browser screen, for ‘/’ and several other URLs
// Then have your code listen on port 3000, run it, and test it from your browser, using http://localhost:3000 as the url

// NOTES

// You can look at 12-http.js for the instructor’s answer (except that program listens on 5000)
// You will need to do a ctrl-c to exit your program

// Tutorial code

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Bonnaroo')
    } else if (req.url === '/about') {
        res.end('Here is our story')
    }
    res.end(`
        <h1>Bonna-oops!</h1>
        <p>You got lost somewhere on the farm.</p>
        <a href="/">Back to Camp!</a>
    `)
})

server.listen(3000);