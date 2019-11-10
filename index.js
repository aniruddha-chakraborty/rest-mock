var express = require('express');
var fs = require('fs');
var app = express();
var file_name = 'api.json'
var contents = fs.readFileSync(file_name, 'utf8');

function start(contents = [
    {
        "url": "/test",
        "response": {

        },
        "status": 200,
        "method": "post"
    }
],port = 5000) {

    contents.forEach(element => {
        app[element.method](element.url, (req, res) => res.status(element.status).json(element.response));        
    });

    app.listen(port,(error) => {
        if (!error) {
			console.log("The Mighty test server started");
        }
    });
}

module.exports = start;