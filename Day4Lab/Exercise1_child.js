const fs = require('fs');

process.on('message', function(filepath){
    var fileData = fs.readFileSync(filepath, 'UTF-8');
    process.send(fileData);
})