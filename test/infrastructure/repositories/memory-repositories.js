const ClockRepository = require('./../../../src/domain/clock-repository');
const MemoryStore = require('./memory-store');

class MemoryRepositories {

    _clockRepository;

    constructor() {
        this._clockRepository = new ClockRepository(new MemoryStore());
    }

    clocks() {
        return this._clockRepository;
    }
}

module.exports = MemoryRepositories;