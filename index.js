var express = require('express');
var fs = require('fs');
var app = express();
var file_name = 'api.json'
var contents = fs.readFileSync(file_name, 'utf8');

function start(fileurl,port = 5000) {
    contents = fs.readFileSync(fileurl, 'utf8');
    JSON.parse(contents).forEach(element => {
        app.post(element.url, (req, res) => res.status(element.status).json(element.response));        
    });

    app.listen(port,(error) => {
        console.log(error);
    });
}

module.exports = start;