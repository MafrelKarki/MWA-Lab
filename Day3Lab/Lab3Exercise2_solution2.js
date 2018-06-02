let http = require('http');
let fs = require('fs');

http.createServer((req, resp)=>{
    fs.createReadStream('Capture.jpg').pipe(resp);
}).listen(4000);