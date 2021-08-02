const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require( 'sinon');

describe("Math class", function(){ 
    it("Sum two numbers", function() {
        const m = new Math();

        assert.equal(m.sum(2 ,3), 5);
    });

    it('Multiply two numbers', function() {
        const m = new Math();

        expect(m.multiply(2, 3)).to.equal(6);
    });
});