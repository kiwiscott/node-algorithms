'use strict';

var collections = require('./../index.js');
var should = require('should');

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