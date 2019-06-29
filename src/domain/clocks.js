require("js-joda-timezone");
const ZoneCurrentDateTime = require('./zone-current-date-time');
let ZoneId = require('js-joda').ZoneId;

function Clocks(clock) {
    this._currentDateTime = ZoneCurrentDateTime.now(clock);
}

Clocks.prototype.tokyo = function () {
    return this._currentDateTime.sameInstant(ZoneId.of("Asia/Tokyo"));
};

Clocks.prototype.moscow = function () {
    return this._currentDateTime.sameInstant(ZoneId.of("Europe/Moscow"));
};

Clocks.prototype.paris = function () {
    return this._currentDateTime.sameInstant(ZoneId.of('Europe/Paris'));
};

Clocks.prototype.london = function () {
    return this._currentDateTime.sameInstant(ZoneId.of('Europe/London'));
};

Clocks.prototype.newYork = function () {
    return this._currentDateTime.sameInstant(ZoneId.of('America/New_York'));
};

Clocks.prototype.losAngeles = function () {
    return this._currentDateTime.sameInstant(ZoneId.of('America/Los_Angeles'));
};

Clocks.prototype.saoPaulo = function () {
    return this._currentDateTime.sameInstant(ZoneId.of('America/Sao_Paulo'));
};

Clocks.prototype.all = function () {
    return [this.tokyo(), this.moscow(), this.paris(), this.london(), this.newYork(), this.losAngeles(), this.saoPaulo()];
};

module.exports = Clocks;