const ClockResource = require('./../../web/resources/clock-resource');
let express = require("express");
let cors = require('cors');

function Server(port, repositories) {
    this._port = port;
    this._repositories = repositories;
    this._server = null;
}

Server.prototype.start = function () {
    const app = express();
    app.use(cors());
    this._server = app.listen(this._port, () => {
        console.log('{Server running on port ' + this._port + '}');
    });
    let loadResources = function (repositories) {
        new ClockResource(repositories).load(app);
    };
    loadResources(this._repositories);
    return app;
};

Server.prototype.close = function () {
    this._server.close();
};

module.exports = Server;