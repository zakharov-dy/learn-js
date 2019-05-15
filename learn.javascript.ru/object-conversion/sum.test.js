const assert = require('chai').assert;
const sum = require('./sum');

describe('sum', function() {
    it('sum(1) === 1', function() {
        assert.equal(sum(1), 1);
    });
    it('sum(1)(2) === 3', function() {
        assert.equal(sum(1)(2), 3);
    });
    it('sum(10)(15)(100) === 125', function() {
        assert.equal(sum(10)(15)(100), 125);
    });
});