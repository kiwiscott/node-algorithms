'use strict';

var BinarySearch = require('./../binarySearch.js');
var should = require('should');


describe('BinarySort', function() {
    describe('Simple Array Indexes', function() {
        var numbers = buildRange(5);
        var bs = new BinarySearch(numbers);

        it('should find 1 in position 0', function(done) {
            bs.indexOf(1).should.equal(0);
            done();
        });

        it('should find 5 in position 4', function(done) {
            bs.indexOf(5).should.equal(4);
            done();
        });

        it('should find 3 in position 2', function(done) {
            bs.indexOf(3).should.equal(2);
            done();
        });
    });

    describe('Large Array Indexes', function() {
        var big = 33554432 //Math.pow(2, 25);

        var numbers = buildRange(big);
        var bs = new BinarySearch(numbers);


        it('should find 1 in position 0', function(done) {
            bs.indexOf(1).should.equal(0);
            done();
        });
        it('should find 33554432 in position 33554431', function(done) {
            bs.indexOf(33554432).should.equal(33554431);
            done();
        });

        function findInLoops(value, loops) {
            it('should find ' + value + ' in ' + loops + ' loops', function(done) {

                bs.indexOf(value).should.equal(value - 1);
                bs.rolls.should.equal(loops);
                done();
            });
        }
        findInLoops(33554432, 26);
        findInLoops(1, 25);
        findInLoops(16777216, 1);
        findInLoops(33554430, 24);
        findInLoops(7340032, 5);
        findInLoops(7864320, 6);
        findInLoops(7864319, 25);
        findInLoops(7864318, 24);
        findInLoops(7864317, 25);
        findInLoops(7864316, 23);
    });

    describe('Validate Loop Indicate Binary', function() {

        it('should find the the middle item in the first loop', function(done) {
            var numbers = buildRange(5);
            var bs = new BinarySearch(numbers);

            bs.indexOf(3).should.equal(2);
            bs.rolls.should.equal(1);
            done();
        });


        it('should find 8 in the second loop', function(done) {
            var numbers = buildRange(16);
            var bs = new BinarySearch(numbers);

            bs.indexOf(12).should.equal(11);
            bs.rolls.should.equal(2);
            done();
        });
    });
    describe('Should work with strings', function() {

        var values = ['Apples', 'Bananas', 'Mango', 'Oranges', 'Pears', 'Quince', 'Raspberry']
        var bs = new BinarySearch(values);

        it('find Mango in 3 loops at index 2', function(done) {

            bs.indexOf('Mango').should.equal(2);
            bs.rolls.should.equal(3);
            done();
        });


        it('finding Oranges in one loop', function(done) {
            bs.indexOf('Oranges').should.equal(3);
            bs.rolls.should.equal(1);
            done();
        });
    });
});

function buildRange(max) {
    var numbers = new Array(max);
    for (var i = 0; i < max; i++) {
        numbers[i] = i + 1;
    }
    return numbers;

}