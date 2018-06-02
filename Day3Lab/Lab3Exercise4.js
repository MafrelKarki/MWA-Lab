let fs = require('fs');
let zlib = require('zlib');

function zipFile(file){
    name = file.split('.')[0];
    let output = fs.createWriteStream(name +".jpg.gz");
    let gzip = zlib.createGzip();
    fs.createReadStream(file).pipe(gzip).pipe(output);
}

function unzipFile(file){
    name = file.split('.')[0];
    let output = fs.createWriteStream(name+"_unzipped.JPG");
    let gunUnzip = zlib.createGunzip();
    fs.createReadStream(file).pipe(gunUnzip).pipe(output);
}

// zipFile("Capture.JPG");
unzipFile("Capture.jpg.gz");