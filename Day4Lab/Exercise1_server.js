const {
    Subject
} = require('rxjs');
const {
    fork
} = require('child_process');
const http = require('http');
const url = require('url');
const queryString = require('querystring');

const port = 4000;
const subject = new Subject();

subject.subscribe(readFile);


function readFile(fileUrl) {
    var filePath = queryString.parse(url.parse(fileUrl.req.url).query);
    console.log(filePath.url);
    
    // if(filePath.url){
    //     var pathOfFile = filePath.url;
    //     const childProcess = fork('Exercise1_child.js');
    //     childProcess.send(pathOfFile);
    //     childProcess.on('message', fileData =>{
    //         fileUrl.resp.end(fileData);
    //     })
    // }
    // console.log("Reading file.....");
};

http.createServer((req, resp) => {
    subject.next({
        req,
        resp
    });
    // console.log(`listening to port: ${port}`);
    // resp.writeHead(200, {'Content-type': 'text/plain'});
    // resp.end('hello there finally');
}).listen(port, () => console.log("Started listening"));