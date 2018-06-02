let http = require('http');
let fs = require('fs');

http.createServer((req, resp) => {
    fs.readFile('Capture.jpg', (err,data)=>{
        resp.end(data);
    });
}).listen(3000);