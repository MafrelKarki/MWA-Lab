const express = require('express');
const app = express();
const mongo = require('mongodb').MongoClient;
const crypto = require('crypto');

const decipher = crypto.createDecipher('aes192', 'a password');

var url = "mongodb://localhost:27017/";

app.get('/secret', function (req, resp) {

    mongo.connect(url, function (err, db) {

        if (err) throw err;
        var data_base = db.db('homework_seven');
        data_base.collection('homework7').findOne({}, function (err, result) {
            if (err) throw err;

            let key = 'asaadsaad';
            let decipher = crypto.createDecipher('aes256', key);
            let decrypted = decipher.update(result.message, 'hex', 'utf8');
            decrypted += decipher.final('utf8');

            resp.send(result.message + " is decrypted to ----->     " + decrypted);

            console.log(decrypted);
            db.close();
        })

    });


});
app.listen(3000, () => console.log("listening to port 3000"));