class MemoryStore {
    _entities = [];

    getAll() {
        return new Promise((resolve => resolve(this._entities)));
    }

    add(entity) {
        this._entities.push(entity);
    }
}

module.exports = MemoryStore;