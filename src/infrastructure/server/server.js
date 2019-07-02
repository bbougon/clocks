const ClockResource = require('./../../web/resources/clock-resource');
var express = require("express");
var cors = require('cors');

function Server(port) {
    this._port = port;
}

Server.prototype.start = function () {
    const app = express();
    app.use(cors());
    app.listen(this._port, () => {
        console.log('{Server running on port ' + this._port + '}');
    });
    let loadResources = function () {
        new ClockResource().load(app);
    };
    loadResources();
    return app;
};

module.exports = Server;