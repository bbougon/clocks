const Store = require("./store");
const Clocks = require("../../domain/clocks");
const ZoneId = require('js-joda').ZoneId;
const fs = require('fs');

class FileClockStore extends Store {

    getAll() {
        return new Promise((resolve => {
            fs.readFile('src/infrastructure/repositories/clocks/clocks.json', 'utf8', function (err, contents) {
                let json = JSON.parse(contents);
                let clocks = json.map((clock) => {
                    return new Clocks().sameInstant(ZoneId.of(clock.zone))
                });
                resolve(clocks);
            });
        }));

    }
}

module.exports = FileClockStore;