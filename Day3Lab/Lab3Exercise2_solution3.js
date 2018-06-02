let http = require('http');
let fs = require('fs');


http.createServer((req, res) => {
    let src = fs.createReadStream('Capture.jpg');
    src.on('data', (chunk) => {
        if (!res.write(chunk)) {
            src.pause();
        }
    });

    res.on('drain', () => {
        src.resume();
    });

    src.on('end', () => {
        res.end();
    });
}).listen(4000);