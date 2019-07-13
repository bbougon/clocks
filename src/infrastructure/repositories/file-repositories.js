const ClockRepository = require("./../../domain/clock-repository");
const FileClockStore = require("./file-clock-store");

class FileRepositories {

    constructor() {
        this._clocks = new ClockRepository(new FileClockStore());
    }

    clocks() {
        return this._clocks;
    }
}

module.exports = FileRepositories;
