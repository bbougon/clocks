require("js-joda-timezone");
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

    it('in Asia/Tokyo', function () {
        expect(clocks.tokyo().zoneId()).to.equal('Asia/Tokyo');
        expect(clocks.tokyo().dateTime()).to.equal('1970-01-01T09:00+09:00[Asia/Tokyo]');
    });

    it('in Europe/Moscow', function () {
        expect(clocks.moscow().zoneId()).to.equal('Europe/Moscow');
        expect(clocks.moscow().dateTime()).to.equal('1970-01-01T03:00+03:00[Europe/Moscow]');
    });

    it('in Europe/Paris', function () {
        expect(clocks.paris().zoneId()).to.equal('Europe/Paris');
        expect(clocks.paris().dateTime()).to.equal('1970-01-01T01:00+01:00[Europe/Paris]');
    });

    it('in Europe/London', function () {
        expect(clocks.london().zoneId()).to.equal('Europe/London');
        expect(clocks.london().dateTime()).to.equal('1970-01-01T01:00+01:00[Europe/London]');
    });

    it('in America/New_York', function () {
        expect(clocks.newYork().zoneId()).to.equal('America/New_York');
        expect(clocks.newYork().dateTime()).to.equal('1969-12-31T19:00-05:00[America/New_York]');
    });

    it('in America/Los_Angeles', function () {
        expect(clocks.losAngeles().zoneId()).to.equal('America/Los_Angeles');
        expect(clocks.losAngeles().dateTime()).to.equal('1969-12-31T16:00-08:00[America/Los_Angeles]');
    });

    it('in America/Sao_Paulo', function () {
        expect(clocks.saoPaulo().zoneId()).to.equal('America/Sao_Paulo');
        expect(clocks.saoPaulo().dateTime()).to.equal('1969-12-31T21:00-03:00[America/Sao_Paulo]');
    });

    describe('All clocks', function () {

        it('are available', function () {
            expect(clocks.all()).to.deep.equal([clocks.tokyo(), clocks.moscow(), clocks.paris(), clocks.london(), clocks.newYork(), clocks.losAngeles(), clocks.saoPaulo()]);
        });
    })
});