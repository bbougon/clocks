const Clocks = require('./../../domain/clocks');

class ClockResource {

    constructor() {
    }

    load(app) {
        app.get("/clocks", (req, res, next) => {
            res.json(new Clocks().all());
        });
    }
}

module.exports = ClockResource;