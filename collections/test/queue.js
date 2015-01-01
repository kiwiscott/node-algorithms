'use strict';
var collections = require('./../index.js');
var should = require('should');

describe('Queue Iterator', function() {
    it('Should be able to iterate through the collection', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);
        var count = 0;
        while (b.iterator.hasNext()) {
            var value = i.next();
            value.should.equal(++count);
        }
        while (b.iterator.hasNext()) {
            var value = i.next();
            value.should.equal(++count);
        }

        done();
    });

    it('Should throw an error if the collection is added to while iterating', function(done) {
        var b = new collections.Queue();
        for (var i = 0; i < 10; i++) {
            b.enqueue(i);
        }

        var count = 0;

        var addWhileIterating = function() {
            while (b.iterator.hasNext()) {
                if (count == 5) b.enqueue(5);
                var value = i.next();
                value.should.equal(++count);
            }
        };

        should(addWhileIterating()).throw;
        done();
    });

    it('Should throw an error if the collection is removed from while iterating', function(done) {
        var b = new collections.Queue();
        for (var i = 0; i < 10; i++) {
            b.enqueue(i);
        }

        var count = 0;

        var removeWhileIterating = function() {
            while (b.iterator.hasNext()) {
                if (count == 5) b.dequeue();
                var value = i.next();
                value.should.equal(++count);
            }
        };
        should(removeWhileIterating()).throw;
        done();
    });


    it('Should be able to iterate through the collection twice with the same result', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);
        var count = 0;
        while (b.iterator.hasNext()) {
            var value = i.next();
            value.should.equal(++count);
        }
        while (b.iterator.hasNext()) {
            var value = i.next();
            value.should.equal(++count);
        }

        done();
    });
});

describe('Queue', function() {
    it('New should be empty', function(done) {
        var b = new collections.Queue();
        b.isEmpty().should.be.true;
        done();
    });
    it('New should have size 0', function(done) {
        var b = new collections.Queue();
        b.size().should.equal(0);
        done();
    });
    it('Adding a single item should make the size bigger', function(done) {
        var b = new collections.Queue();
        b.enqueue("Bobby");
        b.size().should.equal(1);
        done();
    });
    it('After adding the first item it should no longer be expty', function(done) {
        var b = new collections.Queue();
        b.enqueue("Bobby");
        b.isEmpty().should.be.false;
        done();
    });
    it('Dequeue should be FIFO Simple', function(done) {
        var b = new collections.Queue();
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.enqueue(a[i]);
        }
        var i = b.dequeue();
        i.should.eql(1);
        i = b.dequeue(); //2
        i = b.dequeue(); //3
        i = b.dequeue(); //4
        i.should.eql(4);
        done();
    });
    it('Dequeue should be FIFO Array', function(done) {
        var b = new collections.Queue();
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.enqueue(a[i]);
        }
        var aa = [];
        for (var i = 0; i < a.length; i++) {
            aa.push(b.dequeue());
        }
        a.should.eql(aa);
        done();
    });
    it('Dequeue should be null when empty', function(done) {
        var b = new collections.Queue();
        var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (var i = 0; i < a.length; i++) {
            b.enqueue(a[i]);
        }
        var aa = [];
        for (var i = 0; i < a.length; i++) {
            aa.push(b.dequeue());
        }
        //queue is empty 
        b.isEmpty().should.be.true;
        (b.dequeue() == null).should.be.true;
        done();
    });
    it('Adding a 100 items should result in size 100', function(done) {
        var b = new collections.Queue();
        for (var i = 0; i < 100; i++) {
            b.enqueue(i);
        }
        b.size().should.equal(100);
        done();
    });
    it('Size should decrement every time we remove', function(done) {
        var b = new collections.Queue();
        var total = 100;
        for (var i = 0; i < total; i++) {
            b.enqueue(i);
        }
        var expectedSize = 100;
        for (var i = 0; i < total; i++) {
            expectedSize--;
            b.dequeue();
            b.size().should.equal(expectedSize);
        }
        done();
    });
    it('Remove By Index', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);

        b.removeByIndex(1);
        b.size().should.equal(2);

        b.dequeue().should.equal(1);
        b.dequeue().should.equal(3);
        done();
    });

    it('Remove By Index remove first node', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);

        b.removeByIndex(0);
        b.size().should.equal(2);

        b.dequeue().should.equal(2);
        b.dequeue().should.equal(3);
        done();
    });
    it('Remove By Index remove last node', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);

        b.removeByIndex(2);
        b.size().should.equal(2);

        b.dequeue().should.equal(1);
        b.dequeue().should.equal(2);
        done();
    });

    it('Remove By Index no effect when node doesnt exist', function(done) {
        var b = new collections.Queue();
        b.enqueue(1);
        b.enqueue(2);
        b.enqueue(3);

        b.removeByIndex(4);
        b.size().should.equal(3);
        done();
    });

});