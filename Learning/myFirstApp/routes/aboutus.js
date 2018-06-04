var express = require("express");
var router = express.Router();

router.get('/', function (request, response) {
    response.status(200);
    console.log("inside the about us controller");
    // response.set('Content-type', 'text/html');
    // response.send('Inside about us page');
    // response.end();
    response.render('aboutus', {
        title: 'Express'
    });

});

module.exports = router;