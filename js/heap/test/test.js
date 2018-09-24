var expect = require('chai').expect;
var MinHeap = require('../heap');

describe('products()', function () {

    it('should return the consecutive mins for heap of size 1', function () {
        var heap = new MinHeap();
        heap.insert(4);
        expect(heap.removeSmallest()).to.equal(4);
    });

    it('should return the consecutive mins for heap of size 5', function () {
        var heap = new MinHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(3);
        heap.insert(4);
        heap.insert(5);
        expect(heap.removeSmallest()).to.equal(1);
        expect(heap.removeSmallest()).to.equal(2);
        expect(heap.removeSmallest()).to.equal(3);
        expect(heap.removeSmallest()).to.equal(4);
        expect(heap.removeSmallest()).to.equal(5);
    });

    it('should work well with heapifyDown', function () {
        var heap = new MinHeap();
        heap.items = [null, 10, 3];
        heap.heapifyDown(1);
        expect(heap.items[1]).to.equal(3);
    });

    it('should work with insertions and removals', function () {
        var heap = new MinHeap();
        heap.insert(5);
        heap.removeSmallest();
        heap.insert(3);
        heap.insert(1);
        heap.insert(0);
        heap.insert(10);
        heap.removeSmallest();
        console.log(heap.items);
        expect(heap.removeSmallest()).to.equal(1);
        console.log(heap.items);
        expect(heap.removeSmallest()).to.equal(3);
        console.log(heap.items);
        expect(heap.removeSmallest()).to.equal(10);
    });

});