const chai = require('chai');
const expect = chai.expect;
const FileClockStore = require('./../../../src/infrastructure/repositories/file-clock-store');

describe('Clock store', function () {

    it('retrieve all zones', function (done) {
        new FileClockStore().getAll().then((result) => {
            expect(result).to.be.an('array').that.is.not.empty;
            done();
        });
    });
});