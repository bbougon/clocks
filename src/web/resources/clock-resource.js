class ClockResource {
    _repositories;

    constructor(repositories) {
        this._repositories = repositories;
    }

    load(app) {
        app.get("/clocks", (req, res) => {
            this._repositories.clocks().getAll()
                .then(clocks => res.json(clocks));
        });
    }
}

module.exports = ClockResource;