var express = require('express');
var fs = require('fs');
var app = express();

function start(contents = [
    {
        "url": "/test",
        "response": {

        },
        "status": 200,
        "method": "get"
    }
],port = 5000) {

    contents.forEach(element => {

        switch(element.method) {
            case 'post':
                app.post(element.url, (req, res) => res.status(element.status).json(element.response));
                break;
            case 'get':
                app.get(element.url, (req, res) => res.status(element.status).json(element.response));
                break;
            case 'patch':
                app.patch(element.url, (req, res) => res.status(element.status).json(element.response));
                break;
            case 'delete':
                app.delete(element.url, (req, res) => res.status(element.status).json(element.response));
                break;
            default:
                app.get(element.url, (req, res) => res.status(element.status).json(element.response));
                break
        }
    });

    app.listen(port,(error) => {
        if (!error) {
			console.log("The Mighty test server started");
        }
    });
}

module.exports = start;