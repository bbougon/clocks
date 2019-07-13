require("js-joda-timezone");
const ZoneCurrentDateTime = require('./zone-current-date-time');

function Clocks(clock) {
    this._currentDateTime = ZoneCurrentDateTime.now(clock);
}

Clocks.prototype.sameInstant = function (zoneId) {
    return this._currentDateTime.sameInstant(zoneId);
};

module.exports = Clocks;