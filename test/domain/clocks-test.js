const chai = require('chai');
const expect = chai.expect;
const Clocks = require('../../src/domain/clocks');
const ZoneId = require('js-joda').ZoneId;
const Instant = require('js-joda').Instant;
const Clock = require('js-joda').Clock;

describe('Clocks ', function () {

    let clocks = null;

    beforeEach(function () {
        clocks = new Clocks(Clock.fixed(Instant.EPOCH, ZoneId.of('Z')));
    });

    let timeZone = function (zoneId = 'Asia/Tokyo') {
        return clocks.sameInstant(ZoneId.of(zoneId));
    };

    let expectTimzone = function (timeZone, expectedZone, expectedTime) {
        expect(timeZone.zoneId()).to.equal(expectedZone);
        expect(timeZone.dateTime()).to.equal(expectedTime);
    };

    it('gives instant corresponding to timezone', function () {
        expectTimzone(timeZone('Asia/Tokyo'), 'Asia/Tokyo', '1970-01-01T09:00+09:00[Asia/Tokyo]');
        expectTimzone(timeZone('Europe/Moscow'), 'Europe/Moscow', '1970-01-01T03:00+03:00[Europe/Moscow]');
        expectTimzone(timeZone('Europe/Paris'), 'Europe/Paris', '1970-01-01T01:00+01:00[Europe/Paris]');
    });

});