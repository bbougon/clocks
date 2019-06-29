let ZonedDateTime = require('js-joda').ZonedDateTime;
let Clock = require('js-joda').Clock;
let ZoneId = require('js-joda').ZoneId;

function ZoneCurrentDateTime(date) {
    this._date = date;
    this._offset = date.offset()._id;
    this._dateTime = this._date.toString();
    this._zoneId = this._date.zone().normalized().id();
}

ZoneCurrentDateTime.now = function (clock = Clock.system(ZoneId.SYSTEM)) {
    return new ZoneCurrentDateTime(ZonedDateTime.now(clock));
};

ZoneCurrentDateTime.prototype.offset = function () {
    return this._offset;
};

ZoneCurrentDateTime.prototype.dateTime = function () {
    return this._dateTime;
};

ZoneCurrentDateTime.prototype.zoneId = function() {
  return this._zoneId;
};

ZoneCurrentDateTime.prototype.sameInstant = function(zoneId) {
  return new ZoneCurrentDateTime(this._date.withZoneSameInstant(zoneId));
};

module.exports = ZoneCurrentDateTime;