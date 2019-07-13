const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const expect = chai.expect;
const Server = require('./../../../src/infrastructure/server/server');
const ClockResource = require('./../../../src/web/resources/clock-resource');
const Clocks = require('./../../../src/domain/clocks');
const MemoryRepositories = require('./../../../test/infrastructure/repositories/memory-repositories');
const ZoneId = require('js-joda').ZoneId;
const Instant = require('js-joda').Instant;
const Clock = require('js-joda').Clock;

let app;
let server;

describe('Clock resource', function () {

    beforeEach(function () {
        let clocks = new Clocks(Clock.fixed(Instant.EPOCH, ZoneId.of('Z')));
        let memoryRepositories = new MemoryRepositories();
        memoryRepositories.clocks().add(clocks.sameInstant(ZoneId.of('Asia/Tokyo')));
        memoryRepositories.clocks().add(clocks.sameInstant(ZoneId.of('Europe/Moscow')));
        memoryRepositories.clocks().add(clocks.sameInstant(ZoneId.of('Europe/Paris')));
        memoryRepositories.clocks().add(clocks.sameInstant(ZoneId.of('Europe/London')));
        server = new Server(10000, memoryRepositories);
        app = server.start();
        chai.use(chaiHttp);
    });

    afterEach(() => {
        server.close();
    });

    it('returns all clocks',  (done) => {
        chai.request(app)
            .get('/clocks')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array').that.have.lengthOf(4);
                expect(res.body[0]._offset).to.equal('+09:00');
                expect(res.body[0]._zoneId).to.equal('Asia/Tokyo');
                done();
            });
    });
});