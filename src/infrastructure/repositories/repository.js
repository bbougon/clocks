class Repository {

    constructor(store){
        this._store = store;
    }

    add(entity) {
        this._store.add(entity);
    }

    getAll() {
        return this._store.getAll();
    }
}

module.exports = Repository;