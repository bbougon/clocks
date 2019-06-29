require("js-joda-timezone");
const chai = require('chai');
const expect = chai.expect;
const ZoneCurrentDateTime = require('../../src/domain/zone-current-date-time');
const Instant = require('js-joda').Instant;
const ZoneId = require('js-joda').ZoneId;
const Clock = require('js-joda').Clock;

describe('Current Time', function () {

    it('is now', function () {
        let clock = Clock.fixed(Instant.EPOCH, ZoneId.SYSTEM);

        let dateTime = ZoneCurrentDateTime.now(clock);

        expect(dateTime.offset()).to.equal('+01:00');
        expect(dateTime.dateTime()).to.equal('1970-01-01T01:00+01:00[SYSTEM]');
        expect(dateTime.zoneId()).to.equal('SYSTEM');
    });

    it('has default system clock', function () {
        let dateTime = ZoneCurrentDateTime.now();

        expect(dateTime.dateTime()).match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}\.[0-9]{3}\+[0-9]{2}:[0-9]{2}\[SYSTEM\]/);
        expect(dateTime.zoneId()).to.equal('SYSTEM');
    });

    it('can gives same instant time at different zone', function () {
        let clock = Clock.fixed(Instant.EPOCH, ZoneId.SYSTEM);
        let dateTime = ZoneCurrentDateTime.now(clock);

        let sameInstant = dateTime.sameInstant(ZoneId.of('Europe/London'));

        expect(sameInstant.dateTime()).to.equal('1970-01-01T01:00+01:00[Europe/London]');
        expect(sameInstant.zoneId()).to.equal('Europe/London');
    })
});