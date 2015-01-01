'use strict';

var WhiteList = require('./../whitelist.js');
var should = require('should');


describe('WhiteList', function() {
    describe('Should allow valid value', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7];
        var wl = new WhiteList(numbers);

        it('should allow 1', function(done) {
            wl.isAllowed(1).should.be.true;
            done();
        });


        it('should allow 4', function(done) {
            wl.isAllowed(4).should.be.true;
            done();
        });

        it('should allow 7', function(done) {
            wl.isAllowed(7).should.be.true;
            done();
        });
    });

    describe('Shouldnt alow invalids', function() {
        var numbers = [1, 2, 3, 4, 5, 6, 7];
        var wl = new WhiteList(numbers);

        it('should not allow 8', function(done) {
            wl.isAllowed(8).should.be.false;
            done();
        });

        it('should not allow empty string', function(done) {
            wl.isAllowed("").should.be.false;
            done();
        });

        it('should not allow null', function(done) {
            wl.isAllowed(null).should.be.false;
            done();
        });
    });
});
