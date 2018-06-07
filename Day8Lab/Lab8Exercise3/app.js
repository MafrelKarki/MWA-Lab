const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const validator = require('express-validator');

var app = express();
var jsonParser = express.json();

var server = app.listen(5000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(`This app is listening to host: ${host} at port:${port}`);
});

var allLocations = app.get('/api/v1/locations/all', function (req, resp) {

    mongoClient.connect('mongodb://127.0.0.1:27017/Lab8', (err, database) => {
        if (err) throw err;
        const db = database.db('Lab8');
        let locations = [];
        let pointer = db.collection('location').find({});

        pointer.each((err, locs) => {
            if (locs) {
                locations.push(locs);
            } else {
                resp.send(locations);
            }
        });

    });
});

app.post('/api/v1/locations', jsonParser, function (request, response) {

    mongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
        if (err) throw err;
        const db = database.db('Lab8');
        db.collection('location')
            .insert({
                'name': request.body.name,
                'category': request.body.category,
                'location': {
                    "longitude": request.body.location.longitude,
                    "latitude": request.body.location.latitude
                }
            });

        response.send({
            "message": "1 Location document created successfully"
        });
        database.close();

    });

});

app.put('/api/v1/locations/:name', jsonParser, function (request, response) {
    var location = request.params.name;

    console.log("insided put method");
    console.log(location);
    mongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
        if (err) throw err;

        const db = database.db('Lab8');

        db.collection('location').update({
            name: location
        }, {
            $set: {
                name: request.body.name,
                category: request.body.category,
                location: [request.body.longitude, request.body.latitude]
            }
        }, (err, records) => {

            if (err) throw err;
            console.log("1 document updated");
            response.json({
                "message": "Record is Updated successfully"
            });

        });
    });


});

app.delete('/api/v1/locations/:name', function (req, res) {
    var name = req.params.name;
    console.log("Location name to be deleted" + name);
    mongoClient.connect('mongodb://127.0.0.1:27017', (err, database) => {
        if (err) throw err;
        const db = database.db('Lab8');
        db.collection('location').remove({
            name: name
        }, (err, records) => {
            if (err) throw err;
            res.send('Record Deleted')
            database.close();
        });

    });
});



app.get('/api/v1/locations/nearby', function (request, response, next) {
    mongoClient.connect('mongodb://127.0.0.1:27017/Lab8', (err, client) => {
      if (err) throw err;
      const db = client.db('Lab8');
      let locations = [];
      let cursor = db.collection('location').find(
          { location: { $near: [-91.95938330000001, 41.0127361]}}).skip(1).limit(4);

            // db.location.find({location: {$near:[-91.95938330000001, 41.0127361]}}).limit(4)
      cursor.each((err, doc) => {
        if (err) throw err;
        if (doc) {
          console.log(doc);
          locations.push(doc);
        } else {
          response.send(locations);
        }
      });
    });
  });