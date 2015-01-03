'use strict';

var collections = require('./../index.js');
var should = require('should');

describe('Bag Ramdom Iterator', function() {
    it('Should be able to iterate through the collection', function(done) {
        var b = new collections.Bag();
        b.add(1);
        b.add(2);
        b.add(3);
        var count = 0;
        var i = b.iterator();

        while (i.hasNext()) {
            if (count == 20) break;
            count++;
            i.next();
        }
        count.should.equal(3);

        count = 0;
        i = b.iterator();
        while (i.hasNext()) {
            if (count == 20) break;
            count++;
            i.next();
        }
        count.should.equal(3);

        done();
    });
});

describe('Bag', function() {
    it('New Bag should be empty', function(done) {
        var b = new collections.Bag();
        b.isEmpty().should.be.true;
        done();
    });

    it('New Bag should have size 0', function(done) {
        var b = new collections.Bag();
        b.size().should.equal(0);
        done();
    });

    it('Adding a single item should make the size bigger', function(done) {
        var b = new collections.Bag();
        b.add("Bobby");
        b.size().should.equal(1);
        done();
    });

    it('After adding the first item it should no longer be expty', function(done) {
        var b = new collections.Bag();
        b.add("Bobby");
        b.isEmpty().should.be.false;
        done();
    });
});