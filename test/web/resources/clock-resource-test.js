const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const expect = chai.expect;
const Server = require('./../../../src/infrastructure/server/server');
const ClockResource = require('./../../../src/web/resources/clock-resource');
const Clocks = require('./../../../src/domain/clocks');

let app;

describe('Clock resource', function () {

    beforeEach(function () {
        app = new Server().start();
        chai.use(chaiHttp);
    });

    it('returns all clocks',  (done) => {
        chai.request(app)
            .get('/clocks')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array').that.have.lengthOf(7);
                expect(res.body[0]._offset).to.equal('+09:00');
                expect(res.body[0]._zoneId).to.equal('Asia/Tokyo');
                done();
            });
    });
});