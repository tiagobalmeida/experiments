var expect = require('chai').expect;
var products = require('../main').products;

describe('products()', function () {

    it('should return the product of all the other 5 elements', function () {
        var elements = [1,2,3,4,5];

        var candidate = products(elements);

        expect(candidate).to.deep.equal([120,60,40,30,24]);
    });

    it('should return the product of all the other 1 elements', function () {
        var elements = [5];

        var candidate1 = products(elements);

        expect(candidate1).to.deep.equal([1]);
    });

    it('should return the product of all the other 3 elements', function () {
        var elements = [10, 100, 1000];

        var candidate = products(elements);

        expect(candidate).to.deep.equal([100000, 10000, 1000]);
    });
});